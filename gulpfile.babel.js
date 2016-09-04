var gulp = require("gulp");
var fs = require("fs");
var browserify = require("browserify");
var babelify = require("babelify");
var watchify = require("watchify");
var gutil = require("gulp-util");
var watch = require("gulp-watch");
var del = require("del");
var runSequence = require("run-sequence");
var uglify = require("gulp-uglify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var sourcemaps = require("gulp-sourcemaps");
var gulpif = require("gulp-if");
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(gulpif(gutil.env.dev,sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpif(gutil.env.dev,sourcemaps.write()))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task("clean", function(){
    return del("./dist/*");
});

gulp.task("compile", function(){
    return browserify({ 
        debug: gutil.env.dev ? true : false,
        cache: {},
        packageCache: {},
        plugin: []    
    })
    .transform(babelify, {sourceMaps: gutil.env.dev ? true : false})
    .require("./src/app.js", { entry: true })
    .bundle()
    .on("error", function (err) { console.log("Error: " + err.message); })
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(gulpif(gutil.env.dev,sourcemaps.init({loadMaps: true})))
    .pipe(gulpif(!gutil.env.dev,uglify()))
    .pipe(gulpif(gutil.env.dev,sourcemaps.write('./')))
    .pipe(gulp.dest("./dist"));
});

gulp.task("watch:dev", function(){
    return watch(["./src/*.*","./src/**/*.*"],function(){
        runSequence("clean","compile","sass");
    });
});

gulp.task("default", function(){
    runSequence("clean","compile","sass", function(){
        if(gutil.env.dev){
            runSequence('watch:dev');
        }else{
            console.log("build succeeded.");
        }
    });    
});
