const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "417187e430mshacea56948493f06p18b87djsn1e8eefa6d011",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
async function fetchWeather(citi) {
  try {
    citiName.innerText = citi;
    const response = await fetch(`${url}city=${citi}`, options);
    const result = await response.json();
    console.log(result);

      cloud_pct.innerHTML = result.cloud_pct;
      temp.innerHTML = result.temp;
      feels_like.innerHTML = result.feels_like;
      humidity.innerHTML = result.humidity;
      min_temp.innerHTML = result.min_temp;
      max_temp.innerHTML = result.max_temp;
      wind_speed.innerHTML = (result.wind_speed*18/5).toFixed(2);
      wind_degrees.innerHTML = result.wind_degrees;
      // sunrise.innerHTML = result.sunrise;
      // sunset.innerHTML = result.sunset;

      const response1 = await fetch(`${url}city=Chandigarh`, options);
      const result1 = await response1.json();
      console.log(result1);
      cloud_pct1.innerHTML = result1.cloud_pct;
      temp1.innerHTML = result1.temp+"℃";
      feels_like1.innerHTML = result1.feels_like+"℃";
      humidity1.innerHTML = result1.humidity+"%";
      min_temp1.innerHTML = result1.min_temp+"℃";
      max_temp1.innerHTML = result1.max_temp+"℃";
      wind_speed1.innerHTML = (result1.wind_speed*18/5).toFixed(2)+"Km/h";
      wind_degrees1.innerHTML = result1.wind_degrees+"°";


      const response2 = await fetch(`${url}city=Jaipur`, options);
      const result2 = await response2.json();
      console.log(result2);
      cloud_pct2.innerHTML = result2.cloud_pct;
      temp2.innerHTML = result2.temp+"℃";
      feels_like2.innerHTML = result2.feels_like+"℃";
      humidity2.innerHTML = result2.humidity+"%";
      min_temp2.innerHTML = result2.min_temp+"℃";
      max_temp2.innerHTML = result2.max_temp+"℃";
      wind_speed2.innerHTML = (result2.wind_speed*18/5).toFixed(2)+"Km/h";
      wind_degrees2.innerHTML = result2.wind_degrees+"°";

      const response3 = await fetch(`${url}city=Kolkata`, options);
      const result3 = await response3.json();
      console.log(result3);
      cloud_pct3.innerHTML = result3.cloud_pct;
      temp3.innerHTML = result3.temp+"℃";
      feels_like3.innerHTML = result3.feels_like+"℃";
      humidity3.innerHTML = result3.humidity+"%";
      min_temp3.innerHTML = result3.min_temp+"℃";
      max_temp3.innerHTML = result3.max_temp+"℃";
      wind_speed3.innerHTML = (result3.wind_speed*18/5).toFixed(2)+"Km/h";
      wind_degrees3.innerHTML = result3.wind_degrees+"°";

      const response4 = await fetch(`${url}city=Mumbai`, options);
      const result4 = await response4.json();
      console.log(result4);
      cloud_pct4.innerHTML = result4.cloud_pct;
      temp4.innerHTML = result4.temp+"℃";
      feels_like4.innerHTML = result4.feels_like+"℃";
      humidity4.innerHTML = result4.humidity+"%";
      min_temp4.innerHTML = result4.min_temp+"℃";
      max_temp4.innerHTML = result4.max_temp+"℃";
      wind_speed4.innerHTML = (result4.wind_speed*18/5).toFixed(2)+"Km/h";
      wind_degrees4.innerHTML = result4.wind_degrees+"°";

      const response5 = await fetch(`${url}city=Chennai`, options);
      const result5 = await response5.json();
      console.log(result5);
      cloud_pct5.innerHTML = result5.cloud_pct;
      temp5.innerHTML = result5.temp+"℃";
      feels_like5.innerHTML = result5.feels_like+"℃";
      humidity5.innerHTML = result5.humidity+"%";
      min_temp5.innerHTML = result5.min_temp+"℃";
      max_temp5.innerHTML = result5.max_temp+"℃";
      wind_speed5.innerHTML = (result5.wind_speed*18/5).toFixed(2)+"Km/h";
      wind_degrees5.innerHTML = result5.wind_degrees+"°";

  } catch (error) {
    console.error(error);
  }
}
// fetchWeather();

submit.addEventListener("click", (e)=>{
  e.preventDefault();
  fetchWeather(citi.value);
});

fetchWeather("Delhi");
// fetchWeather("Shanghai");

