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

    addDataLocalStorage(city, data);
    fillHistory(listHistory);
  });

  listHistory.addEventListener("mousemove", () => {
    [...itemsHistory].forEach((item) => {
      item.addEventListener("click", function () {
        const city = item.innerHTML;
        const data = JSON.parse(localStorage.getItem("history"));
        for (const item of data) {
          if (item.place === city) {
            addInfo(info, item.forecast);
            drawMap(map, item.forecast);
            break;
          }
        }
      });
    });
  });
}

function addDataLocalStorage(city, data) {
  let temp = JSON.parse(localStorage.getItem("history"));
  if (temp === null) {
    temp = [];
  }
  let flag = true;
  for (let item of temp) {
    if (item.place === city) {
      item = {
        place: city,
        forecast: data,
      };
      flag = false;
      break;
    }
  }
  if (flag) {
    temp.push({
      place: city,
      forecast: data,
    });
  }
  localStorage.setItem("history", JSON.stringify(temp));
}
