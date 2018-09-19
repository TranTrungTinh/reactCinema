import * as moment from 'moment';

function getRandom(x, y) {
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

function getRoundHour(start) {
  const remainder = start - (moment().minute() % start);
  const dateTime = moment().add(remainder, "minutes")
  return dateTime;
}

function getHour(time) {
  const index = time.indexOf(':');
  return +time.substring(0, index);
}

const times = [30, 45, 60, 90];
const start = getRoundHour(15);
const current = getRoundHour(15).format("H:mm A");

function getRandomTime() {
  const output = [];
  for(let index = 0; index < 15; index++) {
    const i = getRandom(0, 3);
    const hour = start.add(times[i], "minute").format("H:mm A");
    if(getHour(current) <= getHour(hour) && getHour(hour) >= 9) {
      const item = {
        time: hour,
        seats: getRandom(10, 100)
      }
      output.push(item);
    }
  }
  return output;
}

export function getRandomTimeAtDay() {
  return {
    Mon: getRandomTime(),
    Tue: getRandomTime(),
    Wed: getRandomTime(),
    Thu: getRandomTime(),
    Fri: getRandomTime(),
    Sat: getRandomTime(),
    Sun: getRandomTime()
  }
}
