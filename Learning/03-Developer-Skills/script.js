// Remember, we're gonna use strict mode in all scripts now!
/*
"use strict";

const x = [12, 24, 36, 48, 60, 72, 84, 96];
function calcCube(array) {
  let name = 0; //? declare name = 0 before loop
  for (let i = 0; i < array.length; i++) {
    //? for every increment, addda
    name += array[i];
  }
  console.log(name);
}

calcCube([111, 2, 2, 20]);

console.log("test");

const calcAge = (birthYear) => 2037 - birthYear;
console.log(calcAge(2000));

// PROBLEM;
// we work for a company buiding a smart home thermometer. Our most recent task is this: "Given an array of temperatures in one day, calculate the temperature amplitude. Leep in mind that sometimes there might be a sensor error."

// 1) Understanding the problem
// ? what is temp amplitude?
// differece between high and low temp,
// ? how to compute max and min tempo
// ? What is a sensor error? what to do?

// 2) Breaking up into sub-problems
// how to ignore errors?
// - find max value in temp array
// - find min value in temp array
// - subtract min from max (amplitude and return it)



const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (var i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// project manager tells us function should receive 2 arrays of the temperature

// 1) understanding the problem
// with 2 arrays, should implement functionality twice? NO just merge 2 arrays in the beginning

// 2 subproblems
// Merge 2 arrays?

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (var i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [23, 2, 5]);
console.log(amplitudeNew);
*/
////////////////////////////////////////////////////////////
/*
// Debugging Skills
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //C FIX BUG
    // value: Number(prompt("Degrees Celcius:"))
    value: 10,
  };
  //B FIND BUG
  console.log(measurement);
  console.table(measurement);

  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
//A IDENTIFY BUG
console.log(measureKelvin());

// USING A DEBUGGER
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (var i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];
    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) max = currentTemp;
    if (currentTemp < min) min = currentTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);
////////////////////////////////////////////////////////////
// Coding Challenge
/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the problem
// - Arrays transformed to string, transformed by '...'
// - current index of arrays+1 for `in x days`

// 2) Breaking up into sub-problems
// - transforming array into string with ºC
// - string needs to contain day (index+1)
// - Add '...' between elements, at start and end (of string).
// log string to console.

const data1 = [17, 21, 23]; // can hard code for 3 days.
const data2 = [12, 5, -5, 0, 4]; // but this is more difficult as index gets bigger.

const printForecast = function (arr) {
  let str = "";
  for (var i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  console.log("..." + str);
};

printForecast(data1);
