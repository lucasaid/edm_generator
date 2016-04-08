/*
  Task to prompt user to select eDM they wish to use. Then stores path and name in variable.
*/
module.exports = function () {
    return function () {
      var pattern = './edms/';
      var templates = getFolders(pattern);
      return gulp.src('')
          .pipe($.prompt.prompt({
              type: 'list',
              name: 'edm',
              message: 'Which eDM do you wish to use?',
              choices: templates
          }, function(edmFolder) {
              params.edmWatch = './edms/' + edmFolder.edm;
              params.edmWatchName = edmFolder.edm;
              if (fs.existsSync('./edms/' + edmFolder.edm + '/src/config.json')) {
                  params.edmConfig = require('../edms/' + edmFolder.edm + '/src/config.json');
              }
          }));
    }
}
