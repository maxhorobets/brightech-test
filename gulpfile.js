const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autopref = require('gulp-autoprefixer'),
      csso = require('gulp-csso'),
      rename = require('gulp-rename'),
      plumber = require('gulp-plumber'),
      browserSync = require('browser-sync').create()

gulp.task('css', function() {
   return gulp.src('src/scss/main.scss')
      .pipe(plumber())
      .pipe(sass())
      .pipe(autopref({
         browsers: ['last 10 versions']
      }))
      .pipe(csso())
      .pipe(rename({
         extname: '.css',
         suffix: '.min'
      }))
      .pipe(gulp.dest('dist/css')) 
      .pipe(browserSync.stream());
});

gulp.task('browser-sync', gulp.series('css', function() {
	browserSync.init({
		server: {
			baseDir: './dist'
		},
		notify: true
   });  
}));

gulp.task('watch', gulp.series(gulp.parallel('browser-sync', 'css'), function () {
	gulp.watch('src/scss/**/*.scss', ['css']);
   gulp.watch('dist/*.html').on('change', browserSync.reload);  
}));
