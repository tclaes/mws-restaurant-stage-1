/* file: gulpfile.js */

var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint');
var babel = require('gulp-babel');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var autoprefixer = require('gulp-autoprefixer');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var cache = require('gulp-cache');



gulp.task('default',['watch'], () => {

});

gulp.task('watch',['browserSync','build-scss','useref','image-min', 'copy'], ()=>{
    gulp.watch('app/scss/**/*.scss', ['build-scss']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);

})

// Browsersync
gulp.task('browserSync', function(){
    browserSync.init({
        server: './dist'
    });
})

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

// gulp.task('lint', () => {
//     // ESLint ignores files with "node_modules" paths.
//     // So, it's best to have gulp ignore the directory as well.
//     // Also, Be sure to return the stream from the task;
//     // Otherwise, the task may end before the stream has finished.
//     return gulp.src(['js/**/*.js','!node_modules/**'])
//     // eslint() attaches the lint output to the "eslint" property
//     // of the file object so it can be used by other modules.
//         .pipe(eslint())
//         // eslint.format() outputs the lint results to the console.
//         // Alternatively use eslint.formatEach() (see Docs).
//         .pipe(eslint.format())
//         // To have the process exit with an error code (1) on
//         // lint error, return the stream and pipe to failAfterError last.
//         .pipe(eslint.failAfterError());
// });

gulp.task('useref', function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js',babel({
            presets: browserSync['env']
        })))
        //.pipe(gulpIf('*.js', uglify()))
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist'))
});

gulp.task('copy', function () {
    gulp.src('app/sw.js')
        .pipe(gulp.dest('dist'));
});



