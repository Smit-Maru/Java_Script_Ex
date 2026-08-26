const moment = require("moment");
const today = moment();
console.log("Current DAte ............");
console.log("DD/MM/YYYY : ",today.format("DD/MM/YYYY"));
console.log("DD-MM-YYYY : ",today.format("DD-MM-YYYY"));
console.log("YYYY-MM-DD : ",today.format("YYYY-MM-DD"));