/**
 * Created by superman90 on 7/31/16.
 */
const gulp = require('gulp');
const rename = require('gulp-rename');

const conf = require('../conf/gulp.conf');

gulp.task('fonts',fonts);

function fonts(){
    return gulp.src([
        'bower_components/materialize/dist/fonts/roboto/**'
        ])
        //.pipe(rename(function (path) {
        //    var thedirname = path.dirname;
        //    console.log(path);
        //    if (thedirname.indexof('fonts')==-1){
        //        path.dirname="";
        //    }else{
        //        path.dirname=thedirname.slice(thedirname.indexof('fonts'));
        //    }
        //    return path;
        //}))
        .pipe(gulp.dest(conf.path.tmp("fonts/roboto")));
}