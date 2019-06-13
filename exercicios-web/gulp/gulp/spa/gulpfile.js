const gulp = require('gulp')
const util = require('gulp-util')        // checar variável de ambiente, que vai ser ou não passada pro build.
const sequence = require('run-sequence')    // processa de forma sequencial

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if (util.env.production) {   // se você startar a flag production ele não vai starta o servidor  (gulp --production)
        sequence('deps', 'app')  // primeiro processa a task deps, e depois a task app
        // gulp.start('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor')
        // gulp.start('deps', 'app', 'servidor')
    }
})