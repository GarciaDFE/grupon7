"use strict";

// Importando plugins utilizados no projeto
const gulp = require("gulp");
const sass = require("gulp-sass");
sass.compiler = require("node-sass");
const cssmin = require("gulp-clean-css");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglifyes");
const imagemin = require("gulp-imagemin");
const htmlreplace = require("gulp-html-replace");
const htmlmin = require("gulp-htmlmin");

// Compilar SASS gerando CSS na pasta SRC
function compilaSASS() {
  return gulp
    .src(["src/scss/styles.scss"])
    .pipe(sass())
    .pipe(gulp.dest("src/css"));
}

// Minificar/concatenar/renomear arquivos CSS da pasta SRC para pasta DIST
function optimizeCSS() {
  return gulp
    .src(["src/css/**/*.css"])
    .pipe(cssmin())
    .pipe(concat("styles.css"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/css"));
}

// Minificar/concatenar/renomear arquivos JS Dev
function optimizeJSGeneral() {
  return gulp
    .src(["src/js/components/**/*.js"])
    .pipe(uglify())
    .pipe(concat("scripts.js"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js"));
}

// Minificar/concatenar/renomear arquivos JS Dev
function optimizeJSCarousel() {
  return gulp
    .src(["src/js/carousel/**/*.js"])
    .pipe(uglify())
    .pipe(concat("carousel.js"))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js"));
}

// Otimizar arquivos de imagens Dev
function optimizeIMG() {
  return gulp
    .src("src/img/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/img"));
}

// Renomear links de CSS e JS minificados carregados no HTML Dev
function replaceHTML() {
  return gulp
    .src(["src/*.html"])
    .pipe(
      htmlreplace({
        allcss: "css/styles.min.css",
        alljs: "js/scripts.min.js",
        carousel: "js/carousel.min.js"
      })
    )
    .pipe(gulp.dest("dist/"));
}

// Otimizar arquivos HTML
function optimizeHTML() {
  return gulp
    .src(["dist/*.html"])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("dist/"));
}

// Agrupar tarefas a serem monitoradas
function watch() {
  gulp.watch("src/scss/**/*.scss", compilaSASS);
  gulp.watch("src/css/**/*.css", optimizeCSS);
}

// Agrupar e executar tarefas
const build = gulp.parallel(
  compilaSASS,
  optimizeCSS,
  optimizeJSGeneral,
  optimizeJSCarousel,
  optimizeIMG,
  replaceHTML,
  optimizeHTML
  //watch
);
gulp.task(build);
gulp.task("default", build);
