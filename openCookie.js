function writeFortune() {
    let fortune = determineFortune();
    return `Sometime ${fortune[0]}, ${fortune[1]} will ${fortune[2]}...`;
}