const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function comprimeImage() {
    return gulp.src('./source/images/*')
        .pipe(imagemin()) 
        .pipe(gulp.dest('./build/images'))
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass(){
    return gulp.src('./source/style/main.scss')
    .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        })) 
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/style'))
}


exports.default = gulp.series(compilaSass,comprimeJavaScript,comprimeImage)
