import { get_weather } from "./get_weather";

const el = document.createElement("section");
describe("test get weather", () => {
  beforeAll(() => get_weather(el));
  describe("test markup", () => {
    it("should markup", () => {
      expect(el.querySelector("form")).toBeTruthy();
      expect(el.querySelector("input")).toBeTruthy();
      expect(el.querySelector("button")).toBeTruthy();
    });
  });

  describe("test input text", () => {
    it("get data after input text and click button", () => {
      el.querySelector(".inputCity").value = "Moscow";

      const data = el.querySelector("#button").click();

      expect(typeof data).toBe("json");
    });
  });
});
