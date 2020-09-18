'use strict';
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
let vowelsAndConsonants = (s) => {
    // convert the string to a list of letters
        for (var i in s.split('')) { 
            // check for vowels, print them
            if (['a', 'e', 'i', 'o', 'u'].includes(s.split('')[i])) { 
                console.log(s.split('')[i]); 
            } 
        } 
        for (var i in s.split('')) {
            // if it's not a vowel, print them
            if (!(['a', 'e', 'i', 'o', 'u'].includes(s.split('')[i]))) { 
                console.log(s.split('')[i]); 
            } 
        } 
    }

vowelsAndConsonants('javascriptloops')
