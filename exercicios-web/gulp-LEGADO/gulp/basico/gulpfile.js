const gulp = require("gulp") // importar uma referência pro gulp

// default é a porta de entrada para o script
gulp.task("default", () => {
    // console.log("Ok!");
    gulp.start('copiar', 'fim')
})

/* 2 depêndencias em um array / ['antes1', 'antes2'] antes de executar a task copiar
/ a task copiar para ser executada ela precisa de outras 2 tasks como pré-requisito */
gulp.task('copiar', ['antes1', 'antes2'], () => {  //   () função associada a task copiar, que será chamada no momento em que a task copiar for invocada
    // console.log('Copiar!!!')
    // src- arquivos que eu quero usar como insumo pro passo a passo (ex: concatenar os arquivos css em 1, tirar todos os espaços para ficar menor)
    return gulp.src(['pastaA/**/*.txt'])      // subpastas /**/*
        // .pipe(transformacao1()) // no gulp é muito baseado no padrão pipe and filter, ou seja pipe é uma função que você vai encadeando uma chamada à outra, e os filtros vão ser responsáveis por fazer alguma atividade(ex: filtros para juntar arquivos, compactar, ... etc.)
        // .pipe(transformacao2())
        .pipe(gulp.dest('pastaB')) // dest - destino
})

// task antes1 , tambem poderiar ter outros requisitos
gulp.task('antes1', () => {
    console.log('Antes 1!!!')
})

gulp.task('antes2', () => {
    console.log('Antes 2!!!')
})

// gulp.task('fim', () => {
//     console.log('FIM!!!')
// })


// Essa task não faz nada, ela somente chama as outras 2 antes
gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
    console.log('Fim1!!')
})

gulp.task('fim2', () => {
    console.log('Fim2!!')
})