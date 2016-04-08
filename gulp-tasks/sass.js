module.exports = function () {
    return function () {
      $.util.log($.util.colors.green('Compiling inline sass.'));
      gulp.src(params.edmWatch + '/src/sass/inline.scss')
          .pipe($.sass({
              outputStyle: 'compressed'
          }))
          .pipe($.autoprefixer())
          .pipe(gulp.dest(params.edmWatch + '/dist/css'))
          .pipe($.connect.reload());

      $.util.log($.util.colors.green('Compiling embedded sass.'));
      gulp.src(params.edmWatch + '/src/sass/embed.scss')
          .pipe($.sass({
              outputStyle: 'compressed'
          }))
          .pipe($.autoprefixer())
          .pipe(gulp.dest(params.edmWatch + '/dist/css'))
          .pipe($.connect.reload());
    }
}
