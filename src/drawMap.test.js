import { drawMap } from "./drawMap";
import { mockWeather } from "./mock.weather";

describe("test draw map", () => {
  it("should draw map (London) in data", () => {
    const el = document.createElement("div");
    const expectedInfo =
      "https://static-maps.yandex.ru/v1?lang=ru_RU&ll=-0.1257,51.5085&z=10&size=300,300&apikey=4aad3cf0-c199-47b7-9630-7f1f56a24cbf";
    const data = mockWeather;

    drawMap(el, data);
    const result = el.querySelector("img").getAttribute("src");

    expect(result).toBe(expectedInfo);
  });
});
