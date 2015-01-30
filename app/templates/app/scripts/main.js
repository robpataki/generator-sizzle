require.config({
  paths: {
    'text':         '../../bower_components/requirejs-text/text',
    'jquery':       '../../bower_components/jquery/dist/jquery',
    'signals':      '../../bower_components/js-signals/dist/signals',
    'tweenmax':     '../../bower_components/greensock/src/uncompressed/TweenMax',
    'fastclick':    '../../bower_components/fastclick/lib/fastclick',
    '_':            '../../bower_components/underscore/underscore',
  },
  shim: {
    jquery: {
      deps: [],
      exports: '$'
    },
    tweenmax: {
      deps: [],
      exports: 'TweenMax'
    },
    fastclick: {
      deps: [],
      exports: 'FastClick'
    },
    '_': {
      deps: [],
      exports: '_'
    },
  }
});

require(['App', 'jquery'], function (App, $) {
  'use strict';

  /*
   * Bootsrapping the application
   */
  $(document).ready(function(){
    console.log('[Main] - ready!');
    window.App = new App();
  });
});