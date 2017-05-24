module.exports = function () {
    return function () {
      $.util.log($.util.colors.green('Compiling Nunjuck files.'));
      gulp.src(params.edmWatch + '/src/*.nunjucks')
          .pipe($.nunjucksRender({
          path: [params.edmWatch + '/src/']
          }))
          .pipe(gulp.dest(params.edmWatch + '/dist'))
          .pipe($.emailBuilder())
          .pipe(gulp.dest(params.edmWatch + '/dist'))
          .pipe($.connect.reload());
    }
}
