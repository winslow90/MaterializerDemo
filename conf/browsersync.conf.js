/**
 * Created by superman90 on 7/31/16.
 */
const conf = require('./gulp.conf');

module.exports = function () {
    return {
        server: {
            baseDir: [
                conf.paths.tmp,
                conf.paths.src
            ],
            routes: {
                '/bower_components': 'bower_components'
            }
        },
        open: false
    };
};
