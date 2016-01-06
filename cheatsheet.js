// Scott Yim
// Assignment 6
// JavaScript Cheat Sheet

/* CONTENTS
1. Variables
2. Debugging (alerts, comments, the console)
3. Different data types
4. Arrays
5. Testing
6. Logic 
NEW - 7. Functions */

// 1. Variables
// - used to store values
// - can include any data type

	// Examples:
	var myName = "Scott"; // (string)
	var myAge = 25; // (number)

	// Tip: you can use the 'typeof' operator to return the data type of your variable

	// Example: 
	typeof myName; // would return 'string'

// 2. Debugging
// Can use 1 of three methods: alerts, comments, console

	// Examples:
      // alerts
      // - use alert windows to signal code is functioning properly
      var num1 = 10;
	  var num2 = 10;
	  var result12 = num1 + num2;
	  alert(num1 + ' + ' + num2 + ' = ' + result12);

      // comments

      // console
      // - log directly to console to test; simple math problem below
      var num3 = 10;
	  var num4 = 10;
	  var result34 = num3 + num4;
	  console.log(num3 + ' + ' + num4 + ' = ' + result34);


// 3. Different data types
	// Examples:
		// String - "Hello World"
		// Number - 1, 2, 100 (all numbers in JS are ﬂoats)
		// Boolean - true or false
		// Undefined - no value

// 4. Arrays
// - hold a collection of data, of any data type 
	// Example 1:
	var fruits = ["apple", "banana", "blueberry"]
	// - index of apple = 0, banana = 1, blueberry = 2

	// Example 2:
	var vegetables = ["broccoli", "carrot", "celery"]

	// Example 3:
	// - can be combined inside of one, multi-dimensional array, as follows:
	var healthyFoods = [fruits, vegetables]

	   // 4.5 Objects
	   // - like an array, with defined keys/parameter values
	   // Example 4:
	   var fruits = {color: 'blue', taste: 'sweet'}

// 5. Testing
	// If / Else statement
	// - allows us to run code under certain conditions

	// Example: Test if a number is > 50
	  var num5 = 10;
	  var num6 = 10;
	  var result56 = num5 + num6;
	  if (result56 > 50) {
	  	alert(num5 + ' + ' + num6 + ' = ' + result56 + ', which IS greater than 50!');
	  }
	  else {
	  	alert(num5 + ' + ' + num6 + ' = ' + result56 + ', which is NOT greater than 50!');
	  }

// 6. Logic
	// - can use JavaScript to write statements that progress in a logical manner

	// Example: 
 	  var num7 = 100;
	  var num8 = 100;
	  var result78 = num7 + num8;
	  if (result78 === 150) {
	  	alert(num7 + ' + ' + num8 + ' = ' + result78 + ', which EQUALS the number we\'re looking for...150!');
	  }
	  else if (result78 < 250) {
	  	alert(num7 + ' + ' + num8 + ' = ' + result78 + ', which is LESS THAN 250!');
	  }
	  else {
	  	alert('The result is too big. Please try setting num7 and num8 to different values.')
	  }

// 7. Functions
	// - encapsulate code for later use
	// - can take arguments and return values
	// - many use cases, including automating repetitive processes

	// Example 1: Check If Password = "HelloWorld" 
		function passwordCheck(password) {
			// check to see if password = "HelloWorld"
			if (password === "HelloWorld") {
				return alert("Your password is correct.")
			}
			// otherwise, print 'incorrect' statement
			else {
				return alert("Your password is incorrect. Please try again.")
			}
		} 
		// To invoke: 
		passwordCheck("HelloWorld");

	// Example 2: Addition of 2 Numbers
		function addTwoNumbers(firstNumber, secondNumber) {
			var total = firstNumber + secondNumber;
			return alert("The total is " + total);
		}
		// To invoke: 
		addTwoNumbers(2,5);

	// Example 3: Multiplication of 2 Numbers
		function multiplyTwoNumbers(firstNumber, secondNumber) {
			var total = firstNumber*secondNumber;
			return alert("The total is " + total);
		}
		// To invoke: 
		multiplyTwoNumbers(10,10);
