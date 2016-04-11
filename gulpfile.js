var gulp = require('gulp');
var webpack = require('webpack-stream');
var serve = require('gulp-serve');
var jsonServer = require('json-server');
var clean = require('gulp-clean');

gulp.task('clean', function() {
	return gulp.src(['dist/*'], {read:false})
		.pipe(clean())
});

gulp.task('serve:api', function (cb) {
  var apiServer = jsonServer.create();
  var router = jsonServer.router('db.json');

  apiServer.use(jsonServer.defaults());
  apiServer.use(router);
  apiServer.listen(8001);

  cb();
});

// Webpack
gulp.task('webpack', function() {
  return gulp.src('./src/app.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist'));
});

gulp.task('images', ['clean'], function() {
  gulp.src(['./src/assets/images/*.*'], {base: './src/assets'})
  .pipe(gulp.dest('dist'));
});

// Web Server
gulp.task('serve:web', serve({
  root: ['./dist'],
  port: 8000
}));

// Watch
gulp.task('watch', function() {
    gulp.watch('./src/**/*', ['webpack'])
})

gulp.task('default', ['images', 'serve:web', 'serve:api', 'webpack', 'watch']);