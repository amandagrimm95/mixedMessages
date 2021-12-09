import {determineFortune} from 'fortuneCookie.js';
let fortune = document.getElementById("fortune");
const button = document.getElementById("cookieButton"); 

function writeFortune() {
    let fortune = determineFortune();
    fortune.textContent = `Sometime ${fortune[0]}, ${fortune[1]} will ${fortune[2]}...`;
}

button.onclick = writeFortune();