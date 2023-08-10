// Write your JavaScript code here!


window.addEventListener("load", function() {
    const launchForm = document.getElementById("launchForm");
    const formSubmitButton = document.querySelector("form");

    formSubmitButton.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoMass]");
        
        formSubmission(document, list, pilot.value, copilot.value, fuelLevel.value, cargoLevel.value);

    });


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetDecision = pickPlanet(listedPlanets)
        addDestinationInfo(document,planetDecision.name,planetDecision.diameter,planetDecision.star,planetDecision.distance,planetDecision.moons,planetDecision.image)
        console.log(pickPlanet(listedPlanets));
        // addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl)
    })
   
});
