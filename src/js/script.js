"use strict";

// let numOrStr = prompt('input number or string');
// console.log(numOrStr);

//  if (numOrStr === null) {
//  console.log('ви скасували');
//  } else if (numOrStr.trim() === '') {
//  console.log('Empty String');
//  } else if (isNaN(+numOrStr)) {
//  console.log(' number is Ba_NaN');
//  } else {
//  console.log('OK!');
//  }

const numOrStr = prompt('input number or string');
console.log(numOrStr);

let result;

if (numOrStr === null) {
  result = 'cancelled';
} else if (numOrStr.trim() === '') {
  result = 'empty';
} else if (isNaN(+numOrStr)) {
  result = 'NaN';
} else {
  result = 'OK';
}

switch (result) {
  case 'cancelled':
    console.log('ви скасували');
    break;
  case 'empty':
    console.log('Empty String');
    break;
  case 'NaN':
    console.log('number is Ba_NaN');
    break;
  case 'OK':
    console.log('OK!');
    break;
  default:
    console.log('Unexpected result');
}
