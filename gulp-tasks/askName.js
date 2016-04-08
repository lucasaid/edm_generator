/*
  Ask user for a name for the eDM being generated and create directory if the directory does not exist.
*/
module.exports = function () {
    return function () {
      return gulp.src('')
          .pipe($.prompt.prompt({
              type: 'input',
              name: 'edm',
              message: 'Name of EDM?'
          }, function(res) {
              var edmtemp = res.edm.replace(/[^a-z0-9]/gi, '_');
              if (!fs.existsSync('./edms/')) {
                  fs.mkdir('./edms/');
              }
              if (!fs.existsSync('./edms/' + edmtemp)) {
                  params.edmPath = './edms/' + edmtemp;
                  fs.mkdir(params.edmPath);
              } else {
                  params.edmPath = './edms/' + edmtemp;
              }
      }));
    };
};
