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
    </section>
    `;
}
