module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dist: {
				files: {'css/global.css': 'sass/global.scss'},
				options: { style: 'compressed' }
			}
		},
		watch: {
			stylesheets: {
				files: 'sass/*.scss',
				tasks: ['sass']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);
};
