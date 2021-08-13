import { problem2} from "../filter.js";

const items = [1, 2, 3, 4, 5, 5];

problem2(items , (value, index) => console.log(`Value ${value} at index ${index} is true.`));