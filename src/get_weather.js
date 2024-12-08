export function get_weather(el) {
  el.innerHTML = `
    <section class="weather">
        <form action="" method="get">
            <input type="text" class="inputCity" placeholder="weather" />
            <button id="button">Show</button>
        </form>
        <div class="show">
            <img
            id="map"
            src="https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:-0.1097224,51.5082647&zoom=14&marker=lonlat:-0.1097224,51.5082647;type:awesome;color:%23e01401&apiKey=b8568cb9afc64fad861a69edbddb2658"
            alt="map img"
            />
            <textarea name="weather_info" id="info"></textarea>
        </div>
    </section>
    <section class="history">
        <ul class="list_history">
            <p class="title_history">History</p>
            <li>London</li>
            <li>Minsk</li>
            <li>Moscow</li>
        </ul>
    </section> `;

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

  const info = el.querySelector("#info");
  btn.addEventListener("click", () => {
    console.log("hello");
    info.value = "hello";
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=6cb973b96821fbec8a012c668b8f4700`;
    // let responce = await fetch(url);
    // if (responce.ok) {
    //   let json = await responce.json();
    //   console.log(json);
    // } else {
    //   console.error("Error HTTP: " + responce.status);
    // }
  });
}

export default get_weather;
