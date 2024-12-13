export function addInfo(el, data) {
  el.innerHTML = `
    <p>City: ${data.name}</p>
    <p>Temp: ${data.main.temp} &degC</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>`;
}
