const { DateTime } = require("luxon");

const timenow = DateTime.now();
console.log(timenow);
console.log(new Date().getMonth()); // starts on month 0
