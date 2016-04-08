/*
  Check if there are custom variable files for the template, if there are then ask the user which one they wish to use.
*/
module.exports = function () {
    return function () {
      if (fs.existsSync(params.edmPath + '/src/partials/variables/')) {
          var variableFiles = getFiles(params.edmPath + '/src/partials/variables/');
          if (variableFiles.length > 0) {
              return gulp.src('')
                  .pipe($.prompt.prompt({
                      type: 'list',
                      name: 'file',
                      message: 'Which variable file do you wish to use?',
                      choices: variableFiles
                  }, function(variableFile) {
                      if (variableFile.file != 'none') {
                          $.util.log($.util.colors.green('Using variable file: ' + variableFile.file + '.'));
                          return gulp.src(params.edmPath + '/src/partials/variables/' + variableFile.file).pipe($.rename('_variables.jade')).pipe(gulp.dest(params.edmPath + '/src/partials/'));
                      }
                  }));
          }
      }
    }
}
