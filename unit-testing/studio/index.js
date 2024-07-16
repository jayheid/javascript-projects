let launchcode = {
  organization: "nonprofit",
  executiveDirector: "Jeff",
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (num) {

    if (num / 2 === 1) {
      return "Launch!";
    } else if (num / 3 === 1) {
      return "Code!";
    } else if (num / 5 === 1) {
      return "Rocks!";
    } else if (num % 2 === 0 && num % 3 === 0 && num % 5 !== 0) {
      return "LaunchCode!";
    } else if (num % 3 === 0 && num % 5 === 0 && num % 2 !== 0) {
      return "Code Rocks!";
    } else if (num % 2 === 0 && num % 5 === 0 && num % 3 !== 0) {
      return "Launch Rocks!";
    } else if (num % 2 === 0 && num % 3 === 0 && num % 5 === 0) {
        return "LaunchCode Rocks!";
    }

  },
};

module.exports = launchcode;
