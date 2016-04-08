/*
  List templates available and get user to select which template to use for the EDM.
*/
module.exports = function (gulp, $) {
    return function () {
      var pattern = './templates/';
      var templates = getFolders(pattern);
      $.util.log($.util.colors.green('Preparing to copy files!'));
      return gulp.src('')
          .pipe($.prompt.prompt({
              type: 'list',
              name: 'template',
              message: 'Which template do you wish to use (default)?',
              choices: templates
          }, function(templateFolder) {
              params.template = templateFolder.template;
          }));
    }
}
