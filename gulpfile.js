var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('scripts', function () {
    return gulp.src('specs/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
    gulp.watch(['specs/**/*.js'], ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);

