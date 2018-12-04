// Jan 1st 1970 00:00:00 am  UTC (Timezone independent)  Unix-Epic
// JS counts in ms, usually unix is in s
const moment = require('moment');

// var date = new Date();
// console.log(date.getMonth());

// var date = moment();
// date.add(1, 'year').subtract(9, 'month')
// console.log(date.format('MMM Do, YYYY'));

// 10:35 am
// 6:01 am
//

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 123455612412411;
var date = moment(createdAt);

console.log(date.format('H:mm'));
