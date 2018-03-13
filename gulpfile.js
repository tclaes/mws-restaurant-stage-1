/* file: gulpfile.js */

var gulp   = require('gulp'),
    jshint = require('gulp-jshint'),
    sass   = require('gulp-sass');

// define the default task and add the watch task to it
gulp.task('default', ['watch']);

// configure the jshint task
gulp.task('jshint', function() {
    return gulp.src('source/javascript/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
    gulp.watch('source/javascript/**/*.js', ['jshint']);
});

gulp.task('build-css', function() {
    return gulp.src('source/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('app/styles'));
});

/* updated watch task to include sass */

gulp.task('watch', function() {
    gulp.watch('source/js/**/*.js', ['jshint']);
    gulp.watch('source/scss/**/*.scss', ['build-css']);
});
