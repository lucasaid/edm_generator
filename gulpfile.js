GLOBAL.gulp = require('gulp'),
GLOBAL.$ = require( 'gulp-load-plugins' )(),
GLOBAL.env = require('gulp-env');
GLOBAL.fs = require('fs');
GLOBAL.path = require('path');
GLOBAL.op = require('openport');
GLOBAL.del = require('del');
/*
  Pull in environment variables
*/
env({
    file: ".env.js"
});

GLOBAL.params = {
    template: '',
    edmPath: '',
    edmConfig: '',
    serverPath: '',
    edmWatch: '',
    edmWatchName: '',
    stagingPath: '',
    subjectLine: '',
    edmPort: 8080,
    edmLivePort: 35729,
    s3BucketUrl: process.env.AWS_BUCKET_URL,
    latestRound: 1,
    previoudRound: 0
};


gulp.task('loadFunctions', getTask('_functions'));


function getTask(task) {
    return require('./gulp-tasks/' + task)();
}

gulp.task('askName', getTask('askName'));
gulp.task('getTemplate', ['askName'], getTask('getTemplate'));
gulp.task('copyFiles', ['askName','getTemplate'], getTask('copyFiles'));

/*
  Runs the eDM builder, allowing you to select a pre built template to build your eDM.
*/
gulp.task('build', [
    'loadFunctions',
    'askName',
    'getTemplate',
    'copyFiles',
    // 'genConfig',
    // 'variables',
    // 'clean:variables'
]);


/*
  Display Help
*/
gulp.task('help', getTask('help'));
