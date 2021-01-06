const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const babel = require("gulp-babel");
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const tsProject = ts.createProject('tsconfig.json')  // compilador ts vai usar

function transformacaoTS() {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('build'))
}

function minificacaoTS() {
  return gulp.src("../typeScript/build/*.js")
  .pipe(
    babel({
      comments: false,
      presets: ["env"],
    })
  )
  .pipe(uglify())
  .pipe(concat("codigo.min.js"))
  .pipe(gulp.dest("build-min"));
}

exports.default = series(transformacaoTS, minificacaoTS)