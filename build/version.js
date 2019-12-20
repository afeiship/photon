(function() {
  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  gulp.task('bump', function() {
    gulp
      .src(['./*.json'])
      .pipe($.bump())
      .pipe(gulp.dest('./'));
  });
})();
