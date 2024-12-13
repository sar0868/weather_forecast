import { addInfo } from "./addInfo";
import { mockWeather } from "./mock.weather";

describe("test add info", () => {
  it("should add info in data", () => {
    const el = document.createElement("div");
    const expectedInfo = `
    <p>City: London</p>
    <p>Temp: 10 °C</p>
    <img src="https://openweathermap.org/img/wn/10d@2x.png">`;
    const data = mockWeather;

    addInfo(el, data);

    expect(el.innerHTML).toBe(expectedInfo);
  });
});
