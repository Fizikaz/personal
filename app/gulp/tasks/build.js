var gulp = require('gulp'),
	 usemin = require('gulp-usemin'),
	 rev = require('gulp-rev'),
	 uglify = require('gulp-uglify'),
	 imagemin = require('gulp-imagemin'),
	 cssnano = require('gulp-cssnano'),
	 
	 del = require('del');

gulp.task("deleteDistFolder", function() {
	return del("./docs");
});

gulp.task('optimizeImages', ['deleteDistFolder'], function() {
   return gulp.src(['./app/assets/images/**/*'])
    .pipe(imagemin({
       progressive: true,
       interlaced: true,
       multipass: true
   }))
    .pipe(gulp.dest('./docs/assets/images'));
});

gulp.task('usemin', ['deleteDistFolder'], function() {
	return gulp.src('./app/index.html')
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssnano()}],
			js: [function() {return rev()}, function() {return uglify()}]
	}))
		.pipe(gulp.dest('./docs'));
});

gulp.task('build', ['deleteDistFolder', 'optimizeImages','usemin']);