/**
 * Created by superman90 on 7/31/16.
 */
const gulp = require('gulp');
const browserSync = require('browser-sync');
//const spa = require('browser-sync-spa');

const browserSyncConf = require('../conf/browsersync.conf');

//browserSync.use(spa());

gulp.task('browsersync', browserSyncServe);

function browserSyncServe(done) {
    browserSync.init(browserSyncConf());
    done();
}