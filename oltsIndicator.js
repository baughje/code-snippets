/* 
The code below will return true or false depending upon the online
status of the browser.  The boolean value true indicates the browser is
online and false being offline.

Browsers implement the navigator.onLine property differently.  See
this resource to learn more about checking connectivity status of a 
browser: http://www.html5rocks.com/en/mobile/workingoffthegrid/

This plugin is namespaced to oltsIndicator in case the jQuery gods
decide to create a method called indicator().  Plus, we're using it on 
the OLTS project.
*/

(function( $ ) {
	$.fn.oltsIndicator = function() {
		
			return this.each(function() {
			
				var $this = $(this);
				
				return !!(navigator.onLine); 		
			});
			
		};
		
}) ( jQuery );
