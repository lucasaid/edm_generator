

/*
  Scans config file and asks user to fill out config variables.
*/
module.exports = function () {
    return function () {
      if (fs.existsSync(params.edmPath + '/src/config.json')) {
          params.edmConfig = require('.'+params.edmPath + '/src/config.json');
          edmEditConfig = {};
          var asking = false;
          var dynamicReplace = false;
          var questions = [];
          for (var y in params.edmConfig) {
              questions.push({
                  type: 'input',
                  name: y,
                  message: y,
                  default: params.edmConfig[y]
              });
          }
          asking = gulp.src('').pipe($.prompt.prompt(questions, function(questionResponse) {
              edmEditConfig = JSON.stringify(questionResponse, null, "\t");
              fs.writeFile(params.edmPath + '/src/config.json', edmEditConfig, function(err) {
                  if (err) {
                      return console.log(err);
                  }
                  params.edmConfig = require('.'+params.edmPath + '/src/config.json');
              });
              return true;
          }));
          return asking;
      }
    }
}
