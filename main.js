"use strict";
console.log("Hello world");
const circle = document.querySelector(".circle");
const buttonBox = document.querySelector(".button-box");
const swich = document.querySelector(".switch");
const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const mediaBox = document.querySelectorAll(".media-box");
const followersNum = document.querySelectorAll(".followers-num");
const dayContent = document.querySelectorAll(".day-content");
const overView = document.querySelector(".overview");
const overViewCards = document.querySelectorAll(".overview-card");
const viewsNum = document.querySelectorAll(".views-num");
const attribution = document.querySelector(".attribution");

// click on switch-----/
circle.addEventListener("click", () => {
  circle.classList.toggle("right");
  body.classList.toggle("bg-color-light");
  h1.classList.toggle("header-light-color");
  overView.classList.toggle("header-light-color");
  attribution.classList.toggle("day-content-light");
  for (let i = 0; i < mediaBox.length; i++) {
    mediaBox[i].classList.toggle("cards-light");
    followersNum[i].classList.toggle("num-light");
    dayContent[i].classList.toggle("day-content-light");
  }
  for (let i = 0; i < overViewCards.length; i++) {
    overViewCards[i].classList.toggle("cards-light");
    viewsNum[i].classList.toggle("header-light-color");
  }
});
