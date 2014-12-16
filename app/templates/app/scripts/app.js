define(
	[
		'jquery',
		'signals',
		'fastclick',
		'tweenmax'
	],

	function(
		$,
		signals,
		fastclick,
		TweenMax
	) {

		'use strict';

		function App() {

			// Initialising FastClick
			fastclick.attach(document.body);

			var _this = this;

			// Global app elements
			_this.els = {};
			_this.els.$window = $(window);

			// Signals
			_this.signals = {};
			_this.signals.appResized = new signals.Signal();

/////////////
//////////////// PRIVATE METHODS
///
			function _init() {
				console.log('[App] - _init(): Sizzle is at your service!');
				// Handle the app resizing
				_this.els.$window.on('resize', _onWindowResized);
				setTimeout(function() {_onWindowResized();}, 100);
			};

			/**
		     * Handle the window resize event
		    */
			function _onWindowResized() {
				_this.signals.appResized.dispatch();
			};

			// Self initialising
			$(_init());
		}

		return App;
	}
);