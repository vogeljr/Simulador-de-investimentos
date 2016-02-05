/**
 * Created by vogelr on 20/11/15.
 */
var gulp = require('gulp'),
    gp_concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
        stripCssComments = require('gulp-strip-css-comments')
    ;

gulp.task('default', function(){


    gulp.src('assets/_css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(stripCssComments())
        .pipe(gulp.dest('assets/_css'));

    gulp.src('assets/_css/*.css')
        .pipe(gp_concat('style.css'))
        .pipe(minifyCss({keepBreaks: true}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('assets/css'));

});