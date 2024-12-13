const API_KEY = "6cb973b96821fbec8a012c668b8f4700";

export async function getWeather(city) {
  const path = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}`;

  const response = await fetch(path);

  if (!response.ok) {
    throw new Error("Cannot get data");
  }
  return response.json();
}
