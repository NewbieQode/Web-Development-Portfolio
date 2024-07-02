// the purpose of this script is to swap 2 digits in a number from user input//
let entNum = (prompt("enter a number - that is at least 3 digits:"));
console.log("original number:" + entNum);
//promote for user input and print the original input//

window.onload = writeMessage;
function writeMessage() {
    document.getElementById("demo").innerHTML = "Original Number: " + entNum;
    document.getElementById("demo2").innerHTML ="New number: " + newNum;
}   
// display user input on screen and with html document//
let i = 0;
let newNum = "";

//for loop to run through the length of the number and swap digits at specific indexes//
for ( i = 0; i < entNum.length; i++) {
    let index;
    if (i === 1) {
        index = entNum.length
    } else if (i == entNum.length-1) {
           index = entNum[1]
        } else index = entNum[i];
        newNum += index;
}
console.log("New number:" + newNum)


    