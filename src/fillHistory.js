export function fillHistory(el) {
  el.innerHTML = "";
  const keys = Object.keys(localStorage);
  for (const key of keys) {
    const city = document.createElement("p");
    city.className = "key";
    city.innerHTML = key;
    el.prepend(city);
  }
}
