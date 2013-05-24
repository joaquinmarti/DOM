# jQuery DOM Cache

Object to cache common used DOM elements. Returns a cached jQuery object with the element or list of elements matching the selector.

## Examples

* DOM.get('#nav'); // Get an element querying the DOM or from cache
* DOM.clear('#nav); // Clear the object from Cache
* DOM.refresh(); // Delete all Cache references
* DOM.live('#nav'); // Get an element from live DOM, without cache

## How to use it

DOM.get('#nav').css('position', 'fixed'); // In the first call, DOM library will cache the object
DOM.get('#nav').fadeIn(): // Calling #nav will return a cached object