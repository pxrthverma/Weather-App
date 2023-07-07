// const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=';
// const options = {
//   method: 'GET',
//   headers: {
//     'content-type': 'application/octet-stream',
//     'X-RapidAPI-Key': '970199b806msh9eff4f6b65ad8dcp1ee4b1jsn6b39c3c7d218',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

const api_key = '5b4da0fee00d315004b9235d64597487';
const api_url = 'https://api.openweathermap.org/data/2.5/weather?q=';

const cityName = document.querySelector(".searchInput");
const searchButton = document.querySelector(".searchBtn");
const weatherPic = document.querySelector(".card_logo");

console.log(searchButton);
console.log(cityName);


async function checkWeather(city)
{
    const response1 = await fetch(api_url + city + `&appid=${api_key}`);
    var data1 = await response1.json();

    console.log(data1);

    document.querySelector(".city_Name").innerHTML = (data1.name);
    document.querySelector(".temp").innerHTML = Math.round((data1.main.temp)-273)+"<span style='font-size:25px'>°C</span>";
    document.querySelector(".feels_like").innerHTML = "Feels like: " + Math.round((data1.main.feels_like)-273) + "°C";
    document.querySelector(".humidity").innerHTML = (data1.main.humidity) + "<span class='perc'>%</span>";
    document.querySelector(".min_temp").innerHTML = Math.round((data1.main.temp_min)-273)+ "°C";
    document.querySelector(".max_temp").innerHTML = Math.round((data1.main.temp_max)-273)+ "°C";
    document.querySelector(".wind_speed").innerHTML = (data1.wind.speed)+" km/hr";
    // document.querySelector(".sunrise").innerHTML = ((data1.sys.sunrise));
    // document.querySelector(".sunset").innerHTML = ((data1.sys.sunset));
 
    if(data1.weather[0].main==='Mist'){
      weatherPic.src="./images/mist.png";
    }
    if(data1.weather[0].main==='Clear'){
      weatherPic.src="./images/clear.png";
    }
    if(data1.weather[0].main==='Clouds'){
      weatherPic.src="./images/clouds.png";
    }
    if(data1.weather[0].main==='Drizzle'){
      weatherPic.src="./images/drizzle.png";
    }
    if(data1.weather[0].main==='Humidity'){
      weatherPic.src="./images/humidity.png";
    }
    if(data1.weather[0].main==='Rain'){
      weatherPic.src="./images/rain.png";
    }
    if(data1.weather[0].main==='Snow'){
      weatherPic.src="./images/snow.png";
    }
    if(data1.weather[0].main==='Wind'){
      weatherPic.src="./images/wind.png";
    }
}

cityName.addEventListener("keydown", function(e){
  if(e.key==='Enter')
  checkWeather(cityName.value);
})

// checkWeather("new delhi");

checkWeather("new Delhi");
res();

function res(){
  searchButton.addEventListener("click", (e)=>{
  e.preventDefault();
  checkWeather(cityName.value);
})}

// const getWeather = (city) => {

// fetch(url + city, options)
//   .then(response => response.json())
//   .then(response => {

//     city_name.innerHTML=city;

//     console.log(response)
    
//     cloud_pct.innerHTML = response.cloud_pct
//     temp.innerHTML = response.temp
//     feels_like.innerHTML = response.feels_like
//     humidity.innerHTML = response.humidity
//     min_temp.innerHTML = response.min_temp
//     max_temp.innerHTML = response.max_temp
//     wind_speed.innerHTML = response.wind_speed
//     wind_degrees.innerHTML = response.wind_degrees
//     sunrise.innerHTML = response.sunrise
//     sunset.innerHTML = response.sunset
//   })
//   .catch(err => console.error(err));
// }

