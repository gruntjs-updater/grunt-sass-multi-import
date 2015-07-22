/*
 * grunt-sass-multi-import
 * https://github.com/Jandalf/grunt-sass-multi-import
 *
 * Copyright (c) 2015 Jandalf
 * Licensed under the GNU General Public License.
 */

'use strict';

module.exports = function(grunt) {

	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
				'<%= nodeunit.tests %>'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},
		clean: {
			tests: ['tmp']
		},
		touch: {
			'default': [
				'tmp/default/_module1.scss',
				'tmp/default/_module2.scss',
				'tmp/default/notapartial.scss',
				'tmp/default/subdirectory/_module1.scss',
				'tmp/default/subdirectory/_module2.scss',
				'tmp/default/subdirectory/notapartial.scss'
			],
			custom: [
				'tmp/custom/_module1.scss',
				'tmp/custom/_module2.scss',
				'tmp/custom/notapartial.scss',
				'tmp/custom/subdirectory/_module1.scss',
				'tmp/custom/subdirectory/_module2.scss',
				'tmp/custom/subdirectory/notapartial.scss'
			]
		},

		// Configuration to be run (and then tested).
		'sass-multi-import': {
			default_options: {
				files: [{
					src: ['tmp/default/**/*'],
					dest: 'tmp/default/_all.scss'
				}]
			},
			custom_options: {
				options: {
					quiet: true,
					quotes: 'single'
				},
				files: [{
					src: ['tmp/custom/**/*'],
					dest: 'tmp/custom/_all.scss'
				}]
			}
		},

		// Unit tests.
		nodeunit: {
			tests: ['test/*_test.js']
		}
	});

	grunt.loadTasks('tasks');

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-touch');

	grunt.registerTask('test', ['clean', 'touch', 'sass-multi-import', 'nodeunit']);
	grunt.registerTask('default', ['jshint', 'test']);
};