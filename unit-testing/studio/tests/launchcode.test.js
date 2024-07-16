// launchcode.test.js code:
const launchcode = require("../index.js");

describe("Testing launchcode", function () {
  test("check organization type", function () {
    expect(launchcode.organization).toEqual("nonprofit");
  });

  test("check executive director name", function () {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("check percentage cool employees", function () {
    expect(launchcode.percentageCoolEmployees).toEqual(100);
  });

  test("check programs offered", function () {
    expect(launchcode.programsOffered).toEqual([
      "Web Development",
      "Data Analysis",
      "Liftoff",
    ]);
  });

  test("check launch output method for number only divisible by 2", function () {
    expect(launchcode.launchOutput(2)).toEqual("Launch!");
  });

  test("check launch output method for number only divisible by 3", function () {
    expect(launchcode.launchOutput(3)).toEqual("Code!");
  });

  test("check launch output method for number only divisible by 5", function () {
    expect(launchcode.launchOutput(5)).toEqual("Rocks!");
  });

  test("check launch output method for number only divisible by 2 and 3", function () {
    expect(launchcode.launchOutput(6)).toEqual("LaunchCode!");
  });

  test("check launch output method for number only divisible by 3 and 5", function () {
    expect(launchcode.launchOutput(15)).toEqual("Code Rocks!");
  });
  
  test("check launch output method for number only divisible by 2 and 5", function () {
    expect(launchcode.launchOutput(10)).toEqual("Launch Rocks!");
  });

  test("check launch output method for number only divisible by 2, 3 and 5", function () {
    expect(launchcode.launchOutput(30)).toEqual("LaunchCode Rocks!");
  });


});
