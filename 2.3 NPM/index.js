// var generateName = require("sillyname");

import generateName from "sillyname";
import {randomSuperhero} from "superheroes";

var sillyname = generateName();
let mySuperheroName = randomSuperhero();

// console.log(superheroes);
// console.log(typeof(superheroes));
console.log(sillyname);
console.log(mySuperheroName);