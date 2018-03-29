/* file: gulpfile.js */

const gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const webp = require('gulp-webp');
const autoprefixer = require('gulp-autoprefixer');
const cache = require('gulp-cache');
const workbox = require('workbox-build');
const runSequence = require('run-sequence');
const del = require('del');
const minify = require('gulp-babel-minify');
const minifyHtml = require('gulp-htmlmin');
const cleanCss = require('gulp-clean-css');
const cssNano = require('gulp-cssnano');
const gzip = require('gulp-gzip');
const sourcemaps = require('gulp-sourcemaps');
const responsive = require('gulp-responsive-images');

const src = 'app';
const dist='dist';


gulp.task('clean', () => {
    return del(dist);
});

gulp.task('css', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.init())
        .pipe(cssNano())
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('html', () =>{
   return gulp.src('app/**/*.html')
       // .pipe(useref())
       .pipe(sourcemaps.init())
       .pipe( minifyHtml({
        collapseWhitespace: true
        }))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest(dist));
});

gulp.task('js', () =>{
    return gulp.src('./app/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: browserSync['env']
        }))
        .pipe(minify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('gzip', () => {
    gulp.src(['!app/sw.js','app/**/*.+(html|js|css)'])
        .pipe(gzip())
        .pipe(gulp.dest(dist))
});


gulp.task('responsive', ()=>{
    gulp.src('app/images_src/**/*')
        .pipe(responsive({
            '*.jpg': [{
                width: '40%',
                quality: 30,
                suffix: '_small'
            }, {
                width: '60%',
                quality: 50,
                suffix: '_large'
            }],
        }))
        .pipe(gulp.dest('app/img'));
});

gulp.task('webp', () => {
    gulp.src('app/img/**/*.+(jpg|jpeg|png|gif|svg)')
        .pipe(webp({
            use: [
                webp({quality: 20})
            ]
        }))
        .pipe(gulp.dest('app/img'))
});

gulp.task('image-min',() => {
    return gulp.src('app/img/**/*.+(jpg|jpeg|png|gif|svg|webp)')
        .pipe(cache(imagemin({
            progressive: true,
            interlaced: true,
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['js/**/*.js','!node_modules/**'])
    // eslint() attaches the lint output to the "eslint" property
    // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('generate-service-worker', () => {
    return workbox.injectManifest({
        globDirectory: dist,
        globPatterns: [
            '**/*.{html,js,jpg,css,gz}'
        ],
        swDest: `${dist}/sw.js`,
        swSrc: `${src}/sw.js`
    }).then(({warnings}) => {
        // In case there are any warnings from workbox-build, log them.
        for (const warning of warnings) {
            console.warn(warning);
        }
        console.info('Service worker generation completed.');
    }).catch((error) => {
        console.warn('Service worker generation failed:', error);
    });
});

gulp.task('generate-manifest',() => {
    gulp.src('./app/**/*.json')
        .pipe(gulp.dest('./dist'))
});

//Browsersync
gulp.task('serve',() =>{
    browserSync.init({
        server: './dist',
        files: ['./dist/*.html', './dist/css/*.css', './dist/js/*.js']
        }, function (err, bs) {
            bs.addMiddleware("*",  require('connect-gzip-static')('./dist'), {
                override: true
            });
    });
});

gulp.task('default',['clean','watch'], ()=>{
    runSequence([
        'lint',
        'css',
        'html',
        'js',
        'responsive',
        'image-min',
        'webp'
        ],'gzip','generate-manifest','generate-service-worker', 'serve');
});

gulp.task('watch', ()=>{
    gulp.watch('app/scss/**/*.scss', ['css'],reload);
    gulp.watch('app/*.html',['html'], reload);
    // gulp.watch('app/img/**/*.+(jpg|jpeg|png|gif|svg)',['responsive'], reload);
    gulp.watch('app/js/**/*.js', ['js'], reload);
});