module.exports = function(grunt){
    
    grunt.initConfig({
      watch: {
          scripts: {
            files: '**/*.scss',
            tasks: ['sass']    
          }
          
      },
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
            
          files: [{                         // Dictionary of files
            expand: true,
            cwd: 'dev/',
            dest: 'dev/css/',
            ext: '.css',
            flatten: true,
            src: ['scss/*.scss']       // 'destination': 'source'
          }]
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['watch']);
};
