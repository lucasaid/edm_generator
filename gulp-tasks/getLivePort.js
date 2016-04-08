/*
  Ask user whick port to set up live reload on, useful when working on multiple projects. Default: 35729
*/
module.exports = function () {
    return function () {
      return gulp.src('')
          .pipe($.prompt.prompt({
              name: 'port',
              message: 'Which livereload port do you wish to host on?',
              default: params.edmLivePort,
          }, function(edmLivePortTemp) {
              params.edmLivePort = edmLivePortTemp.port;
          }));
    }
}
