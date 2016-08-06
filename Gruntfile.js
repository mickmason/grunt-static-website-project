module.exports = function(grunt){
    
    grunt.initConfig({
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: {                         // Dictionary of files
            '/css/main.css': '/scss/main.scss',       // 'destination': 'source'
            '/css/widgets.css': '/scss/widgets.scss'
          }
        }
      }
    });
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.registerTask('default', ['sass']);
};
