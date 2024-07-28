function init() {
  const missionAbort = document.getElementById("abortMission");
  const button = document.getElementById("liftoffButton");
  const paragraph = document.getElementById("statusReport");

  // Put your code for the exercises here.
  button.addEventListener("click", function () {
    document.getElementById("statusReport").innerHTML =
      "Houston, we have liftoff!";
  });

  missionAbort.addEventListener("mouseover", function () {
    document.getElementById("abortMission").style.backgroundColor = "red";
  });

  missionAbort.addEventListener("mouseleave", function () {
    document.getElementById("abortMission").style.backgroundColor = "";
  });

  missionAbort.addEventListener("click", function () {
    let response = window.confirm(
      "Are you sure you want to abort the mission?"
    );
    if (response) {
      document.getElementById("statusReport").innerHTML =
        "Mission aborted! Space shuttle returning home";
    }
  });
}

window.addEventListener("load", init);
