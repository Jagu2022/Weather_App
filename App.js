console.log('App')

const App = () => {
  console.log('weather')
  const inputEl = document.querySelector('input');
  //console.log(inputEl.value)
  const btn = document.querySelector('button')
  const celcius = document.querySelector('.celcius')
  const humidity = document.querySelector('.hum')
  const windSpeed = document.querySelector('.windSpeed')
  const h1 = document.querySelector('.location')
  
  btn.addEventListener("click", () => {
    const location = inputEl.value 
    console.log(location)
    //alert('btn')
    const weather = async () => {
      
      const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=8634bd7bea034b3da23134438231311&q=${location}`, {mode: 'cors'});
      const weatherData = await response.json()
      console.log(weatherData)
      celcius.textContent = `${weatherData.current.feelslike_c} ${'°C'}`
      humidity.textContent = weatherData.current.humidity
      windSpeed.textContent = weatherData.current.wind_kph
      h1.textContent = weatherData.location.country
    }
    weather()
  })
}
App()