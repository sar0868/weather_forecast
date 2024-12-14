import { weather } from "./weather";
import { localstorage } from "./mock.localstorage";
// import { addInfo } from "./addInfo";
// import { drawMap } from "./drawMap";

// import { mockWeather } from "./mock.weather";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     ok: true,
//     json: () => Promise.resolve(mockWeather),
//   });
// });
localstorage();
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
    beforeEach(() => {
      localStorage.clear();
    });
    // const setLocalStorage = (id, data) => {
    //   window.localStorage.setItem(id, JSON.stringify(data));
    // };
    it("should data is added into local storage", () => {
      const mockId = "1";
      const mockJson = { data: "json data" };

      localStorage.setItem(mockId, JSON.stringify(mockJson));
      // const result = localStorage.getItem(mockId);
      // const result = localStorage.key(0);
      // expect(result).toBe(JSON.stringify(mockId));
      // setLocalStorage(mockId, mockJson);
      expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
    });
  });

  describe("localStorage", () => {
    it.todo("test set in localStorage");

    it.todo("test get in localStorage");
  });
});
