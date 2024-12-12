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

updateTime();
setInterval(updateTime, 1000);
