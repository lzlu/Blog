/**
 *  var arr = [1, [2, [3, 4]]];
 *  console.log(flatten(arr)) // [1, 2, 3, 4]
 */
import { isArray } from './Type';
const flatten = arr => {
    let arrResult = [];
    for (let i = 0; i < arr.length; i++) {
        if (isArray(arr[i])) {
            arrResult = [...arrResult, ...flatten(arr[i])];
        } else {
            arrResult.push(arr[i]);
        }
    }
    return arrResult;
};
var arr = [1, [2, [3, 4, [5], [6, 7]], 8], 9];
console.log(flatten(arr)); // [1, 2, 3, 4]
