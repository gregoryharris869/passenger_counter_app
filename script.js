"use strict";
//
// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

// console.log(countEl);

function increment() {
  //   console.log("clicked");
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countDash = count + " - ";
  saveEl.textContent += countDash;
  countEl.textContent = 0;
  count = 0;
}
