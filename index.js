const temperatureFahrenheit = 100;
const tempC = (temperatureFahrenheit - 32) / 1.8;
console.log(tempC);

const day = 31;
const hours = day * 24;
const minutes = day * 24 * 60;
console.log(hours);

const health = 100;
const minusHealth = health - 85;
console.log(health);
console.log(minusHealth);

let shopping = 1000;
// const discount = shopping * 0.1;
// shopping = shopping - discount;
// shopping = shopping - (shopping * 0.1);
shopping -= shopping * 0.1;
console.log(shopping);

const notWholeNumber = 12.345
console.log(Math.floor(notWholeNumber));

const wholeNumber = "46njsr8yj";
console.log(Number.parseInt(wholeNumber ));

const number = 82;
console.log(Math.sqrt(number));

const num = 567;
const str = "17px";
const parsStr = Number.parseInt(str);
const parsNum = num.toString();
console.log(parsStr);
console.log(parsNum);