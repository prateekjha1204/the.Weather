var btn = document.getElementById('submit')
var cityname = document.getElementById('input')
var city = document.getElementById('city')
var sky = document.getElementById('sky')
var temp = document.getElementById('temp')
var wind = document.getElementById('wind')
var humidity = document.getElementById('humidity')
var date = document.getElementById('date')


const work = () =>{

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=2b18998dece87e1308d32a7f732e7f7f`)
.then((response) => {
     return response.json()
    })
.then((data) => {
    console.log(data);
    if (data["message"]==="city not found"){
        alert("Wrong spelling -_-"); 
    }
    city.innerHTML = data.name;
    temp.innerHTML = `${Math.round(data.main.temp)}°C`;
    sky.innerHTML = data.weather[0].main;
    humidity.innerHTML = `${data.main.humidity}%`
    wind.innerHTML = `${data.wind.speed} km/h`;
    date.innerHTML = Date().slice(0,11)
    })
}
btn.addEventListener("click",work)

function control(e){
    if (e.keyCode == 13) {
        work();
    }
}
document.addEventListener("keydown",control); 
