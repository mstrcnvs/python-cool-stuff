module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {'css/global.css': 'assets/global.scss'},
				options: { style: 'compressed' }
			}
		},
		watch: {
			stylesheets: {
				files: 'assets/*.scss',
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};
