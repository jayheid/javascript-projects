// Declare and assign the variables below
let spaceShuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 384400;
let milesPerKilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeedMph);
console.log(typeof distanceToMarsKm);
console.log(typeof distanceToMoonKm);
console.log(typeof milesPerKilometer);

// Calculate a space mission below

// 1. Miles to Mars
let milesToMars = distanceToMarsKm * milesPerKilometer;

// 2. hours to mars
let hoursToMars = milesToMars / shuttleSpeedMph;

// 3. Days to Mars
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below
console.log(spaceShuttleName + " will take " + daysToMars + " to reach Mars");

// Calculate a trip to the moon below
// 1. Miles to Moon
let milesToMoon = distanceToMoonKm * milesPerKilometer;

// 2. hours to Moon
let hoursToMoon = milesToMoon / shuttleSpeedMph;

// 3. Days to Moon
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below
console.log(spaceShuttleName + " will take " + daysToMoon + " days to reach the Moon");



console.log(2 ** 2 ** 3 * 3);

