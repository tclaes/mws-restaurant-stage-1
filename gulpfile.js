/* file: gulpfile.js */

const gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant');
const webp = require('gulp-webp');
const autoprefixer = require('gulp-autoprefixer');
const useref = require('gulp-useref');
// const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cache = require('gulp-cache');
const workbox = require('workbox-build');
const runSequence = require('run-sequence');
const del = require('del');
const minify = require('gulp-babel-minify');
const minifyHtml = require('gulp-htmlmin');
const src = 'app';
const dist = 'dist';
const sourcemaps = require('gulp-sourcemaps');

gulp.task('default',[
    'clean',
    'browserSync',
    'lint',
    'build-css',
    'copy-html',
    'image-min',
    'scripts'], ()=>{
    gulp.watch('app/scss/**/*.scss', ['build-css'], browserSync.reload);
    gulp.watch('app/*.html',['copy-html'], browserSync.reload);
    gulp.watch('app/img/**/*.+(jpg|jpeg|png|gif|svg)',['image-min'], browserSync.reload);
    gulp.watch('app/js/**/*.js', ['scripts'], browserSync.reload);
});

gulp.task('serve',[
    'clean',
    'lint',
    'build-css',
    'image-min',
    'scripts-dist'], ()=>{
    runSequence('generate-service-worker');
});

// Browsersync
gulp.task('browserSync',() =>{
    browserSync.init({
        server: './dist'
    });
});

gulp.task('build-css', () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css'))
});

gulp.task('copy-html', () =>{
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('minify-html', () =>{
    gulp.src('./app/**/*.html')
        .pipe(minifyHtml({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('webp', () => {
    gulp.src('app/images/**/*.+(jpg|jpeg|png|gif|svg)')
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


gulp.task('scripts', ()=>{
    return gulp.src('app/js/**/*.js')
        .pipe(babel({
            presets: browserSync['env']
        }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('scripts-dist', ()=>{
    return gulp.src('app/*.html')
        .pipe(gulpIf('*.js',babel({
            presets: browserSync['env']
        })))
        .pipe(sourcemaps.init())
        .pipe(useref())
        .pipe(gulpIf('*.html', minifyHtml({
            collapseWhitespace: true
        })))
        .pipe(gulpIf('*.js',minify({
            mangle: {
                keepClassName: true
            }
        })))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist'))
});

gulp.task('generate-service-worker', () => {
    return workbox.injectManifest({
        globDirectory: dist,
        globPatterns: [
            '**/*.{html,js,jpg,css}'
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

gulp.task('clean', () => {
    return del(dist);
});



