'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var sourceMaps = require('gulp-sourcemaps');
var ls = require('./');
/*
it('should transpile ES6 to ES5', function (cb) {
	var stream = to5();

	stream.on('data', function (file) {
		assert(/var foo/.test(file.contents.toString()), file.contents.toString());
		assert.equal(file.relative, 'fixture.js');
	});

	stream.on('end', cb);

	stream.write(new gutil.File({
		cwd: __dirname,
		base: __dirname + '/fixture',
		path: __dirname + '/fixture/fixture.es6',
		contents: new Buffer('let foo;')
	}));

	stream.end();
});

it('should generate source maps', function (cb) {
	var init = sourceMaps.init();
	var write = sourceMaps.write();
	init
		.pipe(to5())
		.pipe(write);

	write.on('data', function (file) {
		assert.deepEqual(file.sourceMap.sources, ['fixture.js']);
		var contents = file.contents.toString();
		assert(/function/.test(contents));
		assert(/sourceMappingURL/.test(contents));
		cb();
	});

	init.write(new gutil.File({
		cwd: __dirname,
		base: __dirname + '/fixture',
		path: __dirname + '/fixture/fixture.js',
		contents: new Buffer('[].map(v => v + 1)'),
		sourceMap: ''
	}));

	init.end();
});
*/
