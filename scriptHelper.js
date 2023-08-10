// Write your helper functions here!
require("isomorphic-fetch");

const launchForm = document.getElementById("launchForm");
const formSubmitButton = document.getElementById("formSubmit");

function addDestinationInfo(
  document,
  name,
  diameter,
  star,
  distance,
  moons,
  imageUrl
) {
  // Here is the HTML formatting for our mission target div.
  let result = document.getElementById("missionTarget");
  result.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {
  let number = Number(testInput);

  if (testInput === "") {
    return "Empty";
  } else if (isNaN(number)) {
    return "Not a Number";
  } else if (isNaN(number) === false)  {
    return "Is a Number";
  }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
  const pilotStatus = document.getElementById("pilotStatus");
  const copilotStatus = document.getElementById("copilotStatus");
  const fuelStatus = document.getElementById("fuelStatus");
  const cargoStatus = document.getElementById("cargoStatus");
  const launchStatus = document.getElementById("launchStatus");

  if (
    validateInput(pilot) === "Is a Number" ||
    validateInput(copilot) === "Is a Number" ||
    validateInput(fuelLevel) === "Not a Number" ||
    validateInput(cargoLevel) === "Not a Number"
  ) {
    alert("Invalid input!");
  } else if (
    validateInput(pilot) === "Empty" ||
    validateInput(copilot) === "Empty" ||
    validateInput(fuelLevel) === "Empty" ||
    validateInput(cargoLevel) === "Empty"
  ) {
    alert("All fields are required!");
  } else {
    list.style.visibility = "visible";
    pilotStatus.innerHTML = `${pilot} Ready`;
    copilotStatus.innerHTML = `${copilot} Ready`;
    if (Number(fuelLevel) <= 10000 && Number(cargoLevel) >= 10000) {
      fuelStatus.innerHTML = `Fuel level(L) is NOT high enough for launch`;
      cargoStatus.innerHTML = `Cargo mass(kg) is NOT low enough for launch`;
      launchStatus.innerHTML = `Shuttle NOT Ready for Launch`;
      launchStatus.style.color = "#C7254E";
    } else if (Number(fuelLevel) <= 10000 && Number(cargoLevel) <= 10000) {
      fuelStatus.innerHTML = `Fuel level(L) is NOT high enough for launch`;
      cargoStatus.innerHTML = `Cargo mass(kg) is low enough for launch`;
      launchStatus.innerHTML = `Shuttle NOT Ready for Launch`;
      launchStatus.style.color = "#C7254E";
    } else if (Number(fuelLevel) >= 10000 && Number(cargoLevel) >= 10000) {
      fuelStatus.innerHTML = `Fuel level(L) is high enough for launch`;
      cargoStatus.innerHTML = `Cargo mass(kg) is NOT low enough for launch`;
      launchStatus.innerHTML = `Shuttle NOT Ready for Launch`;
      launchStatus.style.color = "#C7254E";
    } else {
      fuelStatus.innerHTML = `Fuel level(L) is high enough for launch`;
      cargoStatus.innerHTML = `Cargo mass(kg) is low enough for launch`;
      launchStatus.innerHTML = `Shuttle is Ready for Launch`;
      launchStatus.style.color = "#419F6A";
    }
  }
}

async function myFetch() {
  let planetsReturned;

  planetsReturned = await fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    return response.json();
  });

  return planetsReturned;
}

function pickPlanet(planets) {
  let planetIndex = Math.floor(Math.random() * planets.length);
  return planets[planetIndex];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
