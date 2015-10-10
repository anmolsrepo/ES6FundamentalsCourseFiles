module.exports = function (grunt) {
    "use strict";

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        express: {
            all: {
                options: {
                    port: 9000,
                    hostname: "0.0.0.0",
                    bases: ["app", "bower_components", "node_modules"]
                }
            }
        },
        "babel": {
            options: {
                sourceMap: true
            },
            dist: {
                files: {                    
                    "app/es5/mySpec.js":                            "app/es6/mySpec.js",
                    "app/es5/variablesParameters/const.js":         "app/es6/variablesParameters/const.js",
                    "app/es5/variablesParameters/defaults.js":      "app/es6/variablesParameters/defaults.js",                    
                    "app/es5/variablesParameters/destructuring.js": "app/es6/variablesParameters/destructuring.js",
                    "app/es5/variablesParameters/let.js":           "app/es6/variablesParameters/let.js",
                    "app/es5/variablesParameters/rest.js":          "app/es6/variablesParameters/rest.js",
                    "app/es5/variablesParameters/spread.js":        "app/es6/variablesParameters/spread.js",
                    "app/es5/variablesParameters/templates.js":     "app/es6/variablesParameters/templates.js",
                    "app/es5/classes/classes.js":        "app/es6/classes/classes.js",
                    "app/es5/classes/arrows.js":         "app/es6/classes/arrows.js",
                    "app/es5/classes/comprehensions.js": "app/es6/classes/comprehensions.js",
                    "app/es5/classes/generators.js":     "app/es6/classes/generators.js",
                    "app/es5/classes/iterators.js":      "app/es6/classes/iterators.js",
                }
            }
        },
        watch: {
            all: {
                files: "app/**/*.*",
                options: {
                    livereload: true
                }
            },
            js: {
                files: "app/es6/*.js",
                tasks: ["babel"]                
            }
        },
        open: {
            all: {
                path: "http://localhost:9000/default.html"
            }
        }
    });

    // grunt.loadNpmTasks("grunt-contrib-watch");
    // grunt.loadNpmTasks("grunt-express");
    // grunt.loadNpmTasks("grunt-open");
    // grunt.loadNpmTasks("grunt-babel");
    grunt.registerTask("default", ["babel", "express", "open", "watch"]);
};