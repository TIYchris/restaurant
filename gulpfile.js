var gulp = require('gulp');
var webpack = require('webpack-stream');
var jsonServer = require('json-server');
var clean = require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src(['public/*'], {read:false})
		.pipe(clean())
});

gulp.task('serve', function (cb) {
  var apiServer = jsonServer.create();
  var router = jsonServer.router('db.json');

  apiServer.use(jsonServer.defaults());
  apiServer.use(router);
  apiServer.listen(process.env.PORT || 8000);

  cb();
});

gulp.task('build', ['images', 'webpack'])

// Webpack
gulp.task('webpack', function() {
  return gulp.src('./src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./public'));
});

gulp.task('images', function() {
  gulp.src(['./src/assets/images/*.*'], {base: './src/assets'})
  .pipe(gulp.dest('public'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['build'])
})

gulp.task('default', ['build', 'serve', 'watch']);
