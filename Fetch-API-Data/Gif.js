// define an asynchronous function //
async function gifFunc() {
  try {
    // Await to fetch data from the API //
    await fetch("https://cdn2.thecatapi.com/images/7uj.gif")
      .then((res) => res.url)
      .then((gif) => {
        console.log(gif);
      });
  } catch (error) {
    console.log(error);
  }
}
// call on function //
gifFunc();
