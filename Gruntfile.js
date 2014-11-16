'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: {
            // Configurable paths
            app: 'app'
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            js: {
                files: ['<%= config.app %>/js/**/*.js'],
                tasks: ['concat:appJS'],
                options: {
                    livereload: true
                }
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: ['<%= config.app %>/css/**/*.{scss,sass}'],
                tasks: ['sass:compile', 'autoprefixer', 'concat:css']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/{,*/}*.html',
                    '.tmp/styles/app.css',
                    '<%= config.app %>/img/{,*/}*',
                    '**/*.scss'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9001,
                livereload: 35730,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: 'http://localhost:9001/organization/search/searchVol.html?owner=organization',
                    base: [
                        '.tmp',
                        '<%= config.app %>'
                    ]
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '<%= config.app %>/.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '<%= config.app %>/.tmp'
        },
        //SASS
        sass: {
          compile: {
            options: {
              sourcemap: true,
              loadPath: ['<%= config.app %>/css']
            },
            files: {
              '<%= config.app %>/.tmp/styles/main.css': '<%= config.app %>/css/responsive/header.scss'
            }
          }
        },
        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/.tmp/styles/',
                    src: 'main.css',
                    dest: '<%= config.app %>/.tmp/styles/'
                }]
            }
        },

        imagemin: {
            server: {
                files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: '<%= config.app %>',
                    src: '**/*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.app %>/.tmp/img'
                }]
            }
        },

        concat: {
            options: {
              separator: ';',
            },
            //for external libraries
            bowerJS: {
              src: [
              '<%= config.app %>/lib/jquery/dist/jquery.js',
              '<%= config.app %>/lib/angular/angular.js',
              '<%= config.app %>/lib/bootstrap/dist/js/bootstrap.js',
              '<%= config.app %>/lib/ng-table/ng-table.js',
              //date picker Scripts
              '<%= config.app %>/lib/moment/moment.js',
              '<%= config.app %>/lib/moment/min/moment.min.js',
              '<%= config.app %>/lib/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
              // typeahead - tag inputs
              '<%= config.app %>/lib/bootstrap.taginput.js',
              '<%= config.app %>/lib/bootstrap3-typeahead.js',
              '<%= config.app %>/lib/jasny-bootstrap/js/jasny-bootstrap.min.js',
              '<%= config.app %>/js/colpick/colpick.js',
              '<%= config.app %>/js/inputFile/inputFile.js',
              '<%= config.app %>/js/imageSlider/imageSlider.js',
                   ],
              dest: '<%= config.app %>/.tmp/scripts/bower.js',
            },
            //for scripts written by us
            appJS: {
              src: [
              '<%= config.app %>/js/app.js',
              '<%= config.app %>/js/directive/navigation.js',
              '<%= config.app %>/js/directive/changeOwner.js',
              '<%= config.app %>/js/directive/changeLanguage.js',
                    ],
              dest: '<%= config.app %>/.tmp/scripts/core.js',
            },
            css: {
                src: [
                '<%= config.app %>/lib/bootstrap/dist/css/bootstrap.min.css',
                '<%= config.app %>/css/bootstrap-responsive.min.css',
                '<%= config.app %>/css/font-awesome.css',
                '<%= config.app %>/css/organization/postJob/postJob.css',
                '<%= config.app %>/css/organization/viewApp/viewApp.css',
                '<%= config.app %>/css/global.css',
                ],
                dest: '<%= config.app %>/.tmp/styles/app.css',
            }
        },


        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                'sass:compile',
                'concat:bowerJS',
                'concat:appJS',
                'imagemin:server'
            ]
        }
    });


    grunt.registerTask('serve', function (target) {
    
        grunt.task.run([
            'clean:server',
            'concurrent',
            'autoprefixer',
            'concat:css',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'concurrent',
        'concat:css',
        'autoprefixer'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
