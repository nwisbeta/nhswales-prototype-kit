// Core dependencies
const gulp = require('gulp');

// External dependencies
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const sass = require('gulp-sass');


// Delete all the files in /public build directory
function cleanPublic() {
  return gulp.src('public', { allowEmpty: true})
  .pipe(clean());
}

sass.compiler = require('sass');

// Compile SASS to CSS
function compileStyles() {
  return gulp.src([
    'app/assets/sass/**/*.scss'
  ])
    .pipe(sass())
    .pipe(gulp.dest('_site/css'))
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

// Compile JavaScript (with ES6 support)
function compileScripts() {
  return gulp.src([
    'app/assets/javascript/**/*.js'
  ])
  .pipe(babel())
  .pipe(gulp.dest('_site/js'));
}

// Compile assets
function compileAssets() {
  return gulp.src([
    'app/assets/**/**/*.*',
    '!**/assets/**/**/*.js', // Don't copy JS files
    '!**/assets/**/**/*.scss', // Don't copy SCSS files
  ])
  .pipe(gulp.dest('_site'));
}

// Compile assets
function compileFrontedStyles() {
  return gulp.src([
    'node_modules/@nwisbeta/nhswales-frontend/packages/assets/**/*.*'
  ])
  .pipe(gulp.dest('_site/nhsuk-frontend/assets'));
}

function compileFrontendAssets() {
  return gulp.src([
    'node_modules/@nwisbeta/nhswales-frontend/dist/*.*'
  ])
  .pipe(gulp.dest('_site/nhsuk-frontend'));
}


exports.compileStyles = compileStyles;
exports.compileScripts = compileScripts;
exports.cleanPublic = cleanPublic;

gulp.task('build', gulp.series(cleanPublic, compileStyles, compileScripts, compileAssets, compileFrontedStyles, compileFrontendAssets));
