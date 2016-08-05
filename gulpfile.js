var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
var config = require('./package');
var jshintConfig = config.jshintConfig;

gulp.task('lint', function() {
  return gulp.src('./sortedset.js')
             .pipe(jshint(jshintConfig))
             .pipe(jshint.reporter('default'));
});

gulp.task('test', ['lint'], function() {
  return gulp.src('test/sortedset.js')
             .pipe(mocha());
});


gulp.task('bonus_test', ['lint'], function() {
  return gulp.src('test/bonus.js')
             .pipe(mocha());
});
