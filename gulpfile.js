var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var glob = require('glob');

gulp.task("scripts", function () {
    var files = glob.sync('./specs/*.js');
    browserify({
        entries: files,
        transform: [babelify.configure()]
    })
        .bundle()
        .pipe(source('output.js'))
        .pipe(gulp.dest('./dist/'));

});

gulp.task('watch', function () {
    gulp.watch(['src/**/*.js', 'specs/**/*.js'], ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);

