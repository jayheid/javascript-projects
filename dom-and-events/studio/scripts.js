// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
  let takeoff = this.document.getElementById("takeoff");
  let flightStatus = this.document.getElementById("flightStatus");
  let shuttleBackground = this.document.getElementById("shuttleBackground");
  let spaceShuttleHeight = this.document.getElementById("spaceShuttleHeight");
  let land = this.document.getElementById("landing");
  let missionAbort = this.document.getElementById("missionAbort");
  let rocket = this.document.getElementById("rocket");
  let rocketPosX = 0;
  let rocketPosY = 0;

  takeoff.addEventListener("click", function () {
    let confirmed = window.confirm(
      "Confirm that the shuttle is ready for liftoff."
    );

    if (confirmed) {
      flightStatus.innerHTML = "Shuttle in flight";
      shuttleBackground.style.backgroundColor = "blue";
      spaceShuttleHeight.innerHTML =
        Number(spaceShuttleHeight.innerHTML) + 10000;
    }
  });

  land.addEventListener("click", function () {
    window.alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor = "green";
    spaceShuttleHeight.innerHTML = 0;
  });

  missionAbort.addEventListener("click", function () {
    let confirmed = window.confirm(
      "Confirm that you want to abort the mission."
    );
    if (confirmed) {
      flightStatus.innerHTML = "Mission aborted.";
      shuttleBackground.style.backgroundColor = "green";
      shuttleBackground.style.height;
    }
  });

  // event delegation
  document.addEventListener("click", function (event) {
    let backgroundWidth = parseInt(
      window.getComputedStyle(shuttleBackground).getPropertyValue("width")
    );

    if (
      event.target.id === "left" &&
      rocketPosX > -(backgroundWidth / 2 - 35)
    ) {
      rocketPosX -= 10;
      rocket.style.marginLeft = rocketPosX + "px";
    }
    if (event.target.id === "right" && rocketPosX < backgroundWidth / 2 - 35) {
      rocketPosX += 10;
      rocket.style.marginLeft = rocketPosX + "px";
    }
    if (event.target.id === "up" && spaceShuttleHeight.innerHTML < 250000) {
      rocketPosY += 10;
      rocket.style.marginBottom = rocketPosY + "px";
      spaceShuttleHeight.innerHTML =
        Number(spaceShuttleHeight.innerHTML) + 10000;
    }
    if (event.target.id === "down" && spaceShuttleHeight.innerHTML > 0) {
      rocketPosY -= 10;
      rocket.style.marginBottom = rocketPosY + "px";
      spaceShuttleHeight.innerHTML =
        Number(spaceShuttleHeight.innerHTML) - 10000;
    }
  });
});
