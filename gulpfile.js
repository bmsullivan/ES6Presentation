var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var through = require('through2');
var globby = require('globby');

gulp.task("scripts", function () {
    var bundledStream = through();

    bundledStream
        .pipe(source('output.js'))
        .pipe(gulp.dest('./dist/'));

    globby(['./specs/*.js'], function (err, entries) {
        var b = browserify({
            entries: entries,
            debug: true,
            transform: [babelify.configure()]
        });

        b.bundle().pipe(bundledStream);
    });

    return bundledStream;
});

gulp.task('watch', function () {
    gulp.watch(['src/**/*.js', 'specs/**/*.js'], ['scripts']);
});

gulp.task('default', ['scripts', 'watch']);

