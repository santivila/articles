module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
           dist: {
             options: {
               // cssmin will minify later
               style: 'expanded'
             },
             files: {
               'css/styles.css': 'css/styles.scss'
             }
           }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 version']
            },
            multiple_files: {
                expand: true,
                flatten: true,
                src: 'css/styles.css',
                dest: 'css/'
            }
        },

        cssmin: {
           combine: {
             files: {
               'css/styles.min.css': ['css/styles.css','css/syntax.css']
             }
           }
        },
         
        concat: {
           dist: {
             src: [
               'bower_components/jquery/dist/jquery.js',
               'js/custom.js'
             ],
             dest: 'js/scripts.js'
           }
        },
     
        uglify: {
           build: {
             src: 'js/scripts.js',
             dest: 'js/scripts.min.js'
           }
        },
     
        imagemin: {
           dynamic: {
             files: [{
               expand: true,
               cwd: 'img/',
               src: ['**/*.{png,jpg,gif}'],
               dest: 'img/'
             }]
           }
        },

        watch: {
            //options: {
            //  livereload:true,
            //},
            scripts: {
             files: ['js/*.js'],
             tasks: ['concat', 'uglify'],
             options: {
               //spawn: false,
               livereload: true,
             }
            },
            styles: {
             files: ['css/*.scss'],
             tasks: ['stylesheets'],
             options: {
               //spawn: false,
               livereload: true,
             }
            },
            images: {
             files: ['img/**/*.{png,jpg,gif}', 'img/*.{png,jpg,gif}'],
             tasks: ['imagemin'],
             options: {
               //spawn: false,
               livereload:true,
             }
            },
            reloadwithnotasks: {
                files: ['**/*.html','**/*.md','**/*.php','!**/bower_components/**','!**/node_modules/**','!**/_site/**'],
                options: {
                    livereload: true
                }
            }
        },


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    // define the tasks
    grunt.registerTask(
      'stylesheets', 
      'Compiles and compress the stylesheets.', 
      [ 'sass', 'autoprefixer','cssmin']
    );
    grunt.registerTask('default', ['stylesheets','concat','uglify','imagemin','watch']);

};


