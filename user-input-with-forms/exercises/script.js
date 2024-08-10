//Code Your Solution Below
// Steps to add validation
// 1. Add event handler for window "load" event
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  // 2. Add event handler for the form "submit" event
  form.addEventListener("submit", function (event) {
    // 3. Retrieve input values that need to be validated from the DOM
    let testName = document.querySelector("input[name=testName");
    let testDate = document.querySelector("input[name=testDate]");
    let rocketType = document.querySelector("select[name=rocketType]");
    let boosterCount = document.querySelector("input[name=boosterCount]");
    let windRating = document.querySelectorAll("input[name=windRating]");
    let productionServers = document.querySelector(
      "input[name=productionServers]"
    );
    conditionArray = [];
    conditionArray.push(
      testName.value != "",
      testDate.value != "",
      rocketType.value != "",
      boosterCount.value != "",
      windRating[0].checked || windRating[1].checked || windRating[2].checked,
      productionServers.checked
    );
    console.log(conditionArray);
    // 4. Within the submit handler, check input values using conditional statements
    if (conditionArray.includes(false)) {
      alert("All fields are required!");
      event.preventDefault();
    }
  });
});
