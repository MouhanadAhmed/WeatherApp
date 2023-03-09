"use strict";
// variables 
let intitial="Cairo";
const findBtn =document.querySelector("#findBtn");
const searchInput =document.querySelector("#searchInput");
//Today
const todayName =document.querySelector("#todayName");
const todayDate =document.querySelector("#todayDate");
const cuurrentLocation =document.querySelector("#location");
const todayTemp =document.querySelector("#todayTemp");
const todayIcon =document.querySelector("#todayIcon");
const todayFeels =document.querySelector("#todayFeels");
const todayHumidity =document.querySelector("#todayHumidity");
const todayWindSpeed =document.querySelector("#todayWindSpeed");
const todayWindDirection =document.querySelector("#todayWindDirection");
// Hourly 
const  nextHour=document.querySelector("#nextHour");
const  nextHourIcon=document.querySelector("#nextHourIcon");
const  nextHourTemp=document.querySelector("#nextHourTemp");
const  nextHourTempFeels=document.querySelector("#nextHourTempFeels");
// secondHour
const  secondHour=document.querySelector("#secondHour");
const  secondHourIcon=document.querySelector("#secondHourIcon");
const  secondHourTemp=document.querySelector("#secondHourTemp");
const  secondHourTempFeels=document.querySelector("#secondHourTempFeels");
// thirdHour
const  thirdHour=document.querySelector("#thirdHour");
const  thirdHourIcon=document.querySelector("#thirdHourIcon");
const  thirdHourTemp=document.querySelector("#thirdHourTemp");
const  thirdHourTempFeels=document.querySelector("#thirdHourTempFeels");
// fourthHour
const  fourthHour=document.querySelector("#fourthHour");
const  fourthHourIcon=document.querySelector("#fourthHourIcon");
const  fourthHourTemp=document.querySelector("#fourthHourTemp");
const  fourthHourTempFeels=document.querySelector("#fourthHourTempFeels");
// fifthHour
const  fifthHour=document.querySelector("#fifthHour");
const  fifthHourIcon=document.querySelector("#fifthHourIcon");
const  fifthHourTemp=document.querySelector("#fifthHourTemp");
const  fifthHourTempFeels=document.querySelector("#fifthHourTempFeels");
// sixthHour
const  sixthHour=document.querySelector("#sixthHour");
const  sixthHourIcon=document.querySelector("#sixthHourIcon");
const  sixthHourTemp=document.querySelector("#sixthHourTemp");
const  sixthHourTempFeels=document.querySelector("#sixthHourTempFeels");
//Tommorrow
const tomorrowName =document.querySelector("#tomorrowName");
const tomorrowIcon =document.querySelector("#tomorrowIcon");
const tomorrowTemp =document.querySelector("#tomorrowTemp");
const tomorrowSmallTemp =document.querySelector("#tomorrowSmallTemp");
const tomorrowFeels =document.querySelector("#tomorrowFeels");
//dayAfterTommorrow
const dayAfterTommorrowName =document.querySelector("#dayAfterTommorrowName");
const dayAfterTommorrowIcon =document.querySelector("#dayAfterTommorrowIcon");
const dayAfterTommorrowTemp =document.querySelector("#dayAfterTommorrowTemp");
const dayAfterTommorrowSmallTemp =document.querySelector("#dayAfterTommorrowSmallTemp");
const dayAfterTommorrowFeels =document.querySelector("#dayAfterTommorrowFeels");
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
//Functions
async function getforecast(location) {
    // loc?loc:"cairo";
    
    let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=3a76dfdfbf894d8f973101128231802&q=${location}&days=3&aqi=no`);
    if (res.ok && 400 != res.status) {
        intitial=location;
    console.log(intitial);

    let finalRes = await res.json();
// TODAY 
    let d = new Date(finalRes.forecast.forecastday[0].date);
    todayName.innerText=`${getDayNAme(d)},`;
    todayDate.innerText=`${d.getDate()} ${getMonthName(d)}`;
    cuurrentLocation.innerText=`${finalRes.location.name}`;
    todayTemp.innerHTML=`${finalRes.current.temp_c}<sup>o</sup>C`;
    // todayIcon.setAttribute("src",`${finalRes.current.condition.icon}`);
    todayFeels.innerText=`${finalRes.current.condition.text}`;
    todayHumidity.innerHTML=`${finalRes.current.humidity}`;
    todayWindSpeed.innerHTML=` ${finalRes.current.wind_kph}`;
    // todayWindDirection.innerHTML=`<img  src="../images/icon-compass.png" alt="icon-compass"> ${getWindDirection(finalRes.current.wind_dir)}`;
// Hourly
// nextHour.innerText=`${((finalRes.current.last_updated).getHours())++}`;
let temp=new Date((finalRes.current.last_updated).toLocaleString());
nextHour.innerText=`${(temp.getHours())+1}:00`;
nextHourIcon.setAttribute("src",`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+1)].condition.icon}`);
nextHourTemp.innerHTML=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+1)].temp_c}<sup>oC</sup>`;
nextHourTempFeels.innerText=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+1)].feelslike_c}`;
// console.log(finalRes.forecast.forecastday[0].hour[((temp.getHours())+1)].condition.icon);
// secondHour
secondHour.innerText=`${(temp.getHours())+2}:00`;
secondHourIcon.setAttribute("src",`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+2)].condition.icon}`);
secondHourTemp.innerHTML=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+2)].temp_c}<sup>o</sup>C`;
secondHourTempFeels.innerText=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+2)].feelslike_c}`;
// thirdHour
thirdHour.innerText=`${(temp.getHours())+3}:00`;
thirdHourIcon.setAttribute("src",`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+3)].condition.icon}`);
thirdHourTemp.innerHTML=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+3)].temp_c}<sup>o</sup>C`;
thirdHourTempFeels.innerText=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+3)].feelslike_c}`;
// fourthHour
fourthHour.innerText=`${(temp.getHours())+4}:00`;
fourthHourIcon.setAttribute("src",`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+4)].condition.icon}`);
fourthHourTemp.innerHTML=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+4)].temp_c}<sup>o</sup>C`;
fourthHourTempFeels.innerText=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+4)].feelslike_c}`;
// fifthHour
fifthHour.innerText=`${(temp.getHours())+5}:00`;
fifthHourIcon.setAttribute("src",`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+5)].condition.icon}`);
fifthHourTemp.innerHTML=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+5)].temp_c}<sup>o</sup>C`;
fifthHourTempFeels.innerText=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+5)].feelslike_c}`;
// sixthHour
sixthHour.innerText=`${(temp.getHours())+6}:00`;
sixthHourIcon.setAttribute("src",`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+6)].condition.icon}`);
sixthHourTemp.innerHTML=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+6)].temp_c}<sup>o</sup>C`;
sixthHourTempFeels.innerText=`${finalRes.forecast.forecastday[0].hour[((temp.getHours())+6)].feelslike_c}`;
// TOMORROW
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
getforecast(intitial);  //  intitial value

//Event Listeners
// console.log(searchInput.getAttribute("Value"));
// searchInput.setAttribute("oninput","getforecast(this.value)");  // working with no intitial value
searchInput.addEventListener("change", function () {    // change saves the last entered location
    getforecast(searchInput.value?searchInput.value:intitial);
});

// (async function() {
//     console.log(searchInput.value);
//     await getforecast(searchInput.value)();
// })();
