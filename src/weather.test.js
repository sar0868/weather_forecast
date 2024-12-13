import { weather } from "./weather";
// import { addInfo } from "./addInfo";
// import { drawMap } from "./drawMap";

// import { mockWeather } from "./mock.weather";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve(mockWeather),
//   });
// });

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

  describe("Test get map from localStorage", () => {
    it.todo("test get map");
  });

  describe("Test get info from localStorage", () => {
    it.todo("test get info");
  });
  describe("localStorage", () => {
    it.todo("test set in localStorage");

    it.todo("test get in localStorage");
  });
});
