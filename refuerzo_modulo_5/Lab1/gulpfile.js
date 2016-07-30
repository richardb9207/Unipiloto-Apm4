var gulp = require('gulp'),
	htmlmin = require('gulp-htmlmin'),
	uglify = require('gulp-uglify');

gulp.task('html-min', function() {
  return gulp.src('views/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('uglify', function() {
  gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('default', ['htmlmin','uglify'],function() {});
