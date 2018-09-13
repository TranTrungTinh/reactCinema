const moment = require('moment');

function getRandom(x, y) {
  return Math.floor(Math.random() * (y - x + 1)) + x;
}

function getRoundHour(start) {
  const remainder = start - (moment().minute() % start);
  const dateTime = moment().add(remainder, "minutes")
  return dateTime;
}


const times = [30, 45, 60, 90];
const start = getRoundHour(30);

for(let index = 0; index < 15; index++) {
  const i = getRandom(0, 3);
  const hour = start.add(times[i], "minute").format("H:mm A");
  console.log(hour);
}
