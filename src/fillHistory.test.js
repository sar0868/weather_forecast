import { fillHistory } from "./fillHistory";

describe("test fillHistory", () => {
  it("test create list history", () => {
    const el = document.createElement("div");
    const arr = [{ place: "London", forecast: "" }];
    localStorage.setItem("history", JSON.stringify(arr));
    const expected = `<p class="key">London</p>`;

    fillHistory(el);
    expect(el.innerHTML).toEqual(expected);
  });
});
