import { weather } from "./weather";
import { mockWeather } from "./mock.weather";
/* global global */
global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockWeather),
  });
});

describe("test get weather", () => {
  const el = document.createElement("main");
  beforeAll(() => {
    weather(el);
  });

  describe("Create markup", () => {
    it("test create markup", () => {
      expect(el.querySelector("input")).toBeTruthy();
      expect(el.querySelector("button")).toBeTruthy();
      expect(el.querySelector("button")).toBeTruthy();
      expect(el.querySelector("button")).toBeTruthy();
    });
  });

  describe("Test get weather forecast", () => {
    it.skip("should get data json when input city and click", () => {
      //   const expectedInfo = `
      // <p>City: London</p>
      // <p>Temp: 10 °C</p>
      // <img src="https://openweathermap.org/img/wn/10d@2x.png">
      // `;
      //   el.querySelector("input").value = "input city";
      //   el.querySelector("button").click();
      //   const result = el.querySelector("#info").innerHTML;
      //   expect(result).toBe(expectedInfo);
      // });
    });

    describe("Test get static map", () => {
      it.todo("test get map");
    });

    describe("localStorage", () => {
      it.todo("test set in localStorage");

      it.todo("test get in localStorage");
    });
  });
});
