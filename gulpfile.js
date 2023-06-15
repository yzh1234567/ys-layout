// eslint-disable-next-line no-undef
const { series, src, dest } = require('gulp');
// eslint-disable-next-line no-undef
const scss = require('gulp-dart-sass');
// eslint-disable-next-line no-undef
const autoprefixer = require('gulp-autoprefixer');
// eslint-disable-next-line no-undef
const cleanCss = require('gulp-clean-css');
// eslint-disable-next-line no-undef
const cssmin = require('gulp-cssmin');

function compile() {
  return src('./src/style/index.scss')
    .pipe(scss())
    .pipe(autoprefixer())
    .pipe(cleanCss())
    .pipe(cssmin())
    .pipe(dest('./dist/style'));
}

 const build = series(compile)

// eslint-disable-next-line no-undef
//exports.build = build
export default build
