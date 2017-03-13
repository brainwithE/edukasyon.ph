module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			sass: {
				files: ['sass/**/*.scss'],
				tasks: ['sass', 'cssmin'],

			}
		},

		sass: {
			dist: {
				files: {
					'css/style.css' : 'sass/*.scss'
				}
			}			  
		},

		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css','!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}],
				'processImport': false
			},
		},

		uglify:{
			options: {
				manage: false
			},
			my_target: {
				files: [{
					expand:true,
					cwd: 'js/',
					src: '**/*.js',
					dest: 'js/',
					ext: '.min.js'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ["watch"]);

};