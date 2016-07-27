module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      files: ['Gruntfile.js', 'public/scripts/*.js', 'routes/*.js', 'models/*.js', 'server.js']
    },
    watch: {
      files: ['**/*.js'],
      tasks: ['jshint', 'uglify']
    },
    copy: {
      main: {
        files: [
          // makes all src relative to cwd
          {expand: true, cwd: 'node_modules', src: ['angular/**', 'bootstrap/**'], dest: 'public/vendors'},
        ],
      },
    },
    uglify: {
     my_target: {
      //  options: {
      //    mangle: false
      //  },
       files: {
         'public/scripts/client.min.js': ['client/*.js']
       }
     }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jshint', 'uglify', 'watch']);

};
