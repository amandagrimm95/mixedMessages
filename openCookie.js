import { determineFortune } from './fortuneCookie.js';

let fortuneText = document.getElementById("fortune");
const button = document.getElementById("cookieButton");

function writeFortune() {
    let fortune = determineFortune();
    fortuneText.textContent = `Sometime ${fortune[0]}, ${fortune[1]} will ${fortune[2]}...`;
}

button.onclick = writeFortune;
