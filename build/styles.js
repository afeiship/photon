(function() {
  'use strict';

  const gulp = require('gulp');
  const saveLicense = require('uglify-save-license');
  const $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del', '@jswork/gulp-*']
  });

  gulp.task('styles:css', function() {
    return gulp
      .src('src/photon.scss')
      .pipe($.jswork.pkgHeader())
      .pipe($.sass({ outputStyle: 'expanded' }).on('error', $.sass.logError))
      .pipe(gulp.dest('dist/css'))
      .pipe($.sass({ outputStyle: 'compressed' }).on('error', $.sass.logError))
      .pipe($.rename({ extname: '.min.css' }))
      .pipe(gulp.dest('dist/css'));
  });

  gulp.task('styles:sass', function() {
    return gulp
      .src('src/**')
      .pipe(gulp.dest('dist/sass'));
  });
})();
