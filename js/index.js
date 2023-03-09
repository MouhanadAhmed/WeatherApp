"use strict";
// variables 
let intitial="Cairo";
let findBtn =document.querySelector("#findBtn");
let searchInput =document.querySelector("#searchInput");
//Today
let todayName =document.querySelector("#todayName");
let todayDate =document.querySelector("#todayDate");
let cuurrentLocation =document.querySelector("#location");
let todayTemp =document.querySelector("#todayTemp");
let todayIcon =document.querySelector("#todayIcon");
let todayFeels =document.querySelector("#todayFeels");
let todayHumidity =document.querySelector("#todayHumidity");
let todayWindSpeed =document.querySelector("#todayWindSpeed");
let todayWindDirection =document.querySelector("#todayWindDirection");
//Tommorrow
let tomorrowName =document.querySelector("#tomorrowName");
let tomorrowIcon =document.querySelector("#tomorrowIcon");
let tomorrowTemp =document.querySelector("#tomorrowTemp");
let tomorrowSmallTemp =document.querySelector("#tomorrowSmallTemp");
let tomorrowFeels =document.querySelector("#tomorrowFeels");
//dayAfterTommorrow
let dayAfterTommorrowName =document.querySelector("#dayAfterTommorrowName");
let dayAfterTommorrowIcon =document.querySelector("#dayAfterTommorrowIcon");
let dayAfterTommorrowTemp =document.querySelector("#dayAfterTommorrowTemp");
let dayAfterTommorrowSmallTemp =document.querySelector("#dayAfterTommorrowSmallTemp");
let dayAfterTommorrowFeels =document.querySelector("#dayAfterTommorrowFeels");
// Helper Functions
function getDayNAme(args) {
    switch(args.getDay()){
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wenesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
}
function getMonthName(args) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[args.getMonth()];
}
function getWindDirection(args) {
    switch(args){
        case "N":
            return "North"
        case "NNE":
            return "North-East"
        case "NE":
            return "North-NorthEast"
        case "ENE":
            return "East-NorthEast"
        case "E":
            return "East"
        case "ESEE":
            return "East-SouthEast"
        case "SE":
            return "South-East"
        case "SSE":
            return "South-SouthEast"
        case "S":
            return "South"
        case "SSW":
            return "South-SouthWest"
        case "SW":
            return "South-West"
        case "WSW":
            return "West-SouthWest"
        case "W":
            return "West"
        case "WNW":
            return "West-West"
        case "NW":
            return "North-West"
        case "NNW":
            return "North-NorthWest"
    }
}
async function getGeoCode(location){
    let res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=40eeb95d0c3ff14a5e12d14a938e0f33`);
    if (res.ok && 400 != res.status) {
        intitial=location;
    console.log(intitial);

    let finalRes = await res.json();
    let lat = finalRes[0].lat;
    let lon = finalRes[0].lon;
    console.log(lon);
    cuurrentLocation.innerText=`${finalRes[0].name}`;
    getforecast(lat,lon);
}
}
//Functions
async function getforecast(lat,lon) {
    // loc?loc:"cairo";
    
    let res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=40eeb95d0c3ff14a5e12d14a938e0f33&units=metric`);
    if (res.ok && 400 != res.status) {
        intitial=location;
    console.log(intitial);

    let finalRes = await res.json();
// TODAY 
    // let d = new Date(finalRes.forecast.date);
    // todayName.innerText=`${getDayNAme(d)}`;
    // todayDate.innerText=`${d.getDate()} ${getMonthName(d)}`;
    todayTemp.innerHTML=`${finalRes.daily[0].temp.max}<sup>o</sup>C`;
    // todayIcon.setAttribute("src",`${finalRes.current.condition.icon}`);
    todayFeels.innerText=`${finalRes.daily[0].weather[0].description}`;
//     todayHumidity.innerHTML=`<img   src="/images/icon-umberella.png" alt="icon-umberella"> ${finalRes[0].humidity}%`;
//     todayWindSpeed.innerHTML=`<img  src="images/icon-wind.png" alt="icon-wind"> ${finalRes[0].wind_speed  } km/h`;
//     todayWindDirection.innerHTML=`<img  src="images/icon-compass.png" alt="icon-compass"> ${getWindDirection(finalRes.current.wind_dir)}`;
// // TOMORROW
    // let d1 = finalRes.forecast.forecastday[1];
    // let tomorrow = new Date(d1.date);
    // tomorrowName.innerText=`${getDayNAme(tomorrow)}`;
    // tomorrowIcon.setAttribute("src",`${d1.day.condition.icon}`);
    // tomorrowTemp.innerHTML=`${d1.day.maxtemp_c}<sup>o</sup>C`;
    // tomorrowSmallTemp.innerHTML=`${d1.day.mintemp_c}<sup>o</sup>`;
    // tomorrowFeels.innerText=`${d1.day.condition.text}`;
//After Tommorrow
    // let d2 = finalRes.forecast.forecastday[2];
    // let dayAfterTommorrow = new Date(d2.date);
    // dayAfterTommorrowName.innerText=`${getDayNAme(dayAfterTommorrow)}`;
    // dayAfterTommorrowIcon.setAttribute("src",`${d2.day.condition.icon}`);
    // dayAfterTommorrowTemp.innerHTML=`${d2.day.maxtemp_c}<sup>o</sup>C`;
    // dayAfterTommorrowSmallTemp.innerHTML=`${d2.day.mintemp_c}<sup>o</sup>`;
    // dayAfterTommorrowFeels.innerText=`${d2.day.condition.text}`;
    // console.log(d2.day.condition.text,"day2"); 
}}
// getforecast(intitial);  //  intitial value
getGeoCode(intitial?intitial:cairo);
//Event Listeners
// console.log(searchInput.getAttribute("Value"));
// searchInput.setAttribute("oninput","getforecast(this.value)");  // working with no intitial value
searchInput.addEventListener("change", function () {    // change saves the last entered location
    //  getforecast(searchInput.value?searchInput.value:intitial);
    getGeoCode(searchInput.value?searchInput.value:cairo);
});

// (async function() {
//     console.log(searchInput.value);
//     await getforecast(searchInput.value)();
// })();
