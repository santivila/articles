---
layout: post
title: "Using roots io Wordpress starter theme with Sass"
date: 2014-02-13 09:45:32
categories: php Bower Grunt Wordpress 
excerpt: "Customizing..."
---

There are so many good wordpress starter themes out there. I feel comfortable using  Roots.io so much as it uses HTML5 Boilerplate, Bootstrap, and Grunt. 

###Downloading roots theme

To download Roots starter theme, I just clone it in my wordpress `themes` folder: 

```
git clone git@github.com:roots/roots.git
```

I already have  nodejs and grunt installed. If you don't I try to give some advice on that in ....
To install grunt needed plugins, specified in file `package.json` I just must type from the theme folder:

```
npm install
```

And node package manager will do it's magic.

###Changing Twitter Bootstrap to Sass version

Roots starter theme comes with the original Twitter Bootstrap version based on Less. I feel more comfortable working with Sass so I change it with [John W. Long's Twitter Bootsrap port to Sass][1]
I use Bower to install it. If we already have nodejs installed, installing bower is a s simple as typing:

```
npm install -g bower
```

I must first create bower's config file, as Roots does not use Bower at the time of writing. I just type:

```
bower init
```

and answer all questions bower asks me.

Before installing Bootstrap Sass port, I would like Bower to install it's components inside **Roots theme** folder `assets` folder to keep everything as tidy and ordered as **Roots theme** was when I downloaded it.
I create a `.bowerrc` file with the following content:

```
{
  "directory" : "assets/bower_components"
}
```


Now I can install Bootstrap:

```
bower install --save sass-bootstrap
```

Bootstrap gets downloaded with its dependecies in folder `assets/bower_components`. 
The `--save` flag will save the dependency in the `bower.json` file and later I can just run 

```
bower install
``` 

to replicate the exact front-end dependencies. So I can add `assets/bower_components` to my `.gitignore` file and just track `bower.json`.


Remove Less Bootstrap
---------------------


Using Jquery version downloaded with Bower
-------------------------------------------

In its `bower.json` file **Bootstrap** defines that it depends on **jQuery**, so it got automatically pulled in together with Bootstrap. But we already had one jQuery version as **Roots theme** serves jQuery from the Google CDN with local fallback.
I don't need to have both Jquery versions inside my theme so I choose to keep the one installed with **Bower**, so I can add it to my `.gitgnore` file and I can update it with a single line command:

```
bower update jquery
```

At the time of writing **jQuery** in **Roots.io theme** is located at:

```
assets/js/vendor/jquery-1.11.0.min.js
```

My other jQuery version downloaded with Bower is at path:

```
assets/bower_components/jquery/dist/jquery.min.js`. 
```

I want to change **Roots theme**'s original code as less as possible. In Roots theme JavaScript files are enqueued from `lib/scripts.php`. I'm  changing just the name of the included script and ask Grunt to copy my JQuery version to the specified folder.

{% highlight ruby linenos %}
echo "HELLO WORLD!";
{% endhighlight %}


```ruby TEST http://www.google.com LINK:TEXT linenos:false start:5 mark:2,3-4
echo "HELLO WORLD!";
echo "HELLO WORLD!";
echo "HELLO WORLD!";
echo "HELLO WORLD!";
echo "HELLO WORLD!";
echo "HELLO WORLD!";
```


CODE NEW







Change Modernizr by bower




  [1]: https://github.com/jlong/sass-bootstrap "Twitter Bootstrap port to Sass"