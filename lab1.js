'use strict';

/* LAB 1: A Trip to Woodland Park Zoo

 Welcome to Lab 1 =)

 Be sure to read all the comments!

 All of the instructions are inline with the assignment below. Look for the
 word TODO in comments.  Each TODO will have a description of what is
 required.

 To run this file, type the following (in the terminal):

    node lab1.js

 and then press enter/return.

 Instructions for turning this lab in are in the assignment description in
 Canvas.

 I'm happy to answer any questions on Slack.

*/

/* ----------------- Helper ------------------------------------------------
 We've implemented a function that will help you sanity-check your code.
*/

function assert(expression, failureMessage) {
  if (!expression) {
    console.log('assertion failure: ', failureMessage);
  }
}

/*
 An assertion is something we expect to be true about the state of the
 program at the point where the assertion is made.

 Remember, state is all the variables that we've declared and their current
 values.

 Here are some examples for how to use the assert method:
*/

//assert(1 === 1, '1 equals 1 - this assert will pass.');
//assert(1 === 2, 'this is an example of a failing assertion. 1 does not equal 2.');

/* ===========================================================================
------------------Assertions (8 points total)---------------------------------
==============================================================================
 TODO: Invoke assert twice (4 points each).
 (In other words, create two assertions like the ones
 above.)
 Use any boolean expressions that you like, but preferably
 zoo-themed.  Make one pass and one fail. In the failure message, describe why
 it failed.
*/

var elephants = false; //initial values variables
var monkeys = true;

assert(elephants, 'The elephants are false! They aren\'t here!'); //elepahnts returns false
assert(monkeys, 'The monkeys are here'); //monkeys returns true

/* ========================================================================
----------------- Meerkats (20 points total)-------------------------------
===========================================================================
 Meerkats make a sort of chirping noise (according to my 30 seconds of
 research).  We're going to translate two sentences into meerkat speech.
*/

var sentence1 = 'More food please.';
var sentence2 = 'Come over here so you can scratch my belly.';

/*
 Your goal is to replace the words in the above sentences with 'chirp' The
 assertions at the end of this section should pass when you're done.
 HINT: the 'split' method on String will be useful.
*/

// TODO: part #1: use a for loop to replace the words in sentence 1 with
// 'chirp' (10 points)

var intVar = ' '; //variable to store and build chirps
var words = sentence1.split(' '); //copies words from sentence into words array

for (var i = 0; i < words.length; i++) { //code will run once for each word in sentence1
  intVar += 'chirp '; //add a chirp to intVar
}
sentence1 = intVar.trim() + '.'; //set chirps to sentence1, remove whitespace and .
console.log(sentence1);

// TODO: part #2: use a while or do-while loop to replace the words in sentence 2
// with 'chirp' (10 points)

var chirps = '';
var j = 0;
var wordsFromSentence2 = sentence2.split(' ');

while (j < wordsFromSentence2.length) {         //counter will run through for each word in sentence2
  chirps += 'chirp ';    //add a chirp every iteration
  j++;                  //add one to counter j
}
sentence2 = chirps.trim() + '.'; //pass new chirps back to sentence2, removes whitespace and adds .
console.log(sentence2);

// Leave these assertions as-is! If they pass, your code works.
assert(sentence1 === 'chirp chirp chirp.', 'sentence 1 should have 3 chirps');
assert(sentence2 === 'chirp chirp chirp chirp chirp chirp chirp chirp chirp.',
  'sentence 2 should have 9 chirps');

/* ========================================================================
----------------- Favorite Animals (12 points)-----------------------------
===========================================================================
 The zoo is closing in 20 minutes. You still haven't seen your four favorite
 animals. You only have time for one. Use Math.random() to pick which animal
 to see next.
 Hint: read the Math.random description on MDN.
*/

var favoriteAnimals = ['elephant', 'penguin', 'eagle', 'camel'];
var nextAnimal;

// TODO: 12 points
// Assign one of your favorite animals to nextAnimal using Math.random() to pick

nextAnimal = favoriteAnimals[Math.floor((Math.random()) * favoriteAnimals.length)];
console.log(nextAnimal);
/*This finds a random number, multiplies it by the number of animals in the array
then rounds down to the nearest integer. This random number is then used to index
the array, giving a random result from the array. */

assert(nextAnimal, 'assign something to nextAnimal');

/* ===================================================================
----------------- Hungry Lion (20 points) ----------------------------
======================================================================
 As long as the lion is well-fed, he doesn't take too much heed of the
 humans that pass through. Unfortunately, the new caretaker is a little
 absent minded.

 The lion needs 4 meals per day on average to stay happy. You're going to
 figure out how many days it took before the lion decided to supplement his
 diet with the caretaker.
*/

// number of times the new caretaker fed the lion. one array entry per day

var mealsPerDay = [5, 4, 3, 6, 2, 4, 3, 4, 5, 1];
var tooHungryDay;

/*
 TODO: 20 points
 Cycle through the days in mealsPerDay. At each day, print out the average
 number of meals/day the lion got since the new caretaker started.
 tooHungryDay should receive the number of days before the lion started
 pondering protein supplements (the first day the average dips below 4
 meals)
*/

var sum = 0;
var avgMeal = 0;

for (var k = 0; k < mealsPerDay.length; k++) { //iterate through the array
  sum += mealsPerDay[k];  //add value for current day to sum
  avgMeal = sum / (k + 1); //find average from current sum over the current day
  console.log('Day ' + (k + 1) + ': ' + avgMeal + ' meals on average'); //print the average number of meals per day so far
  if (avgMeal < 4) { //lion becomes too hungry and eats keep
    tooHungryDay = k; //pass day when lion eats keeper to tooHungryDay
    console.log('Getting hangry... time to eat');
    break; //break out of for statement
  }
}

assert(tooHungryDay, 'remember to assign the answer to tooHungryDay');
assert(tooHungryDay < 10, 'the lion is too hungry before the end of the array');

/* ==================================================================
----------------- Code Style (10 points) ----------------------------
=====================================================================
 TODO: 10 points (5 points each for passing jshint and jscs)
 Now, we're going to use two tools: jshint and jscs, to check our code for
 best-practices and style consistency.

 If you haven't already, run this command in the terminal (inside of this
 directory): npm install

 Now, type
  grunt
   and it will run both jshint and jscs on your code.

 Error and warning descriptions will be printed in the terminal.
 To get full points, correct all of the errors/warnings.
*/
