// Write your helper functions here!
require('isomorphic-fetch');

const launchForm = document.getElementById("launchForm");
const formSubmitButton = document.getElementById("formSubmit");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
        let number = Number(testInput);

        if (isNaN(number) === false) {
            return 'Is a Number';
        }  else if (isNaN(number))  {
            return 'Not a Number';
        }  else if (testInput === '')   {
            return 'Empty';
        } 
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");
    
    if ((validateInput(pilot) === 'Is a Number') || (validateInput(copilot) === 'Is a Number') || (validateInput(fuelLevel) === 'Not a Number') || (validateInput(cargoLevel) === 'Not a Number'))   {
        alert('Invalid input!')
    }   else if ((validateInput(pilot) === 'Empty') || (validateInput(copilot) === 'Empty') || (validateInput(fuelLevel) === 'Empty') || (validateInput(cargoLevel) === 'Empty')){
        alert('All fields are required!')
    }   else   {
        list.style.visibility = 'visible';
    }
    
    if (list.style.visibility === 'visible')    {
        pilotStatus.innerHTML = 
            `${pilot} Ready`;
        copilotStatus.innerHTML = 
            `${copilot} Ready`;
        if (Number(fuelLevel) <= 10000)  {
            fuelStatus.innerHTML =
                `Fuel level(L) is NOT high enough for launch`;
            launchStatus.innerHTML = 
                `Shuttle NOT Ready for Launch`;
            launchStatus.style.color = '#C7254E';
        } else if (Number(cargoLevel) >= 10000) {
            cargoStatus.innerHTML = 
                `Cargo mass(kg) is NOT low enough for launch`;
            launchStatus.innerHTML = 
                `Shuttle is NOT Ready for Launch`;
            launchStatus.style.color = '#C7254E';
        } else {
            launchStatus.innerHTML =
                `Shuttle is Ready for Launch`;
            launchStatus.style.color = '#419F6A';
        }
    }   
}   



{/* <h2 id="launchStatus" data-testid="launchStatus">Awaiting Information Before Launch</h2>
            <div  id="faultyItems" data-testid="faultyItems">
                <ol>
                    <li id="pilotStatus" data-testid="pilotStatus">Pilot Ready</li>
                    <li id="copilotStatus" data-testid="copilotStatus">Co-pilot Ready</li>
                    <li id="fuelStatus" data-testid="fuelStatus">Fuel level high enough for launch</li>
                    <li id="cargoStatus" data-testid="cargoStatus">Cargo mass low enough for launch</li>
                </ol>
            </div> */}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then( function(data)    {
                console.log(data);
            });
        });

    return planetsReturned;
}
console.log(myFetch());

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
