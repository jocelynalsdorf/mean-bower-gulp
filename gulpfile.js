//load the plugins

var gulp = require('gulp');
var less = require('gulp-less');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');

//define a task called cass
gulp.task('css', function(){
  //grab the less file, process the less, and save to style.css
  return gulp.src('public/assets/css/style.less')
  .pipe(less())
  .pipe(minifyCSS())
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest('public/assets/css'));
});