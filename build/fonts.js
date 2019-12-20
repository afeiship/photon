(function() {
  'use strict';

  const gulp = require('gulp');
  const saveLicense = require('uglify-save-license');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@feizheng/gulp-*']
  });

  gulp.task('fonts', function() {
    return gulp.src('src/fonts/**').pipe(gulp.dest('dist/css/fonts'));
  });
})();
