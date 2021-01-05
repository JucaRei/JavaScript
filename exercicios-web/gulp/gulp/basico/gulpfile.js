const gulp = require("gulp");
// const { series } = require('gulp')
// const series = gulp.series; 
const { series , parallel } = require('gulp')

const antes1 = (cb) => {
  console.log("Tarefa Antes 1!");
  return cb();
};

const antes2 = (cb) => {
  console.log("Tarefa Antes 2!");
  return cb();
};

function copiar(cb) {
  // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
  gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))
  return cb();
}

// pipe, você pode colocar as tranformações (tasks) que preciso, no caso copiar e criar a pasta

const fim = (cb) => {
  console.log("Tarefa Fim!");
  return cb();
};

// execução parelela e sequencial
module.exports.default = series(
  parallel(antes1, antes2),
  copiar,
  fim,
);
