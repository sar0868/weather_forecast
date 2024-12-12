export function weather(el) {
  el.innerHTML = `
    <section class="weather">
        <form action="" method="get">
          <input type="text" placeholder="weather" />
          <button id="button">Show</button>
        </form>
        <div class="show">
          <img
            id="map"
            src="https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:-0.1097224,51.5082647&zoom=14&marker=lonlat:-0.1097224,51.5082647;type:awesome;color:%23e01401&apiKey=b8568cb9afc64fad861a69edbddb2658"
            alt="map img"
          />
          <div name="weather_info" id="info"></div>
        </div>
    </section>
    <section class="history">
        <div class="list_history">
          <h2 class="title_history">History</h2>
          <p class="key">London</p>
          <p class="key">Minsk</p>
          <p class="key">Moscow</p>
        </div>
    </section>
    `;

  const inputCity = el.querySelector("input");
  const btn = el.querySelector("#button");
  const info = el.querySelector("#info");

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = inputCity.value;
    info.innerHTML = `<p>${city}</p>`;
  });
}
