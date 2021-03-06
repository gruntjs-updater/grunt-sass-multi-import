/*
 * grunt-sass-multi-import
 * https://github.com/Jandalf/grunt-sass-multi-import
 *
 * Copyright (c) 2015 Jandalf
 * Licensed under the GNU General Public License.
 */

'use strict';

var path = require('path'),
	os = require('os'),
	_ = require('lodash');

module.exports = function(grunt) {
	grunt.registerMultiTask(
		'sass-multi-import',
		'Include other partial .scss files by including a ' +
		'dynamically maintained .scss file.',
		function() {
			var options = this.options({
					quotes: 'double'
				}),
				dest = this.files[0].dest,
				newFileContents = [
					// Header
					'// This file imports other partial .scss files.',
					'// It is automatically generated by the grunt sass-multi-import task.',
					'// Do not directly modify this file.',
					''
				];

			grunt.verbose.writeln('\nGenerating ' + dest.yellow + ':');

			if (!this.filesSrc.length) {
				grunt.verbose.writeln('No files found to import!');
			}

			this.filesSrc.forEach(function(file) {
				var fileName = path.basename(file);

				// ignore files that are not sass partials
				if (fileName.charAt(0) !== '_' || (!_.endsWith(fileName, '.scss') && !_.endsWith(fileName, '.sass'))) {
					grunt.verbose.writeln('Ignoring ' + file.cyan + ' which is not a sass partial!');
					return;
				}

				var includeDir = path.relative(path.dirname(dest), path.dirname(file)), // make path relative
					includeFile = fileName.replace('.scss', '').substring(1), // remove .scss extension and initial underscore
					includePath = path.join(includeDir, includeFile).replace(/\\/g,'/'),
					quotes = (options.quotes === 'single') ? '\'' : '"';

				grunt.verbose.writeln('Importing ' + includePath.cyan);

				newFileContents.push('@import ' + quotes + includePath + quotes + ';');
			});

			grunt.file.write(dest, newFileContents.join(os.EOL));
		}
	);
};
