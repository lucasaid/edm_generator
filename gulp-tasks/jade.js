module.exports = function () {
    return function () {
      $.util.log($.util.colors.green('Compiling Jade files.'));
      gulp.src(params.edmWatch + '/src/*.jade')
          .pipe($.jade({
              pretty: true
          }))
          .pipe(gulp.dest(params.edmWatch + '/dist'))
          .pipe($.emailBuilder())
          .pipe(gulp.dest(params.edmWatch + '/dist'))
          .pipe($.connect.reload());
    }
}
