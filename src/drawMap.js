const API_KEY = "4aad3cf0-c199-47b7-9630-7f1f56a24cbf";

export function drawMap(el, data) {
  el.innerHTML = `
<img src="https://static-maps.yandex.ru/v1?lang=ru_RU&ll=${data.coord.lon},${data.coord.lat}&z=10&size=300,300&apikey=${API_KEY}" />
`;
}
