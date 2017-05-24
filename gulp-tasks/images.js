module.exports = function () {
    return function () {
      $.util.log($.util.colors.green('Compressing images.'));
      del(params.edmWatch + '/dist/img/**/*.*');
      gulp.src(params.edmWatch + '/src/img/**/*.*')
          .pipe($.imagemin())
          .pipe(gulp.dest(params.edmWatch + '/dist/img'));
    };
}
