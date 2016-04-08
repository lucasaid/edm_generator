/*
  Ask user whick port to host the dist directory on, useful when working on multiple projects. Default: 8080
*/
module.exports = function () {
    return function () {
      return gulp.src('')
          .pipe($.prompt.prompt({
              name: 'port',
              message: 'Which port do you wish to host on?',
              default: params.edmPort,
          }, function(edmPortTemp) {
              params.edmPort = edmPortTemp.port;
          }));
    }
}
