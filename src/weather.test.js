import { weather } from "./weather";

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

  // describe("Test get weather forecast", () => {
  //   it("should get data json when input city and click", () => {
  //     el.querySelector("input").value = "London";
  //     const result = el.querySelector("button").click();

  //     expect(result.name).toBe("London");
  //   });
  // });

  describe("Test get static map", () => {
    it.todo("test get map");
  });

  describe("localStorage", () => {
    it.todo("test set in localStorage");

    it.todo("test get in localStorage");
  });
});
