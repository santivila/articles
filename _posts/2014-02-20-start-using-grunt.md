---
layout: post
title:  "Adding grunt to my workflow"
date:   2014-02-13 09:45:32
categories: grunt
excerpt: Grunt is a task runner. It can automate a lot of tasks in our development workflow saving us a lot of time...
---

What is grunt?
--------------
Grunt is a task runner. It can automate a lot of tasks in our development workflow saving us a lot of time. This tasks can be optmize images, minification of css and js files, running Sass preprocessor, refresh your browser when you change a file... 

Installing grunt
----------------
Grunt runs over Node.js ( nodejs.org ). So we must have it installed before starting with Grunt.

To install Grunt's command line interface run:
`npm install -g grunt-cli`

Initialize our node project 
`npm init` Creates package.json

To install grunt and grunt plugins for each "grunt task" we want to add:

`
npm install grunt --save-dev 
npm install grunt-contrib-concat --save-dev 
npm install grunt-contrib-sass --save-dev 
npm install grunt-contrib-uglify --save-dev 
npm install grunt-contrib-watch --save-dev 
`
All grunt plugins list: http://gruntjs.com/plugins


Where to go from here
---------------------
Gulp?

Links
-----
http://blog.elenakolevska.com/using-grunt-with-laravel-and-bootstrap/
http://24ways.org/2013/grunt-is-not-weird-and-hard/


