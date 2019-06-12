const gulp = require('gulp')
const sass = require('gulp-sass')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('default', ['copiarHtml'], () => {        // essa task copiarHtml será obrigatoriamente criada e executada antes da task default.
    gulp.src('src/sass/index.scss')     // tem a referência de todos os outros css que preciso, para gerar o css final.
        .pipe(sass().on('error', sass.logError))    // convert o sass para css, caso de erro, ele mostra o erro, para saber examente o que aconteceu.
        .pipe(uglifycss({ "uglyComments": true }))  // compactar o css o máximo possível / deixar os comentários o menor possivel
        .pipe(concat('estilo.min.css'))   // concatenar os arquivos criando o arquivo estilo.min.css
        .pipe(gulp.dest('build/css'))   // criar e coloca o resultado nessa pasta
})

// simplesmente copiar o HTML de index para a pasta de destino
gulp.task('copiarHtml', () => {
    gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
})