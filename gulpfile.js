'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify-es').default;
const reload = browserSync.reload;

const src = {
  style: './src/sass/**/styles.sass',
  sass: './src/sass/**/*.sass',
  css: './css',
  js: './src/js/*.js',
  jsDist: './js',
  html: './*.html'
}

gulp.task('default', defaultTask);
gulp.task('sass', sassTask);
gulp.task('uglify', uglifyTask);

gulp.task('dist', gulp.series('sass', 'uglify'));

function defaultTask() {
  browserSync.init({
    server: './'
  });
  gulp.watch(src.sass, sassTask);
  gulp.watch(src.js, uglifyTask);
  gulp.watch(src.html).on('change', reload);
}

function sassTask() {
  return gulp.src(src.style)
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write('./'))
  .pipe(gulp.dest(src.css))
  .pipe(reload({stream: true}))
}

function uglifyTask() {
  return gulp.src(src.js)
    .pipe(uglify())
    .pipe(gulp.dest(src.jsDist))
    .pipe(reload({stream: true}))
};