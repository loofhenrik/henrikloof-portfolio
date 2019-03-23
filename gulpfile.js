var  gulp  = require('gulp'),
    /*browserSync = require('browser-sync'),
    reload = browserSync.reload,*/
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('scripts', function () {
    gulp.src('scripts/*.js')
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch',function () {
   gulp.watch('scripts/*.js', ['scripts'])
});