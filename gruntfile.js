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
		},
		connect: {
	    server: {
	      options: {
	        port: 8000,
	        base: {
	          path: 'www-root',
	          options: {
	            index: 'index.html',
	            maxAge: 300000
	          }
	        }
	      }
	    }
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', ["connect"]);

};