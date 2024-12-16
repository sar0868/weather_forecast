import { weather } from "./weather";

import { mockWeather } from "./mock.weather";

/* global global */
global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockWeather),
  });
});

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value;
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = jest.fn(() => {
  return new LocalStorageMock();
});

global.localStorage = new LocalStorageMock();

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

  describe("Test get info from localStorage after click", () => {
    afterEach(() => {
      localStorage.clear();
      jest.clearAllMocks();
    });

    it("should data is added into local storage", () => {
      const city = "London";
      el.querySelector("input").innerHTML = city;
      el.querySelector("#button").click();
      console.log(localStorage.length);
      // const result = localStorage.getItem(city);
      // expect(localStorage.getItem(city)).toEqual(JSON.stringify(mockWeather));
    });
  });

  describe("Test get map from localStorage", () => {
    it.todo("test get map");
  });

  describe("Test get info from localStorage", () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it("should data is added into local storage", () => {
      const mockId = "1";
      const mockJson = { data: "json data" };

      localStorage.setItem(mockId, JSON.stringify(mockJson));

      const result = localStorage.key(0);
      expect(result).toBe(mockId);
      expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
    });
  });

  describe("localStorage", () => {
    it.todo("test set in localStorage");

    it.todo("test get in localStorage");
  });
});
