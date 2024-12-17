import { fillHistory } from "./fillHistory";

describe("test fillHistory", () => {
  it("test create list history", () => {
    const el = document.createElement("div");
    localStorage.setItem("London", "hello");
    const expected = `<p class="key">London</p>`;

    fillHistory(el);
    expect(el.innerHTML).toEqual(expected);
  });
});
