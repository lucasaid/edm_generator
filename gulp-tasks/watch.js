/*
  Watch for any changes to nunjucks, scss and image files, if so run compile scripts on appropriate files.
*/
module.exports = function () {
    return function () {
      $.watch(params.edmWatch + '/src/**/*.nunjucks', function() {
          gulp.start(['compile:nunjucks']);
      });
      $.watch(params.edmWatch + '/src/sass/*.scss', function() {
          gulp.start(['compile:sass', 'compile:nunjucks']);
      });
      $.watch(params.edmWatch + '/src/img/**/*', function() {
          gulp.start('compress:images');
      });
    }
}
