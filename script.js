"use strict";

const hamburger = document.querySelector("#hamburger");
const bar1 = document.querySelector("#bar-1");
const bar2 = document.querySelector("#bar-2");
const bar3 = document.querySelector("#bar-3");
const menuBar = document.querySelector("#menu-bar");

hamburger.addEventListener("click", () => {
  menuBar.classList.toggle("slide-in");
  bar1.classList.toggle("bar-1");
  bar2.classList.toggle("hide-item");
  bar3.classList.toggle("bar-3");
});
