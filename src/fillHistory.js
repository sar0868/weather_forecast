export function fillHistory(el) {
  el.innerHTML = "";
  const keys = JSON.parse(localStorage.getItem("history"));
  if (keys !== null) {
    for (const key of keys) {
      const city = document.createElement("p");
      city.className = "key";
      city.innerHTML = key.place;
      el.prepend(city);
    }
  }
}
