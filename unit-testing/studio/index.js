let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (num) {
    outputArray = ['Launch','Code',' Rocks','!'];
    outputString = '';

    if (num % 2 === 0) {
      outputString+=outputArray[0];
    } if (num % 3 === 0) {
      outputString += outputArray[1];
    } if (num % 5 === 0) {
      outputString += outputArray[2];
    } 

    outputString += outputArray[3];
    return outputString.trim()
  },
};

module.exports = launchcode;
