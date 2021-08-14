import { problem6 } from "../reduce.js";

const items = [1, 2, 3, 4, 5, 5];

problem6(items, (accumulator, item) => accumulator += item, 5);

problem6(items, (accumulator, item) => accumulator += item);