const gulp = require('gulp')
const concat = require('gulp-concat') // modulo do gulp que serve para concatenar varios arquivos em 1 só.
// const uglify = require('gulp-uglify')  // serve para tirar os espaços em branco, deixar o javascript o mais compactado possível.
const babel = require('gulp-babel')     // faz a tradução de uma lingua (linguagem de programação) pra outra, por ex: novos modulos js não suportados
// nos navegadores, "serão" traduzidos (transpile), para que possam funcionar; de typescript para javascript.

gulp.task('default', () => {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            minified: true,     // minificar que nem uglify
            comments: false,    // tirar os comentários
            presets: ["env"]    // preset env determina automaticamente os plugins que você precisa suportar pro ambiente.
        }))
        // .pipe(uglify())
        .on('error', function (err) { console.log(err) })    // caso dê erro, mostrar
        .pipe(concat('codigo.min.js'))      // nome do arquivo que eu quero que ele gere; .min.js significa que o código foi compactado/minificado.
        .pipe(gulp.dest('build'))
})