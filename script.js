"use strict"

setInterval(clock,1000);

const hoursDom = document.querySelector(".hours");
const minsDom = document.querySelector(".mins");
const secsDom = document.querySelector(".secs");
const amPmDom = document.querySelector(".amPm");

function clock () {
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  const currentMin = currentDate.getMinutes();
  const currrentSec = currentDate.getSeconds();
  if(currentHours>=12) {
    amPmDom.textContent = "PM";
    hoursDom.textContent = currentHours-12;
  } else {
    amPmDom.textContent = "AM";
    hoursDom.textContent = currentHours;
  }
  minsDom.textContent = currentMin;
  secsDom.textContent = currrentSec;
}

clock();
