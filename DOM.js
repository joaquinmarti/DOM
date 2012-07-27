/**
 * DOM.js - Cache for DOM Objects
 * Dual licensed under MIT and GPL.
 * Date: 25/12/2012
 * @author Joaquin Marti <joaquinmarti.com>
 * @version 1.0
 * @memberOf jQuery
 * @example
 * DOM.get('#nav'); // Get an element querying the DOM or from cache
 * DOM.clear('#nav); // Clear the object from Cache
 * DOM.refresh(); // Delete all Cache references
 *
 * https://github.com/joaquinmarti/DOM
 */

DOM = (function(undefined) {

  var _cache = [];

  // Get a cached jquery object
  var _get = function(selector) {

    // Check if the selector is valid
    if (!selector || typeof selector != 'string') {
      return false;
    }

    // If the object doesn't exist in _cache, query the dom to get it
    if (!_cache[selector]) {
      _cache[selector] = $(selector); // _Cache the object from selector
    }

    return _cache[selector];
  };

  // Remove an object from _cache
  var _clear = function(selector) {
    if (_cache[selector]) {
      delete _cache[selector]; // _Cache the object from selector
      return true;
    }
    return false;
  };

  // Refresh all _cache vars
  var _refresh = function() {
    _cache = [];
  };

  return {
    get: _get,
    clear: _clear,
    refresh: _refresh
  }

})();