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
Some time ago I never thought I would even consider working on a website statically. I mean with no CMS, database or any server side language allowing me to reuse code parts, just static HTML and asset files directly uploaded to the server. But then one of our clients asked us to work on a [Jekyll][1] based site. 

###What is Jekyll?
[Jekyll][2] is a parsing engine. Once installed Jekyll converts your input folder files to a static website content in your output folder ( called "_site"  by default).
Jekyll is based on [Liquid Template Engine][3], it's possible to use templates to define different page layouts,  it has some logical operators available, variables...  Jekyll will parse all of it and generate a static HTML  website when executed.

###Installing Jekyll
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

###Jekyll and GitHub
GitHub Pages also uses Jekyll to generate its pages. This is a free and powerful hosting option for Jekyll.
If we take a look at our `.gitignore` file that Jekyll created on our project root, the `_site` folder is listed, so Jekyll will be executed server side on GitHub servers. 

###Setting up GitHub Pages
To create a Github Pages project we must create a new repo in our GitHub account and cloneit in our local machine.
Next we must create a `gh-pages` branch for that repo. This tells GitHub that this branch contents must be treated differently. Just navigate to the new repo folder and type:

```
git checkout --orphan gh-pages
```

After creating the new branch we just push our changes to GitHub so it is available remotely too. Now one  optional step would be to delete the repo `master`, so we only have to update a single branch. If we want to do that we can follow [this link][8] instructions. 

Now we just must add and push our Jekyll theme and contents to our new repo, changes may take up to ten minutes to be visible.

Our site site is published at `http://`&lt;<small><i>your-github-username</i></small>&gt;`.github.io/`&lt;<small><i>your-repo-name</i></small>&gt;

###Custom domain
It's easy to set up a custom domain or subdomain for a GitHub Pages repo. Just create a file called `CNAME` in the root of the repo and put the domain (or subdomain) into the file. In my case it would be: 

```
notes.lavitoverda.net
```

GitHub detailed instructions about custom domains [here][9]

###Who is it for?
If GIT is in your daily workflow, I find Jekyll a perfect and fast solution for blogging and small sites. As you can see in it's documentation Jekyll is 'blog-aware', it comes by default configured to work as a blogging platform. Content can be written in `.md` ([markdown format][10]), much easier and faster to write than HTML,  Jekyll will parse and convert it to HTML code.

###Multi language sites, contact forms, comments?
As seen, Jekyll is static HTML content at the end, so some features may seem difficult to achieve.

In our case our client wanted the site to be multilingual and following [Nate's Smith][11] implementation 
[http://developmentseed.org/blog/multilingual-jekyll-sites/][12] gave us great results.

For the contact form we used Google Forms. We learned this solution from section 'Contact Us Form' [here][13] and styled our form following [this steps][14]. It seems to work pretty well and with no extra cost.

We have not implemented comments for blog posts or other content yet, but [Disqus][15] or some similar service may be the way to go.

###Related links

Some links that explain all of this and much more in detail:

http://jekyllrb.com/ Jekyll official site
http://24ways.org/2013/get-started-with-github-pages/ Really good article by Anna Debenham
http://developmentseed.org/blog/multilingual-jekyll-sites Multilingual Jekyll sites
http://octopress.org/ A blogging framework built in Jekyll
http://prose.io Prose is a content editor for GitHub designed for managing websites.
http://docs.shopify.com/themes/liquid-basics Shopify Liquid Templating engine intro
http://markable.in/file/aa191728-9dc7-11e1-91c7-984be164924a/ Markdown syntax quick guide 
https://stackedit.io/ Great tool for editing markdown files



###Where to go from here
Now that I've been playing with Jekyll for a while I would like to try some other static content generators out there like [Middleman][16] .


  [1]: http://jekyllrb.com/ "Jekyll site"
  [2]: http://jekyllrb.com/ "Jekyll site"
  [3]: https://github.com/Shopify/liquid/wiki/Liquid-for-Designers "Liquid Template Engine"
  [4]: https://www.digitalocean.com/community/articles/how-to-install-ruby-on-rails-on-ubuntu-12-04-lts-precise-pangolin-with-rvm "Intall Ruby on Rails on Ubuntu"
  [5]: http://jekyllrb.com/docs/templates/ "Jekyll docs"
  [6]: http://jekyllthemes.org "Free jekyll themes"
  [7]: http://jekyllrb.com/docs/usage "Jekyll usage options"
  [8]: http://oli.jp/2011/github-pages-workflow/#deleting-master "GitHub deleting master branch"
  [9]: https://help.github.com/articles/setting-up-a-custom-domain-with-pages "Custom domain on GitHub Pages"
  [10]: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet
  [11]: http://developmentseed.org/team/nate-smith/
  [12]: http://developmentseed.org/blog/multilingual-jekyll-sites/ "Multilingual Jekyll sites"
  [13]: http://www.multunus.com/blog/2012/10/our-experience-with-jekyll-and-octopress/
  [14]: http://morning.am/tutorials/how-to-style-google-forms/
  [15]: https://disqus.com
  [16]: http://middlemanapp.com/ "Middleman:  Hand-crafted frontend development"