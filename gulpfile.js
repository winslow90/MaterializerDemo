const gulp = require('gulp');
const HubRegistry = require('gulp-hub');
const browserSync = require('browser-sync');

const conf = require('./conf/gulp.conf');

const hub = new HubRegistry([conf.path.tasks('*.js')]);

gulp.registry(hub);

gulp.task('inject', gulp.series('clean',gulp.parallel('styles', 'scripts','fonts','other'), 'inject'));
gulp.task('serve', gulp.series('inject', 'watch', 'browsersync'));
gulp.task('default', gulp.series('clean', 'inject'));
//gulp.task('reloadBrowserSync', reloadBrowserSync);
gulp.task('watch', watch);

function reloadBrowserSync(cb) {
    browserSync.reload();
    cb();
}

function watch(done) {
    gulp.watch([
        conf.path.src('*.html'),
        'bower.json'
    ], gulp.parallel('inject'));

    gulp.watch(conf.path.tmp('*.html'), reloadBrowserSync);
    gulp.watch([
        conf.path.src('**/*.scss'),
        conf.path.src('**/*.css')
    ], gulp.series('styles'));
    gulp.watch(conf.path.src('**/*.js'), gulp.series('inject'));
    done();
}

