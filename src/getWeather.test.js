import { getWeather } from "./getWeather";
import { mockWeather } from "./mock.weather";

/* global global */
global.fetch = jest.fn(() => {
  return Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockWeather),
  });
});

describe("test get weather", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should return json", async () => {
    const result = await getWeather("London");

    expect(result).toEqual(mockWeather);
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
