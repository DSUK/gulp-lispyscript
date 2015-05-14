> Lispyscript to Javascript transpiler for Gulp

> Forked From https://github.com/babel/gulp-babel

## Install

```sh
$ npm install --save-dev gulp-lispyscript
```

## Usage

```js
var gulp = require('gulp');
var lispyscript = require('gulp-lispyscript');

gulp.task('default', function () {
	return gulp.src('src/app.js')
		.pipe(lispyscript())
		.pipe(gulp.dest('dist'));
});
```

## API

### lispyscript(options)

#### options
`sourceMap` and `filename` which are handled for you.

## Source Maps

Use [gulp-sourcemaps](https://github.com/floridoo/gulp-sourcemaps) like this:

```js
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var lispyscript = require('gulp-lispyscript');
var concat = require('gulp-concat');

gulp.task('default', function () {
	return gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(lispyscript())
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});
```
## License

MIT © [John Henry](http://iamjohnhenry.com)
