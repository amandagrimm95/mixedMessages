const time = ['today', 'tomorrow', 'in the future', 'in the past', 'next year', 'when you least expect it'];
const person = ['you', 'a friend', 'an enemy', 'a stranger', 'your childhood neighbor'];
const thing = ['win the lottery', 'oversleep', 'burn your toung', 'learn to fly', 'live happily ever after', 'die a terrible and painful death'];

export const determineFortune = () => {
    let timeNum = Math.floor(Math.random() * time.length);
    let personNum = Math.floor(Math.random() * person.length);
    let thingNum = Math.floor(Math.random() * thing.length);
    return [time[timeNum], person[personNum], thing[thingNum]];
}
