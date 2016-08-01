/**
 * Created by superman90 on 7/31/16.
 */
'use strict';

const path = require('path');
const gutil = require('gulp-util');

exports.ngModule = 'app';

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
    src: 'src',
    dist: 'dist',
    tmp: '.tmp',
    e2e: 'e2e',
    tasks: 'gulp_tasks'
};

exports.path = {};
for (const pathName in exports.paths) {
    if (exports.paths.hasOwnProperty(pathName)) {
        exports.path[pathName] = function pathJoin() {
            const pathValue = exports.paths[pathName];
            const funcArgs = Array.prototype.slice.call(arguments);
            const joinArgs = [pathValue].concat(funcArgs);
            return path.join.apply(this, joinArgs);
        };
    }
}

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function (title) {
    return function (err) {
        gutil.log(gutil.colors.red(`[${title}]`), err.toString());
        this.emit('end');
    };
};
/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
    exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/],
    directory: 'bower_components'
};
