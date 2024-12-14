const localStorageMock = (function () {
  let store = {};
  return {
    getItem(key) {
      return store[key];
    },
    setItem(key, value) {
      store[key] = value;
    },
    clear() {
      store = {};
    },
    removeItem(key) {
      delete store[key];
    },
    getAll() {
      return store;
    },
  };
})();

export function localstorage() {
  Object.defineProperty(window, "localStorage", { value: localStorageMock });
}
