(function () {
  'use strict';

  const gulp = require('gulp');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*']
  });

  gulp.task('fonts', function () {
    return gulp.src('src/fonts/**').pipe(gulp.dest('dist/css/fonts'));
  });
})();
