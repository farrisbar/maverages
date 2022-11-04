import {mavgBrute} from "./maverages_brute.js";
import {mavg} from "./maverages.js";
let w,i,o,o1,o2,iCopy;

// This driver was only used for manual test input during development.
// Please see unit tests in the /test folder for final test cases.
// run:  npm test to execute all tests.

// w = 3;
// i = [0,1,2,3]
// console.log(w,i, mavg(w, i))

// w = 5;
// i = [0, 1, -2, 3, -4, 5, -6, 7, -8, 9]
// console.log(w, i, mavg(w, i))


w = 5;
let bigNumber = Number.MAX_SAFE_INTEGER+1

i = [1, 1, 1, 1, 1, 1,1,bigNumber, bigNumber, -bigNumber, 1, 1, 1, 1, 1, 1,1, 1, 1, 1, 1,1, 1, 1, 1, 1]
o1=mavgBrute(w,i)
o2=mavg(w, i)
for(let k = 0; k < o1.length; k++){
 if(o1[k] !== o2[k]){
     console.log("Error")
 }
}
console.log(i)
console.log(w, mavgBrute(w,i), mavg(w, i))
