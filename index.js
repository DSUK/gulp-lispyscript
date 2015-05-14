'use strict';
var gutil = require('gulp-util');
var through = require('through2');
var applySourceMap = require('vinyl-sourcemaps-apply');
var objectAssign = require('object-assign');
var replaceExt = require('replace-ext');
var ls = require('lispyscript');

module.exports = function (opts) {
	opts = opts || {};

	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-lispyscript', 'Streaming not supported'));
			return;
		}

		try {
			var fileOpts = objectAssign({}, opts, {
				filename: file.path,
				filenameRelative: file.relative,
				sourceMap: !!file.sourceMap
			});
			var res = ls._compile(file.contents.toString(), fileOpts.filename, fileOpts.sourceMap, fileOpts.a_include_dirs);

			if (file.sourceMap && res.map) {
				applySourceMap(file, res.map);
			}

			file.contents = new Buffer(res);
			file.path = replaceExt(file.path, '.js');
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-lispyscript', err, {fileName: file.path, showProperties: false}));
		}

		cb();
	});
};
