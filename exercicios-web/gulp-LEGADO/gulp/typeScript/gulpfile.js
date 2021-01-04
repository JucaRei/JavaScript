
const gulp = require('gulp')
const concat = require('gulp-concat')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

gulp.task('default', () => {
    gulp.start('ts', 'concat')
})

gulp.task('ts', () => {
    return tsProject.src()
        .pipe(tsProject())
        .pipe(gulp.dest('build'))
})

gulp.task('concat', () => {
    return gulp.src('./build/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist/'))
})

// const gulp = require('gulp')
// const ts = require('gulp-typescript')
// const tsProject = ts.createProject('tsconfig.json')
// const concat = require('gulp-concat')
// // const uglify = require('gulp-uglify')

// gulp.task('default', () => {
//     return tsProject.src()
//         .pipe(tsProject())      // compila o typescript para javascript
//         .on('error', function (err) { console.log(err) })
//         .pipe(uglify())
//         // .pipe(concat('app.min.js'))
//         .pipe(gulp.dest('build'))
// })