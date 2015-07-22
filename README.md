# grunt-sass-multi-import

> Combine multiple .scss files into one dynamically maintained .scss file.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-sass-multi-import --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-sass-multi-import');
```

## The "sass-multi-import" task

### Overview
In your project's Gruntfile, add a section named `sass-multi-import` to the data object passed into `grunt.initConfig()`.

**Important:** When you execute your tasks, this task needs to be executed *before* your Sass task, or whatever task compiles your `*.scss` files.

```js
grunt.initConfig({
  'sass-multi-import': {
    your_target: {
      // Target-specific file lists and/or options go here.
      files: {
        // The file pattern to add @imports to.
        // The name of the file is arbitrary - I like "all".
        src: ['path/to/scss/files/**/_all.scss']
    },
  },
})
```

### Options

#### options.quotes
Type: `String`
Default value: `double`

This plugin writes `@import` statements, which use quotes. By default, they're double quotes, but maybe you want to use single quotes. Set this to 'single'.

### Usage Examples

#### Default Options
Find any _*.scss files in your partials folder and subfolders and create a _partials.scss with @imports to them.

```js
grunt.initConfig({
  'sass-multi-import': {
    files: [{
      src: ['src/styles/partials/**/*'],
      dest: 'src/styles/_partials.scss'
    }]
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).