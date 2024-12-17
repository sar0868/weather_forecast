import { weather } from "./weather";

describe("test get weather", () => {
  const el = document.createElement("main");
  beforeAll(() => {
    weather(el);
  });

  describe("Create markup", () => {
    it("test create markup", () => {
      expect(el.querySelector("input")).toBeTruthy();
      expect(el.querySelector("#button")).toBeTruthy();
      expect(el.querySelector("#info")).toBeTruthy();
      expect(el.querySelector("#map")).toBeTruthy();
      expect(el.querySelector("#list_history")).toBeTruthy();
    });
  });
});
