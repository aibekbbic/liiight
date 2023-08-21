import { getArr, getSumm as summs } from "./functions/helpers_array.js";

let obj = {
  name: "alex",
  age: 30,
};

// getArr(obj).forEach((item) => {
//   console.log(item);
// });

function numbers(clbck) {
  let a = 45;
  let b = 55;
  let res = clbck(a, b);
  return res;
}

numbers(summs);
