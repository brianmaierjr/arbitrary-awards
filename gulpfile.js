const gulp = require('gulp');
const { series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();

// compile scss into css
function style() {
  return gulp.src('src/scss/style.scss') //gets all files ending with .scss in src/scss
    .pipe(sass().on('error', sass.logError))
    .pipe(csso())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/assets/css'))
    .pipe(browserSync.stream());
}

// minify js and add to dist folder
function minifyjs() {
  return gulp.src('src/js/scripts.js')
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('app/assets/js'))
    .pipe(browserSync.stream());
}

// watch assets and generate
function watch() {
  browserSync.init({
    server: {
      baseDir: "./app",
      index: "/index.html"
    }
  });
  gulp.watch('src/scss/**/*.scss', style);
  gulp.watch('src/js/*.js', minifyjs);
}

exports.style = style;
exports.minifyjs = minifyjs;
exports.production = series(style, minifyjs);
exports.default = watch; 