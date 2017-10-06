var gulp = require('gulp'),
inlineNg2Template = require('gulp-inline-ng2-template');

gulp.task('inline-templates', function () {

return gulp.src('src/app/**/*.component.ts')
    .pipe(inlineNg2Template({
      base: 'src/app/',
      useRelativePaths: true
    }))
    .pipe(gulp.dest('dist/src/app/'));
});
