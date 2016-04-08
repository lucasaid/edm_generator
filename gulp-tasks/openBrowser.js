/*
  Opens Browser on running of edm
*/


var getBrowser = function() {
    var browser = false;

    // Detect OS
    os = require('os');

    if (params.defaultBrowser !== 'chrome' && params.defaultBrowser !== 'firefox' && params.defaultBrowser !== 'safari' && params.defaultBrowser !== 'ie') {
        $.util.log($.util.colors.red("ERROR: ") + "The browser you have specified in your config is not valid! DEFAULT_BROWSER: " + params.defaultBrowser);
        $.util.beep();
        process.exit(1);
    }
    if (os.platform() === 'linux') {
        if (params.defaultBrowser === 'chrome') {
            browser = "google-chrome";
        } else if (params.defaultBrowser !== 'ie') {
            browser = params.defaultBrowser;
        }
    } else if (os.platform() === 'darwin') {
        if (params.defaultBrowser === 'chrome') {
            browser = "Google Chrome";
        } else if (params.defaultBrowser !== 'ie') {
            browser = params.defaultBrowser;
        }
    } else if (os.platform() === 'win32') {
        browser = params.defaultBrowser;
    }
    if (browser === false) {
        $.util.log($.util.colors.red("ERROR: ") + "The browser you have specified in your config is not valid. DEFAULT_BROWSER: " + params.defaultBrowser);
        $.util.beep();
        process.exit(1);
    }
    return browser;
};
module.exports = function () {
    return function () {
      var browser = getBrowser();
      var options = {
          uri: 'http://localhost:' + params.edmPort,
          app: browser
      };
      gulp.src(__filename)
          .pipe($.wait(500))
          .pipe($.open(options));
    }
}
