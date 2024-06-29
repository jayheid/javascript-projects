//Create an anonymous function and set it equal to a variable.

/* Your function should:
a) If passed a number, return the tripled value.
b) If passed a string, return the string “ARRR!”
c) Be sure to test your function before moving on the next part. 
*/
let anonFunction = function(x){
    if(typeof(x) === 'number'){
        return x*3;
    }
    else if(typeof(x) === 'string'){
        return "ARRR!";
    }
    else {
        return x;
    }
}

console.log(anonFunction(3));
console.log(anonFunction('string'));
console.log(anonFunction(true));

/* Add to your code! Use your fuction and the map method to change an array  as follows:
a) Triple any the numbers.
b) Replace any strings with “ARRR!”
c) Print the new array to confirm your work.
*/

let arr = ['Elocution', 21, 'Clean teeth', 100];

console.log(arr.map(anonFunction));

