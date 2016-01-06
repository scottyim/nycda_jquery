// Scott Yim
// Assignment 6
// jQuery Cheat Sheet

/* CONTENTS
1. Intro
2. Examples */

// 1. Intro - jQuery
// - an example of a library (external file written to invoke methods and functions to make tasks within another file easier/more efficient)
// - written in JavaScript
// - helps navigate DOM much easier/faster
// - use $("___")
// - don't forget to:
//     - include <script> tag as follows:
//           - <script src="https://code.jquery.com/jquery-2.1.4.min.js"></script>
//     - wrap inside/include $document.ready()

// 2. Examples

// a. hide
	// $("#sampleID").hide();

// b. show
	// $("#sampleID").show();

// c. onclick
	// $("h1").click(function(){
	//		alert('click on h1');   
	// } );

// d. fade in
	// $("#sampleID").fadeIn();

		// d(ii). over time (example: 1 second)
			// $("#sampleID").fadeIn(1000);

// e. fade out
	// $("#sampleID").fadeOut();

		// e(ii). over time (example: 1 second)
			// $("#sampleID").fadeOut(1000);

// f. hide with slide 

		// f(i). slide up over time (example: 1 second)
			// $("#sampleID").slideUp(1000); 

		// f(ii). slide in over time (example: 1 second)
			// $("#sampleID").slideDown(1000);