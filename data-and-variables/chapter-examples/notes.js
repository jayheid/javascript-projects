// Testing variable scope
let day = "Thursday";
day = 32.5;
day = 19;
console.log(day);

// Testing TypeOf method
console.log(typeof(day));


// Testing Order of Operations
console.log(16-2*5/3+1);

console.log(1+5%3);

console.log(2**2**3*3)

console.log(true);
// Ch. 5
console.log(typeof(Boolean("true")));
console.log(Boolean('LaunchCode'));
console.log(Boolean('Launch Code'));
console.log(Boolean(' '));
console.log(Boolean('')); // Empty string evalutes to false


console.log(5==5);
console.log(5==6);

console.log(4 == "4"); // Loose Equality

console.log(7 > 5 && 5 > 3);
console.log(7 > 5 && 2 > 3);
console.log(2 > 3 && 'dog' === 'cat');

console.log(4 < 3 || 2 < 3);

let billHasBeenPaid = true;

if (!billHasBeenPaid){
    console.log("Your bill is due soon!")
} else {
    console.log("Your payments are up to date.")
}

let a = 7;
if (a % 2 === 1) {
   console.log("Launch");
} else if (a > 5) {
   console.log("Code");
} else {
   console.log("LaunchCode");
}

let num = 7;

if (num % 2 === 0) {
    if (num % 2 === 1) {
        console.log("odd");
    }
}

console.log(3+4 === 7);



