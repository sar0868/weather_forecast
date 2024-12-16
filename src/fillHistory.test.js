import { fillHistory } from "./fillHistory";

let mockStorage = [{}];

/* global global */
describe("test fillHistory", () => {
  beforeAll(() => {
    global.Storage.prototype.setItem = jest.fn((key, value) => {
      mockStorage.push({ key: value });
    });
    global.Storage.prototype.getItem = jest.fn((key) => {
      for (const item of mockStorage) {
        if (item.k === key) {
          return item.k;
        }
      }
    });
    global.Storage.prototype.key = jest.fn((ind) => {
      mockStorage[ind];
    });
  });

  beforeEach(() => {
    mockStorage = [{}];
  });
  afterAll(() => {
    global.Storage.prototype.setItem.mockReset();
    global.Storage.prototype.getItem.mockReset();
    global.Storage.prototype.key.mockReset();
  });
  it("test create list history", () => {
    const el = document.createElement("div");
    localStorage.setItem("London", "hello");
    const expected = `<p class='key'>London</p>`;

    fillHistory(el);
    expect(el.innerHTML).toEqual(expected);
  });
});
