function calculateTicks() {
  var inputTicks = document.getElementById("tickInput").value;
  if (isNaN(inputTicks)) {
    document.getElementById("resultHours").innerText = "Error: Please enter a number";
    document.getElementById("resultDays").innerText = "";
  } else {
    var resultTicksToHours = inputTicks / 20 / 60 / 60;
    resultTicksToHours = resultTicksToHours.toFixed(3);
    var hours = Math.floor(resultTicksToHours);
    var minutes = Math.floor((resultTicksToHours - hours) * 60);
    var seconds = Math.floor(((resultTicksToHours - hours) * 60 - minutes) * 60);
    var formattedResult = "Result is " + resultTicksToHours + " hours, or " + hours + " hours, " + minutes + " minutes and " + seconds + " seconds";
    document.getElementById("resultHoursFormatted").innerText = formattedResult;
    var resultHoursToDays = resultTicksToHours * 60 / 20;
    resultHoursToDays = resultHoursToDays.toFixed(3);
    document.getElementById("resultDays").innerText = "Result in days: " + resultHoursToDays + " minecraft days";
  }
}

  function updateNetherCoords() {
    var overworldX = document.getElementsByClassName("input-field")[0].value;
    var overworldY = document.getElementsByClassName("input-field")[1].value;
    var overworldZ = document.getElementsByClassName("input-field")[2].value;
  
    var netherX = overworldX / 8;
    var netherY = overworldY;
    var netherZ = overworldZ / 8;
  
    document.getElementById("nether-x").value = netherX;
    document.getElementById("nether-y").value = netherY;
    document.getElementById("nether-z").value = netherZ;
  }
  
  function updateOverworldCoords() {
    var netherX = document.getElementById("nether-x").value;
    var netherY = document.getElementById("nether-y").value;
    var netherZ = document.getElementById("nether-z").value;
  
    var overworldX = netherX * 8;
    var overworldY = document.getElementsByClassName("input-field")[1].value;
    var overworldZ = netherZ * 8;
  
    document.getElementsByClassName("input-field")[0].value = overworldX;
    document.getElementsByClassName("input-field")[1].value = overworldY;
    document.getElementsByClassName("input-field")[2].value = overworldZ;
  }