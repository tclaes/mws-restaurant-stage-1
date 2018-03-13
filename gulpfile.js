/* file: gulpfile.js */

var gulp   = require('gulp'),
    sass   = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    eslint = require('gulp-eslint'),
    babel = require('gulp-babel');

// Browsersync
browserSync.init({
    server: "./app"
});

browserSync.stream();

// define the default task and add the watch task to it
gulp.task('default', ['build-css','lint'], function(){
    gulp.watch('source/scss/**/*.scss', ['build-css']);
    gulp.watch('js/**/*.js',['lint']);
});

gulp.task('build-css', function() {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles'));
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
