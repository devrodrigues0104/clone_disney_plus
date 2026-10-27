const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

function compilaSass() {
    return gulp.src("./src/styles/main.scss")
        .pipe(sass({
            style: "compressed"
        }))
        .pipe(gulp.dest("./dist/styles"))
}

function comprimeImagem() {
    return gulp.src("./src/images/**/*", {encoding:false})
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"))
}

exports.default = function(){
    gulp.watch("./src/styles/*.scss", {ignoreInitial: false}, gulp.series(compilaSass))
}

exports.images = comprimeImagem
