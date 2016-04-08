/*
  Watch for any changes to jade, scss and image files, if so run compile scripts on appropriate files.
*/
module.exports = function () {
    return function () {
      $.watch(params.edmWatch + '/src/**/*.jade', function() {
          gulp.start(['compile:jade']);
      });
      $.watch(params.edmWatch + '/src/sass/*.scss', function() {
          gulp.start(['compile:sass', 'compile:jade']);
      });
      $.watch(params.edmWatch + '/src/img/**/*', function() {
          gulp.start('compile:images');
      });
    }
}
