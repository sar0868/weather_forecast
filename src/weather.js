import { getWeather } from "./getWeather.js";
import { addInfo } from "./addInfo.js";
import { drawMap } from "./drawMap.js";

export function weather(el) {
  el.innerHTML = `
    <section class="weather">
        <form action="" method="get">
          <input type="text" placeholder="weather" />
          <button id="button">Show</button>
        </form>
        <div class="show">
          <div id="map">
            <img
              src="./map_example.png"
              alt="map img"
            />
          </div>
          <div id="info"></div>
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
  const map = el.querySelector("#map");

  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const city = inputCity.value;
    const data = await getWeather(city);
    addInfo(info, data);
    drawMap(map, data);
  });
}
