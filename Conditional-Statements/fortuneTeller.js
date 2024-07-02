
let mname = prompt("what is your Mothers maiden name?");
let sname = prompt("what is the name of the street you grew up on?");
let fcolor = prompt("what was your favourite colour as a child?");
let age = Number(prompt("how old are you?"));
let number = Number(prompt("choose a number between 1 to 10:"));

let mYear = age + number;
let nChild = age % number;
let hDye = Math.round(age / number);


console.log(`In the next ${number} years, you are going to meet your bestfriend,
named ${mname}${sname}. You will get married in ${mYear} years and have ${nChild} children.
Then, in ${hDye} years you will dye your hair ${fcolor}.`);