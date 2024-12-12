import { weather } from "./weather";

describe("test get weather", () => {
  describe("Create markup", () => {
    const el = document.createElement("main");
    it("test create markup", () => {
      weather(el);
      expect(el.querySelector("input")).toBeTruthy();
      expect(el.querySelector("button")).toBeTruthy();
      expect(el.querySelector("button")).toBeTruthy();
      expect(el.querySelector("button")).toBeTruthy();
    });
  });

  describe("Test get weather forecast", () => {
    it.todo("mock test parse json");
  });

  describe("Test get static map", () => {
    it.todo("test get map");
  });

  describe("localStorage", () => {
    it.todo("test set in localStorage");

    it.todo("test get in localStorage");
  });
});
