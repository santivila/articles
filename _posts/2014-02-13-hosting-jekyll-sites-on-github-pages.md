---
layout: post
title: "Hosting Jekyll generated static site on Github Pages"
date: 2014-02-13 09:45:32
categories: jekyll github
excerpt: Some time ago i never thoight i would even consider working on a site website statically. I mean without any CMS, database or serverside language ...
---
I was looking for a quick way to publish some notes about web development stuff that interested me. 
I wanted it to be fast, easy to preview in local environment, as much customizable as desired and cheap.  
Some time ago i never thought i would even consider working on a website statically. I mean with no CMS, database or any server side language allowing me to reuse parts of the code, just static html files directly uploaded to the server. But then one of out clients asked us to work on a jekyll based site. 

What is jekyll?
---------------
Jekyll is a parsing engine. Once installed jekyll converts your input files to your desired static website content on a folder called "_site" ready to upload to a web server.
Jekyll is based on [Liquid Template Engine][1], so you can use templates to define your various layouts,  can use some logical operators, variables... that Jekyll will parse and convert to static html when executed.


Installing jekyll
----------------- 
Jekyll is installed as a ruby gem on local computer so it requires Ruby and RubyGems installed. To install them here is a good guide to install Ruby On Rails on Ubuntu with RVM (https://www.digitalocean.com/community/articles/how-to-install-ruby-on-rails-on-ubuntu-12-04-lts-precise-pangolin-with-rvm) from Digital Ocean.
Once RubyGems installed we simply type on terminal:

```
gem install jekyll
```

Once jekyll is installed we can create our jekyll project folder

```
jekyll new <your-project-folder-name>
```

This creates a default jekyll project. It's a pretty simple structure where we can define the global site layout, layouts for post pages, include a header or a footer with liquid tags... Jekyll documentation on site templates: http://jekyllrb.com/docs/templates/ is really helpful and if you don't want to start your template from scratch there are a lot of free Jekyll themes out there: http://jekyllthemes.org/.  

We can now ask jekyll to generate our static content. Inside our project folder we type:

```
jekyll build
```

This will generate a `_site` folder with our static content. Jekyll has a lot more options like a buit in  web server for development, automatic watch and regeneration of code... please refer to jekyll docs for more info: http://jekyllrb.com/docs/usage


Jekyll and github
-----------------
GitHub Pages also uses Jekyll to generate its pages. This means we can host our site content on a webserver as powerful as github and it's free.
If we take a look in the .gitignore file that jekyll creates on our project root, the `_site` folder is listed, so jekyll will be executed and our site regenerated on github servers 

Setting up Github Pages
-----------------------

Customg domain
------------------

Who is it for?
--------------
If GIT is in your daily workflow, i find Jekyll a perfect and fast solution for blogs or small sites. As you can see in it's documentation, Jekyll, is 'blog-aware', meaning with some simple configuration we can have it to work as a blog.

Uploading to github and setting up a Custom domain
--------------------------------------------------


Multi language sites, contact forms, commnets?
----------------------------------------------




Some useful links
-----------------
Jekyll http://jekyllrb.com/
translate a site in jekyll
Prose?
Contact form in Jekyll
Shopify Liquid Templating engine intro: http://docs.shopify.com/themes/liquid-basics
Markdown syntax quick guide: http://markable.in/file/aa191728-9dc7-11e1-91c7-984be164924a/


Where to go from here
---------------------
Now that I've been working with Jekyll for a while I would like to try some other static content generators out there like middleman.


  [1]: https://github.com/Shopify/liquid/wiki/Liquid-for-Designers "Liquid Template Engine"