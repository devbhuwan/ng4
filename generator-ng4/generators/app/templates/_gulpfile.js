var srcDir = 'dist/lib';

var gulp = require('gulp');
var sass = require('gulp-sass');

inlineNg2Template = require('gulp-inline-ng2-template');
fs = require("fs");
gulp.task('inline-templates', function () {
  return gulp.src(srcDir + '/**/*.component.js')
    .pipe(inlineNg2Template({
      base: srcDir,
      useRelativePaths: true,
      styleProcessor: styleProcessor
    }))
    .pipe(gulp.dest(srcDir));
});


function styleProcessor(path, ext, file, callback) {
  try {
    var cssPath = path.replace(new RegExp("[^/]*$"), "");
    var css = gulp.src(path)
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest(cssPath))
      .on('end', function () {
        var fileContent = fs.readFileSync(path.replace(new RegExp(".component.scss$"), ".component.css"), "utf8");
        callback(null, fileContent);
      });
  }
  catch (err) {
    callback(err);
  }
}
