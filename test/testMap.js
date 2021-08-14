import { problem5  } from "../map.js";

const items = [1, 2, 3, 4, 5, 5];


let result = problem5(items, (value) => value >= 3 ? value : "");

console.log(result);