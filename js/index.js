"use strict";
// variables 
var lightModeBtn                                      = document.getElementById("lightModeBtn");
var darkModeBtn                                       = document.getElementById("darkModeBtn");
let intitial                                          = "Cairo";
const findBtn                                         = document.querySelector("#findBtn");
const searchInput                                     = document.querySelector("#searchInput");
const root                                            = document.querySelector(':root');
//Today
const todayName                                       = document.querySelector("#todayName");
const todayDate                                       = document.querySelector("#todayDate");
const cuurrentLocation                                = document.querySelector("#location");
const todayTemp                                       = document.querySelector("#todayTemp");
const todayIcon                                       = document.querySelector("#todayIcon");
const todayFeels                                      = document.querySelector("#todayFeels");
const lastRefresh                                     = document.querySelector("#lastRefresh");
const todayHumidity                                   = document.querySelector("#todayHumidity");
const todayWindSpeed                                  = document.querySelector("#todayWindSpeed");
const todayWindDirection                              = document.querySelector("#todayWindDirection");
// Daily
const  tomorrow                                       = document.querySelector("#tomorrow");
const  tomorrowIcon                                   = document.querySelector("#tomorrowIcon");
const  tomorrowTemp                                   = document.querySelector("#tomorrowTemp");
const  tomorrowTempFeels                              = document.querySelector("#tomorrowTempFeels");
// secondDay
const  secondDay                                      = document.querySelector("#secondDay");
const  secondDayIcon                                  = document.querySelector("#secondDayIcon");
const  secondDayTemp                                  = document.querySelector("#secondDayTemp");
const  secondDayTempFeels                             = document.querySelector("#secondDayTempFeels");
// thirdDay=
const  thirdDay                                       = document.querySelector("#thirdDay");
const  thirdDayIcon                                   = document.querySelector("#thirdDayIcon");
const  thirdDayTemp                                   = document.querySelector("#thirdDayTemp");
const  thirdDayTempFeels                              = document.querySelector("#thirdDayTempFeels");
// fourthDay=
const  fourthDay                                      = document.querySelector("#fourthDay");
const  fourthDayIcon                                  = document.querySelector("#fourthDayIcon");
const  fourthDayTemp                                  = document.querySelector("#fourthDayTemp");
const  fourthDayTempFeels                             = document.querySelector("#fourthDayTempFeels");
// fifthDay=
const  fifthDay                                       = document.querySelector("#fifthDay");
const  fifthDayIcon                                   = document.querySelector("#fifthDayIcon");
const  fifthDayTemp                                   = document.querySelector("#fifthDayTemp");
const  fifthDayTempFeels                              = document.querySelector("#fifthDayTempFeels");
// sixthHour
const  sixthDay                                       = document.querySelector("#sixthDay");
const  sixthDayIcon                                   = document.querySelector("#sixthDayIcon");
const  sixthDayTemp                                   = document.querySelector("#sixthDayTemp");
const  sixthDayTempFeels                              = document.querySelector("#sixthDayTempFeels");
//Tommorrow
const tomorrowName                                    = document.querySelector("#tomorrowName");
const tomorrowSmallTemp                               = document.querySelector("#tomorrowSmallTemp");
//dayAfterTommorrow
const dayAfterTommorrowName                           = document.querySelector("#dayAfterTommorrowName");
const dayAfterTommorrowIcon                           = document.querySelector("#dayAfterTommorrowIcon");
const dayAfterTommorrowTemp                           = document.querySelector("#dayAfterTommorrowTemp");
const dayAfterTommorrowSmallTemp                      = document.querySelector("#dayAfterTommorrowSmallTemp");
const dayAfterTommorrowFeels                          = document.querySelector("#dayAfterTommorrowFeels");
// Helper Functions
lightModeBtn.addEventListener("click",function(){
    changeColorModeLight();
})
darkModeBtn.addEventListener("click",function(){
    changeColorModeDark();
})
function showHiddenItem(item){
    item.classList.replace("d-none","d-block");
}
function hideItem(item){
    item.classList.replace("d-block","d-none");
}
function changeColorModeLight() {
    document.querySelector("header .layer").style.backgroundColor="#f3f4f6";
    document.querySelector(".form-control").style.backgroundColor="#f3f4f6";
    document.querySelector("#today").style.backgroundColor="#fcfcfc";
    document.querySelector("#today").style.color="black";
    Array.from(document.querySelectorAll("h2")).forEach(e => {e.style.color="black";});
    Array.from( document.querySelectorAll("header .layer .forecast-table .forecast")).forEach(e => {e.style.color="black";e.style.backgroundColor="#fcfcfc"});
    hideItem(lightModeBtn);
    showHiddenItem(darkModeBtn);
}
function changeColorModeDark() {
    document.querySelector("header .layer").style.backgroundColor="#121212";
    document.querySelector(".form-control").style.backgroundColor="#121212";
    document.querySelector("#today").style.backgroundColor="#161616";
    document.querySelector("#today").style.color="white";
    Array.from(document.querySelectorAll("h2")).forEach(e => {e.style.color="white";});
    Array.from( document.querySelectorAll("header .layer .forecast-table .forecast")).forEach(e => {e.style.color="white";e.style.backgroundColor="#161616"});
    hideItem(darkModeBtn);
    showHiddenItem(lightModeBtn);
}
function getDayNAme(args) {
    switch(args.getDay()){
        case 0                                        : 
            return "Sunday";
        case 1                                        : 
            return "Monday";
        case 2                                        : 
            return "Tuesday";
        case 3                                        : 
            return "Wenesday";
        case 4                                        : 
            return "Thursday";
        case 5                                        : 
            return "Friday";
        case 6                                        : 
            return "Saturday";
    }
}
function getMonthName(args) {
    const months                                      = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[args.getMonth()];
}
function getWindDirection(args) {
    switch(args){
        case "N"                                      : 
            return "North"
        case "NNE"                                    : 
            return "North-East"
        case "NE"                                     : 
            return "North-NorthEast"
        case "ENE"                                    : 
            return "East-NorthEast"
        case "E"                                      : 
            return "East"
        case "ESEE"                                   : 
            return "East-SouthEast"
        case "SE"                                     : 
            return "South-East"
        case "SSE"                                    : 
            return "South-SouthEast"
        case "S"                                      : 
            return "South"
        case "SSW"                                    : 
            return "South-SouthWest"
        case "SW"                                     : 
            return "South-West"
        case "WSW"                                    : 
            return "West-SouthWest"
        case "W"                                      : 
            return "West"
        case "WNW"                                    : 
            return "West-West"
        case "NW"                                     : 
            return "North-West"
        case "NNW"                                    : 
            return "North-NorthWest"
    }
}
async function getGeoCode(location){
    let res                                           = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=40eeb95d0c3ff14a5e12d14a938e0f33`);
    if (res.ok && 400 != res.status) {
        intitial                                      = location;
    let finalRes                                      = await res.json();
    let lat                                           = finalRes[0].lat;
    let lon                                           = finalRes[0].lon;
    cuurrentLocation.innerText                        = `${finalRes[0].name}`;
    getforecast(lat,lon);
}
}
//Functions
async function getforecast(lat,lon) {
    let res                                           = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=40eeb95d0c3ff14a5e12d14a938e0f33&units=metric`);
    if (res.ok && 400 != res.status) {
        intitial                                      = location;
    let finalRes                                      = await res.json();
// TODAY 
    let d                                             = new Date();
    todayName.innerText                               = `${getDayNAme(d)},`;
    todayDate.innerText                               = ` ${getMonthName(d)} ${d.getDate()}`;
    todayTemp.innerHTML                               = `${finalRes.daily[0].temp.max}<sup>o</sup>C`;
    todayFeels.innerText                              = `${finalRes.daily[0].weather[0].description}`;
    let currentHours                                  = d.getHours();
    currentHours                                      = ("0"+currentHours).slice(-2);
    let currentMinutes                                = d.getMinutes();
    currentMinutes                                    = ("0"+currentMinutes).slice(-2);
    lastRefresh.innerText                             = `${currentHours}:${currentMinutes}`;
    let uvi                                           = Math.ceil(finalRes.daily[0].uvi);
    let uviVal                                        = '#uv'+ uvi.toString()
    let uvi2                                          = document.querySelector(uviVal).style.color="yellow"
    todayWindSpeed.innerText                          = `${finalRes.daily[0].wind_speed}`
    const secSunrise                                  = `${finalRes.daily[0].sunrise}`;
    let date                                          = new Date(secSunrise * 1000);
    const timestrSunrise                              = date.toLocaleTimeString();
    const sunrise                                     = document.querySelector("#sunrise").innerText=`${timestrSunrise}`;
    const secSunset                                   = `${finalRes.daily[0].sunset}`;
    date                                              = new Date(secSunset * 1000);
    const timestrSunset                               = date.toLocaleTimeString();
    const sunset                                      = document.querySelector("#sunset").innerText=`${timestrSunset}`;
    const visibility                                  = document.querySelector("#visibility");
    visibility.innerText                              = `${finalRes.current.visibility/1000}`
// // TOMORROW
let d1                                                = new Date(d);
d1.setDate(d1.getDate()+1)
    tomorrow.innerText                                = `${getDayNAme(d1)}`;
    tomorrowTemp.innerHTML                            = `${finalRes.daily[1].temp.max}<sup>o</sup>C`;
    tomorrowTempFeels.innerText                       = `${finalRes.daily[1].feels_like.day}`;
//After Tommorrow
let d2                                                = new Date(d1);
d2.setDate(d2.getDate()+1)
secondDay.innerText                                   = `${getDayNAme(d2)}`;
secondDayTemp.innerHTML                               = `${finalRes.daily[2].temp.max}<sup>o</sup>C`;
secondDayTempFeels.innerText                          = `${finalRes.daily[2].feels_like.day}`;
 //Third Day
let d3                                                = new Date(d2);
d3.setDate(d3.getDate()+1)
thirdDay.innerText                                    = `${getDayNAme(d3)}`;
thirdDayTemp.innerHTML                                = `${finalRes.daily[3].temp.max}<sup>o</sup>C`;
thirdDayTempFeels.innerText                           = `${finalRes.daily[3].feels_like.day}`;
 //Fourth Day
 let d4                                               = new Date(d3);
 d4.setDate(d4.getDate()+1)
 fourthDay.innerText                                  = `${getDayNAme(d4)}`;
 fourthDayTemp.innerHTML                              = `${finalRes.daily[4].temp.max}<sup>o</sup>C`;
 fourthDayTempFeels.innerText                         = `${finalRes.daily[4].feels_like.day}`;
  //Fifth Day
  let d5                                              = new Date(d4);
  d5.setDate(d5.getDate()+1)
  fifthDay.innerText                                  = `${getDayNAme(d5)}`;
  fifthDayTemp.innerHTML                              = `${finalRes.daily[5].temp.max}<sup>o</sup>C`;
  fifthDayTempFeels.innerText                         = `${finalRes.daily[5].feels_like.day}`;
    //Sixth Day
    let d6                                            = new Date(d5);
    d6.setDate(d6.getDate()+1)
    sixthDay.innerText                                = `${getDayNAme(d6)}`;
    sixthDayTemp.innerHTML                            = `${finalRes.daily[6].temp.max}<sup>o</sup>C`;
    sixthDayTempFeels.innerText                       = `${finalRes.daily[6].feels_like.day}`;
}}
getGeoCode(intitial?intitial                          : cairo);
//Event Listeners
searchInput.addEventListener("change", function () {    // change saves the last entered location
    getGeoCode(searchInput.value?searchInput.value    : cairo);
});

