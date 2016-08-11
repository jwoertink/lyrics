# Lyrics

Browser add-on for firefox and chrome to format lyrics text on google play site so more than 1 verse is readable without scrolling

## Development

You will need to install [Grunt](http://gruntjs.com/getting-started)

`npm install -g grunt-cli`

If you don't have [npm](https://www.npmjs.com/) then install from `brew install nodejs`.

Install the grunt dependencies

`npm install`

## FireFox

To use the plugin locally, you must package the extension to create your .xpi file. Then from FireFox, go to `Tools > Add-ons > Extensions`. Click on the gear icon > Debug Add-on. Then load temporary add-on and select your .xpi file.

### Installation

`brew install mozilla-addon-sdk`

### Build and run

* `grunt coffee`
* `cd firefox && cfx run`

### Package Extension

`cd firefox && cfx xpi`

## Chrome

Not working yet
