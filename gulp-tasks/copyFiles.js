/*
  Check if the folder already exists for the name the user chose, if so prompt the user if they wish to overwrite the directory.
*/
module.exports = function () {
    return function () {
      checkIfExists = params.edmPath + '/src/';
      if (fs.existsSync(checkIfExists)) {
          $.util.log($.util.colors.red('EDM already exists!!!!'));
          return gulp.src('./templates/' + params.template + '/**/*')
              .pipe($.prompt.prompt({
                  type: 'confirm',
                  name: 'val',
                  message: 'The source directory already exists, do you wish to overwrite it?',
                  default: true
              }, function(res_confirm) {
                  if (res_confirm.val) {
                      del(checkIfExists + '**/*.*');
                      $.util.log($.util.colors.red('Clearing out old source folder. If you didn\'t intend this I feel bad for you son.'));
                      $.util.log($.util.colors.green('Source folder populated with ' + params.template + '.'));
                  } else {
                      $.util.log($.util.colors.red('Source folder not built.'));
                      process.exit(1);
                  }
                  return res_confirm.val;
              }))
              .pipe(gulp.dest(params.edmPath + '/src'));
      } else {
          return gulp.src('./templates/' + params.template + '/**/*')
              .pipe(gulp.dest(params.edmPath + '/src'));
      }
    }
}
