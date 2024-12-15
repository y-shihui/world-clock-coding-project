function updateTime() {
  let tokyoDateElement = document.querySelector("#tokyo .date");
  let tokyoTimeElement = document.querySelector("#tokyo .time");
  let tokyoTimeZone = moment().tz("Asia/Tokyo");

  tokyoDateElement.innerHTML = tokyoTimeZone.format("DD MMMM YYYY");
  tokyoTimeElement.innerHTML = tokyoTimeZone.format(
    "hh:mm:ss[<small>]A[</small>]"
  );

  let parisDateElement = document.querySelector("#paris .date");
  let parisTimeElement = document.querySelector("#paris .time");
  let parisTimeZone = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTimeZone.format("DD MMMM YYYY");
  parisTimeElement.innerHTML = parisTimeZone.format(
    "hh:mm:ss[<small>]A[</small>]"
  );

  let melbourneDateElement = document.querySelector("#melbourne .date");
  let melbourneTimeElement = document.querySelector("#melbourne .time");
  let melbourneTimeZone = moment().tz("Australia/Melbourne");

  melbourneDateElement.innerHTML = melbourneTimeZone.format("DD MMMM YYYY");
  melbourneTimeElement.innerHTML = melbourneTimeZone.format(
    "hh:mm:ss[<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityDate = moment().tz(cityTimeZone).format("DD MMMM YYYY");
  let cityTime = moment()
    .tz(cityTimeZone)
    .format("hh:mm:ss[<small>]A[</small>]");

  let displayCity = document.querySelector("#main-content");
  displayCity.innerHTML = `<div class="cities">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityDate}</div>
          </div>
          <div class="time">${cityTime}</div>
        </div>
        </br>
        <a class="allcitieslink" href="/"> All cities </a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelected = document.querySelector("#city-selection");
citySelected.addEventListener("change", updateCity);
