const { DateTime } = require("luxon");

const timenow = DateTime.now();
console.log(timenow);
console.log(new Date().getMonth()); // starts on month 0

const birthDay = DateTime.fromFormat("1995-12-14", "yyyy-M-dd");
console.log(birthDay);
