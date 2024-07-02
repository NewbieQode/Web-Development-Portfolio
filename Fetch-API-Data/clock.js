// create a function to update the date and time
function updateTime() {
  // create a new `Date` object
  const now = new Date();

  // get the current date and time as a string
  const currentTime = now.toLocaleTimeString();

  // update the `textContent` property of the `span` element with the `id` of `datetime`
  document.querySelector("#time").textContent = currentTime;
}
// call the `updateDateTime` function every second
setInterval(updateTime, 1000);
