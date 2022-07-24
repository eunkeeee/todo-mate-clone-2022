const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  let hours = date.getHours();
  if (hours < 12) {
    hours = String(hours).padStart(2, "0");
  } else {
    hours = String(hours - 12).padStart(2, "0");
  }
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);
