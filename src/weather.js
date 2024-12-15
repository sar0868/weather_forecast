import { getWeather } from "./getWeather.js";
import { addInfo } from "./addInfo.js";
import { drawMap } from "./drawMap.js";
import { fillHistory } from "./fillHistory.js";

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
      <h2 class="title_history">History</h2>
      <div id="list_history">
        <p class="key"></p>
        </div>
    </section>
    `;

  const inputCity = el.querySelector("input");
  const btn = el.querySelector("#button");
  const info = el.querySelector("#info");
  const map = el.querySelector("#map");
  const listHistory = el.querySelector("#list_history");
  fillHistory(listHistory);
  const itemsHistory = el.getElementsByClassName("key");

  btn.addEventListener("click", async (e) => {
    e.preventDefault();
    const city = inputCity.value;
    const data = await getWeather(city);
    addInfo(info, data);
    drawMap(map, data);
    localStorage.setItem(city, JSON.stringify(data));
    fillHistory(listHistory);
  });

  listHistory.addEventListener("mousemove", () => {
    [...itemsHistory].forEach((item) => {
      item.addEventListener("click", function () {
        const city = item.innerHTML;
        const data = JSON.parse(localStorage.getItem(city));
        addInfo(info, data);
        drawMap(map, data);
      });
    });
  });
}
