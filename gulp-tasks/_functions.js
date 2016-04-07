var fs = require('fs');
var path = require('path');
var op = require('openport');
module.exports = function (gulp, plugins) {
    return function () {



        GLOBAL.getFolders = function(dir) {
            return fs.readdirSync(dir)
                .filter(function(file) {
                    return fs.statSync(path.join(dir, file)).isDirectory();
                });
        };




        // Check port function, if port is closed(Currently in use) then increment parsed port by 1.
        GLOBAL.checkPort = function(port) {
            op.find({
                    startingPort: port,
                    endingPort: 9000
                },
                function(err, port) {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    params.campaignPort = port;
                }
            );
        }(params.campaignPort);





        GLOBAL.getFiles = function(dir) {
            return fs.readdirSync(dir)
                .filter(function(file) {
                    return !fs.statSync(path.join(dir, file)).isDirectory();
                });
        };
    };
};