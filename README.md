<p align="center">
  <a href="http://robertpataki.com">
    <img width="281" height="359" src="https://raw.githubusercontent.com/robertpataki/generator-sizzle/master/app/templates/app/images/yeoman-sizzle.png"/>
  </a>
</p>

# generator-sizzle [![Build Status](https://travis-ci.org/robertpataki/generator-sizzle.svg?branch=master)](https://travis-ci.org/robertpataki/generator-sizzle)

> Sizzle generator for quickly bootstrapping web apps using AMD modules and SMACSS like styling usinc Compass and Bourbon.

Using this generator will give you a quickly bootstrapped web app. I wrote this generator to make my life easier, as I have been using this particular set up for quite some time now and I am loving it! It might not be for you, but who knows - I hope it helps others too :)

## Features

- Scaffolding projects with Yeoman
- Run automated tasks with Grunt
- Handle dependencies with Bower
- Browser LiveReload
- Compass stylesheets compilation and sprite generation (plus more)
- HTML, JavaScript and CSS obfuscation and minification
- Event driven JavaScript with JSSignals
- No touch event latency thanks to FastClick
- Double rainbow animations with the Greensock tweening engine
- A nice SASS based grid framework thanks to Bourbon Neat
- Quick deployment via SSH
- Cache busting of image files including your JavaScript and JSON files
- 1 CSS file in the <head> and 1 JavaScript file before the </body>, no unnecessary HTTP requests
- Keep your JavaScript code modular with AMD modules via RequireJS

## Caveats

- Right now there is no unit testing in place (might add later)
- Because Yeoman doesn't like RequireJS, there is no way of making asyncronous calls to multiple AMD modules. Your code is generated by Almond into one single module
- You need to install the Compass Ruby gem (detailed below)


## Bower components

- jQuery
- Greensock
- FastClick
- Normalize
- Almond (a working substitute of requirejs with Yeoman)
- JS Signals
- Bourbon + Bourbon Neat

## NPM modules (other than the usual stuff)
- Compass
- RequireJS (r.js optimiser)

## Installing Compass

1. Make sure you have [Ruby installed](https://www.ruby-lang.org/en/downloads/). Perhaps a better way of installing ruby is via [rbenv](http://octopress.org/docs/setup/rbenv/)
2. Install [Bundler](http://bundler.io/) if you haven't already
3. In your project root run:

	$ bundle install

## Usage

Install `generator-sizzle`:
```
npm install -g generator-sizzle
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo sizzle`, optionally passing an app name:
```
yo sizzle [app-name]
```

Run `grunt` for building and `grunt serve` for preview

## To do

- Add soft build Grunt task
- Add some defaults to the secret.json file
- Add optional sublime-project file support with sensible defaults
- Add optional jsHint and Mocha support

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)