let gulp = require('gulp'),	
    gulpConcat = require('gulp-concat'),
    sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'sass/style.scss'])
        .pipe(sass())
        .pipe(gulp.dest("css/"))
});

gulp.task('js', function() {
    return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/tether/dist/js/tether.min.js'])
        .pipe(gulpConcat('bundle.js'))
        .pipe(gulp.dest("js/"))
});

gulp.task('default', ['sass', 'js']);