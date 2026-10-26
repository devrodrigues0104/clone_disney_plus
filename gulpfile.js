const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compilaSass() {
    return gulp.src("./src/styles/main.scss")
        .pipe(sass({
            style: "compressed"
        }))
        .pipe(gulp.dest("./dist/styles/main.css"))
}

exports.default = function(){
    gulp.watch("./src/styles/*.scss", {ignoreInitial: false}, gulp.series(compilaSass))
}