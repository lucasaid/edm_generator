
/*
  Remove the variables directory when done copying the variable file.
*/

module.exports = function () {
    return function () {
      if (fs.existsSync(params.edmPath + '/src/partials/variables/')) {
          return del(params.edmPath + '/src/partials/variables/');
      }
    }
}
