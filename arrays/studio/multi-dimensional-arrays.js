const input = require("readline-sync");

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
foodCabinet = food.split(",");
equipmentCabinet = equipment.split(",");
petsCabinet = pets.split(",");
sleepAidsCabinet = sleepAids.split(",");

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userCabinet = Number(input.question("Select a cabinet (0-3)"));

console.log(userCabinet);

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
/*
if (userCabinet > cargoHold.length){
    console.log("Invalid Number");
}else{
    console.log(`${cargoHold[userCabinet]}`)
}
*/
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
userCabinet = Number(input.question("Select a cabinet (0-3)"));
let userItem = input.question("Select an item");

if (cargoHold[userCabinet].includes(userItem)){
    console.log(`Cabinet ${userCabinet} does contain ${userItem}`);
}else{
    console.log(`Cabinet ${userCabinet} does not contain ${userItem}`);
}