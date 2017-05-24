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
    defaultBrowser: process.env.DEFAULT_BROWSER,
    previoudRound: 0
};


gulp.task('loadFunctions', getTask('_functions'));


function getTask(task) {
    return require('./gulp-tasks/' + task)();
}

gulp.task('compress:images', getTask('images'));
gulp.task('compile:sass', getTask('sass'));
gulp.task('compile:nunjucks', getTask('nunjucks'));

gulp.task('askName', getTask('askName'));
gulp.task('getTemplate', ['askName'], getTask('getTemplate'));
gulp.task('copyFiles', ['askName','getTemplate'], getTask('copyFiles'));
gulp.task('genConfig', ['askName','getTemplate','copyFiles'], getTask('genConfig'));
gulp.task('checkVariables', ['askName','getTemplate','copyFiles','genConfig'], getTask('checkVariables'));
gulp.task('clean:variables', ['askName','getTemplate','copyFiles','checkVariables'], getTask('cleanVariables'));


gulp.task('getEdm', getTask('getEdm'));
gulp.task('getPort', ['getEdm'], getTask('getPort'));
gulp.task('getLivePort', ['getEdm','getPort'], getTask('getLivePort'));

/*
  Runs all compiling tasks.
*/
gulp.task('init', ['getEdm', 'getPort', 'getLivePort'], function() {
    gulp.run('compile:sass');
    gulp.run('compile:nunjucks');
    gulp.run('compress:images');
});

gulp.task('connect', ['getEdm','getPort', 'getLivePort', 'init'], getTask('connect'));
gulp.task('watch', ['getEdm','getPort', 'getLivePort', 'init', 'connect'], getTask('watch'));
gulp.task('openBrowser', ['getEdm','getPort', 'getLivePort', 'init', 'connect', 'watch'], getTask('openBrowser'));

/*
  Runs the eDM builder, allowing you to select a pre built template to build your eDM.
*/
gulp.task('build', [
    'loadFunctions',
    'askName',
    'getTemplate',
    'copyFiles',
    'genConfig',
    'checkVariables',
    'clean:variables'
]);

/*
  Sets up a local server to view the eDM and compiles and watches the files.
*/
gulp.task('run', [
    'loadFunctions',
    'getEdm',
    'getPort',
    'getLivePort',
    'init',
    'connect',
    'watch',
    'openBrowser'
]);

/*
  Display Help
*/
gulp.task('help', getTask('help'));
