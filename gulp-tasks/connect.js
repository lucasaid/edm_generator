
/*
  Host dist directory for viewing in browser, default address is http://localhost:8080
*/
module.exports = function () {
    return function () {
      $.connect.server({
          root: params.edmWatch + '/dist',
          livereload: {
              port: params.edmLivePort,
          },
          port: params.edmPort,
      });
      url = 'http://localhost:' + params.edmPort;
    }
}
