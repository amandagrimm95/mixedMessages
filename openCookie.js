let fortune = document.getElementById("fortune");
const cookieButton = document.getElementById("cookieButton") 

function writeFortune() {
    let fortune = determineFortune();
    fortune.innerHTML = `Sometime ${fortune[0]}, ${fortune[1]} will ${fortune[2]}...`;
}

cookieButton.onclick = writeFortune();