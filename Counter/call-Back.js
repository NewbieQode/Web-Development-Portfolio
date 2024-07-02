//the purpose of this script is to create and function counter that can stpped and started//
let counterText = document.getElementById(`counter-text`)
let startButton = document.getElementById(`start`);
let stopButton = document.getElementById(`stop`);

let intervalID;
let counter = 0;

startButton.addEventListener(`click`, function startCounter(){
   intervalID = setInterval(function() {
    counter += 1;
    counterText.textContent = counter;
    console.log(counter);
   }, 1000); 
});
   
stopButton.addEventListener(`click`, function stopCounter() {
    clearInterval(intervalID);
});


