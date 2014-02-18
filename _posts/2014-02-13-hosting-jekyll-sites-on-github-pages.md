---
layout: post
title: "Hosting a Jekyll generated website on GitHub Pages"
date: 2014-02-13 09:45:32
categories: Jekyll GitHub
excerpt: "I was looking for a quick way to publish some notes about web development stuff that interested me. 
I wanted it to be a fast process, easy to preview ..."
---
I was looking for a quick way to publish some notes about web development stuff that interested me. 
I wanted it to be a fast process, easy to preview in local environment, as much customizable as desired and cheap (free accepted too).  
Some time ago i never thought i would even consider working on a website statically. I mean with no CMS, database or any server side language allowing me to reuse code parts, just static HTML and asset files directly uploaded to the server. But then one of our clients asked us to work on a [Jekyll][1] based site. 

What is Jekyll?
---------------
[Jekyll][2] is a parsing engine. Once installed Jekyll converts your input folder files to a static website content in your output folder ( called "_site"  by default).
Jekyll is based on [Liquid Template Engine][3], it's possible to use templates to define different page layouts,  it has some logical operators available, variables...  Jekyll will parse all of it and generate a static HTML  website when executed.

Installing Jekyll
----------------- 
Jekyll is installed as a ruby gem on local computer so it requires Ruby and RubyGems installed. Here is a good guide to [install Ruby On Rails on Ubuntu with RVM][4] from Digital Ocean.
Once RubyGems installed we can install Jekyll. Simply type on terminal:

```
gem install jekyll
```

Now we can create our first Jekyll project:

```
jekyll new <your-project-folder-name>
```

This creates a default Jekyll project folder. It's a pretty simple structure where we can define the default site layout, specific layout for post pages, include a header or a footer as partials...
[Jekyll documentation on site templates][5] is really helpful and there are a lot of free Jekyll templates out there if you don't  want to start from scratch ( see [http://jekyllthemes.org/][6] ).  

We can now ask Jekyll to generate our static content. Inside our project folder we type:
```
jekyll serve --watch
```
this will generate a `_site` folder with our static content, start Jekyll's built in small web server for development (now we can visit our site at `localhost:4000` ), and every change we make on our source files, Jekyll will automatically regenerate our content. Please refer to [Jekyll docs][7] for more info about Jekyll execution options.

Jekyll and GitHub
-----------------
GitHub Pages also uses Jekyll to generate its pages. This is a free and powerful hosting option for Jekyll.
If we take a look at our `.gitignore` file that Jekyll created on our project root, the `_site` folder is listed, so Jekyll will be executed server side on GitHub servers. 

Setting up GitHub Pages
-----------------------
To create a Github Pages project we must create a new repo in our GitHub account and clone in our local machine.
Now we must create a `gh-pages` branch for this repo. This tells GitHub that this branch contents must be treated differently. Just navigate to the new repo folder and type:

```
git checkout --orphan gh-pages
```

After creating the new branch we just push our changes to GitHub so it is available remotely too. Now one  optional step would be to delete the repo `master`, so we only have to update a single branch. If we want to do that we can follow [this link][8] instructions. 

Now we just must add and push our Jekyll theme and contents to our new repo, changes may take up to ten minutes to be visible.

Our site site is published at `http://`**your-github-username**`.github.io/`**your-repo-name**

Custom domain
------------------
It's easy to set up a custom domain or subdomain for a GitHub Pages repo. Just create a file called `CNAME` in the root of the repo and put the domain (or subdomain) into the file. In my case it would be: 
```  [language] [title] [url] [link text] [linenos:false] [start:#] [mark:#,#-#]
notes.lavitoverda.net
```
GitHub instructions about custom domains [here][9]

Who is it for?
--------------
If GIT is in your daily workflow, i find Jekyll a perfect and fast solution for blogs or small sites. As you can see in it's documentation, Jekyll, is 'blog-aware', meaning with some simple configuration we can have it to work as a blog.


Multi language sites, contact forms, comments?
----------------------------------------------




Related links
-----------------
http://24ways.org/2013/get-started-with-github-pages/ Really good article by Anna Debenham
http://jekyllrb.com/ Jekyll official site
translate a site in jekyll
Prose?
Contact form in Jekyll
Shopify Liquid Templating engine intro: http://docs.shopify.com/themes/liquid-basics
Markdown syntax quick guide: http://markable.in/file/aa191728-9dc7-11e1-91c7-984be164924a/
Octopress


Where to go from here
---------------------
Now that I've been working with Jekyll for a while I would like to try some other static content generators out there like middleman.


  [1]: http://jekyllrb.com/ "Jekyll site"
  [2]: http://jekyllrb.com/ "Jekyll site"
  [3]: https://github.com/Shopify/liquid/wiki/Liquid-for-Designers "Liquid Template Engine"
  [4]: https://www.digitalocean.com/community/articles/how-to-install-ruby-on-rails-on-ubuntu-12-04-lts-precise-pangolin-with-rvm "Intall Ruby on Rails on Ubuntu"
  [5]: http://jekyllrb.com/docs/templates/ "Jekyll docs"
  [6]: http://jekyllthemes.org "Free jekyll themes"
  [7]: http://jekyllrb.com/docs/usage "Jekyll usage options"
  [8]: http://oli.jp/2011/github-pages-workflow/#deleting-master "GitHub deleting master branch"
  [9]: https://help.github.com/articles/setting-up-a-custom-domain-with-pages "Custom domain on GitHub Pages"