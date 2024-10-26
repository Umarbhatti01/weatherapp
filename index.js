function getweather(){
    alert (`Hey`)
    let cityname = document.getElementById("temp1").value;
    alert(cityname)


axios.get(`https://api.weatherapi.com/v1/current.json?key=24c6042bf8dc4d3388b121532242010&q=${cityname}&aqi=yes`)
  .then(function (response) {
    // handle success
    console.log(response);
    let weatherapp = response.data
    console.log(weatherapp.current.temp_c)
    document.getElementById("show").innerHTML = (`Your Temperature is ${weatherapp.current.temp_c} C`)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}