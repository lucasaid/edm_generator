var gulp = require('gulp'),
plugins = require( 'gulp-load-plugins' )(),
env = require('gulp-env');

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
    return require('./gulp-tasks/' + task)(gulp, plugins, params);
}


/*
  Display Help
*/
gulp.task('help', getTask('help'));
