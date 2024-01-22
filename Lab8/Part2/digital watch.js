function showTime() {
  let d = new Date();
  let dayOfWeek = d.getDay();
  let dayContainer = document.getElementById("weekdays");
  dayContainer.children[dayOfWeek].style.backgroundColor = "#b4d5ea";

  document.getElementById("clock").innerHTML = d.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  });
}

setInterval(function () {
  showTime();
}, 1000);

let setBtn = document.getElementsByClassName("set-btn")[0];
let milliseconds = 0;
let timeOutId;

setBtn.addEventListener("click", function () {
  let hr = Number(document.getElementById("hours").value) || 0;
  let min = Number(document.getElementById("minutes").value) || 0;
  let sec = Number(document.getElementById("seconds").value) || 0;

  document.getElementById("hours").value = "";
  document.getElementById("minutes").value = "";
  document.getElementById("seconds").value = "";
  milliseconds = hr * 60 * 60 * 1000 + min * 60 * 1000 + sec * 1000;

  timeOutId = setTimeout(function () {
    alert("The timer is out");
  }, milliseconds);
});

let clearBtn = document.getElementsByClassName("clear-btn")[0];
clearBtn.addEventListener("click", function () {
  clearTimeout(timeOutId);
  alert("The timer has stopped");
});
