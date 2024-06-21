// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = 'ready';
let astronautMassKg = 80.7;
let crewMassKg = astronautCount * astronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelcius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftoff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7 && astronautStatus === 'ready' && totalMassKg < maximumMassLimit && (fuelTempCelcius >= minimumFuelTemp && fuelTempCelcius <= maximumFuelTemp) && fuelLevel === "100%" && weatherStatus === "clear") {
    console.log('pass');}

if (astronautCount > 7){
    preparedForLiftoff = false;
}

// add logic below to verify all astronauts are ready

if (astronautStatus !== 'ready'){
    preparedForLiftoff = false;
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg >= maximumMassLimit){
    preparedForLiftoff = false
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelcius < -300 || fuelTempCelcius > -150){
    preparedForLiftoff = false;
}

// add logic below to verify the fuel level is at 100%
if (fuelLevel !== "100%"){
    preparedForLiftoff = false;
}

// add logic below to verify the weather status is clear
if (weatherStatus !== "clear"){
    preparedForLiftoff = false;
}

// Verify shuttle launch can proceed based on above conditions
if (preparedForLiftoff = true){
    console.log("All systems are a go! Initiating space shuttle launch sequence.");
    console.log(`Date: ${date}`);
    console.log(`Time: ${time}`);
    console.log(`Astronaut Count: ${astronautCount}`);
    console.log(`Crew Mass: ${fuelMassKg}`);
    console.log(`Shuttle Mass: ${shuttleMassKg}`);
    console.log(`Total Mass: ${totalMassKg}`);
    console.log(`Fuel Temperature: ${fuelTempCelcius}`);
    console.log(`Weather Status: ${weatherStatus}`);
    console.log("Have a safe trip astronauts!")
}else{
    console.log("Launch Operations Shut Down")
}

///