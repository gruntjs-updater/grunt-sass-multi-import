'use strict';

var grunt = require('grunt');

exports['sass-multi-import'] = {
	default: function(test) {
		test.expect(1);

		var actual_top = grunt.file.read('tmp/default/_all.scss'),
			expected = grunt.file.read('test/expected/_default.scss');

		test.equal(actual_top, expected, '_all.scss contains expected imports');
		test.done();
	},
	custom: function(test) {
		test.expect(1);

		var actual_top = grunt.file.read('tmp/custom/_all.scss'),
			expected = grunt.file.read('test/expected/_custom.scss');

		test.equal(actual_top, expected, '_all.scss contains expected imports');
		test.done();
	}
};