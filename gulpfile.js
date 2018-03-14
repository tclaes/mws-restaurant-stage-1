/* file: gulpfile.js */

const gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint');
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const autoprefixer = require('gulp-autoprefixer');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const gulpIf = require('gulp-if');
const cssnano = require('gulp-cssnano');
const cache = require('gulp-cache');
const workbox = require('workbox-build');
const runSequence = require('run-sequence');
const del = require('del');
const src = 'app';
const dist = 'dist';


gulp.task('default', (callback) => {
    runSequence('clean', 'watch', 'generate-service-worker',callback);
});

gulp.task('watch',['browserSync','build-scss','useref','image-min'], ()=>{
    gulp.watch('app/scss/**/*.scss', ['build-scss']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', ['useref']);
    gulp.watch('app/js/**/*.js', browserSync.reload);


});

// Browsersync
gulp.task('browserSync', function(){
    browserSync.init({
        server: './dist'
    });
});

gulp.task('build-scss', function() {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('image-min', function () {
    return gulp.src('app/img/**/*.+(jpg|jpeg|png|gif|svg)')
        .pipe(cache(imagemin({
            progressive: true,
            interlaced: true
            //use: [pngquant()]
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

gulp.task('useref', ()=>{
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js',babel({
            presets: browserSync['env']
        })))
        //.pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
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



