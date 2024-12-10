export function get_weather(el) {
  el.innerHTML = `
    <div class="weather">
        <div class="set_data">
            <input type="text" class="inputCity" placeholder="weather" />
            <button id="button">Show</button>
        </div>
        <div class="show">
            <img
            id="map"
            src="https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:-0.1097224,51.5082647&zoom=14&marker=lonlat:-0.1097224,51.5082647;type:awesome;color:%23e01401&apiKey=b8568cb9afc64fad861a69edbddb2658"
            alt="map img"
            />
            <div id="info"></div>
        </div>
    </div>
    <div class="history">
        <div class="list_history">
            <p class="title_history">History</p>
            <p>London</p>
            <p>Minsk</p>
            <p>Moscow</p>
        </div>
    </div> `;

  //   async function getData() {
  //     const url = `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6cb973b96821fbec8a012c668b8f4700`;
  //     let responce = await fetch(url);
  //     if (responce.ok) {
  //       let json = await responce.json();
  //     } else {
  //       console.error("Error HTTP: " + responce.status);
  //     }
  //     return json;
  //   }

  const btn = el.querySelector("#button");
  // const inp = el.querySelector(".inputCity");

  const inp = el.querySelector(".inputCity");

  const getData = function () {
    const text = inp.value;
    console.log(text);

    const newCity = document.createElement("p");
    newCity.innerHTML = "hello";
    el.querySelector(".list_history").prepend(newCity);
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6cb973b96821fbec8a012c668b8f4700`;
    // let responce = await fetch(url);
    // if (responce.ok) {
    //   let json = await responce.json();
    //   console.log(json);
    // } else {
    //   console.error("Error HTTP: " + responce.status);
    // }
  };
  btn.addEventListener("click", getData);
}

export default get_weather;
