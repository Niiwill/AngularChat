var gulp =require('gulp'),
     uglify=require('gulp-uglify'),
     plumber=require('gulp-plumber'),
     rename=require('gulp-rename'),
     minifyCss = require('gulp-minify-css')
     livereload=require('gulp-livereload');
      var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
    return gulp.src('sass/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css'));
});

//scripts task
gulp.task('scripts', function(){
   gulp.src(['js/*.js','!js/*.min.js'])
       .pipe(rename({suffix:'.min'}))
       .pipe(plumber())
       .pipe(uglify({ mangle: false }))
       .pipe(gulp.dest('js'))
       .pipe(livereload());

    //.on('error', function(e){
    //    console.log(e);
    //}))
});
gulp.task('styles',function(){
      gulp.src(['css/**/*.css','!css/**/*.min.css'])
          .pipe(minifyCss({compatibility: 'ie8'}))
          .pipe(plumber())
          .pipe(concat('build.css'))
          .pipe(rename({suffix:'.min'}))
          .pipe(gulp.dest('css/build'))
          .pipe(livereload());


});


gulp.task('watch',function(){
    livereload.listen();
    gulp.watch('js/*.js',['scripts']);
    gulp.watch('css/**/*.css',['styles']);
    gulp.watch('./sass/**/*.scss', ['sass']);
});
gulp.task('default',['scripts','styles','watch','sass']);