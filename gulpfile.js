var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyHTML = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify');
var concat = require('gulp-concat');


gulp.task('styles', function() {
    gulp.src('*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/'))
});

//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
}); 

gulp.task('js', function () {
    return gulp.src('./js/vp.*.js')
        // .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('html', function () {
    return gulp.src('./vpTemplate.html')
        .pipe(gulp.dest('./dist/'));
});

gulp.task('scss', function () {
    return gulp.src('./*.scss')
        .pipe(uglify())
        .pipe(minify())
        .pipe(gulp.dest('./dist/'));
});

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('html-watch', ['html'], browserSync.reload);

gulp.task('scss-watch', ['scss'], browserSync.reload);

gulp.task('serve', ['js', 'html', 'styles'], function () {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.js", ['js-watch']);
    gulp.watch("./*.html", ['html-watch']);
    gulp.watch("./*.scss", ['styles']);
});
