module.exports = function(grunt) {
  var appFiles = [
        'lib/azlyrics.coffee',
        'lib/googleplay.coffee',
        'lib/init.coffee'                         
      ];

  grunt.initConfig({
    coffee: {
      compile: {
        files: {
          'firefox/data/lyrics.js': appFiles
        },
        options: {
          join: true
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'firefox/data/lyrics.js': ['firefox/data/lyrics.js'],
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['coffee', 'uglify']);
};
