let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   move : function() {
      return Math.floor(Math.random()*11);
   }
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   move : function() {
      return Math.floor(Math.random()*11);
   }
};


// After you have created the other object literals, add the astronautID property to each one.
let chimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   move : function() {
      return Math.floor(Math.random()*11);
   }
};

let beagleOne = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   move : function() {
      return Math.floor(Math.random()*11);
   }
};

let tardrigradeOne = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   move : function() {
      return Math.floor(Math.random()*11);
   }
};

// Create an array to hold the animal objects.

crew = [superChimpOne, salamander, chimpTwo, beagleOne, tardrigradeOne];
numRange = [1,2,3,4,5,6,7,8,9,10];

function randomSelectionRound(arr){
   let index = Math.round(Math.random()*arr.length);
   return arr[index];
 }

 // Add astronautID
 for (i=0; i < crew.length; i++){
   numSelection = randomSelectionRound(numRange);
   numRange.splice(numRange.indexOf(numSelection),1);
   crew[i].astronautID = numSelection;
 }
 
// Print out the relevant information about each animal.
for (i=0; i < crew.length; i++){
   console.log(`${crew[i].name} is a ${crew[i].species}. They are ${crew[i].age} years old and ${crew[i].mass} kilograms. Their ID is ${crew[i].astronautID}.`)
}

// Start an animal race!
function fitnessTest(arr){
   moveAttempts = [];

   // for each animal in crew
   for (i = 0; i < crew.length; i++){
      moveLength = 0;
      // run move method until move length < 20
      for (j = 0; moveLength < 20; j++){
         moveLength += crew[i].move();
      }
   
   moveAttempts.push(j);  
   }
   
   return moveAttempts;
}

crewFitnessTest = fitnessTest(crew);

for (i = 0; i < crew.length; i++){
 console.log(`${crew[i].name} took ${crewFitnessTest[i]} turns to take 20 steps.`); 
}
