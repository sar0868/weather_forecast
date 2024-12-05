const inpCity = document.querySelector(".inputCity");
// const btn = document.querySelector("#button");
// const mapCity = document.querySelector("#map");
// const info = document.querySelector("#info");

function getCity() {
  const city = inpCity.value;
  inpCity.value = "";
  return city;
}

getCity();
