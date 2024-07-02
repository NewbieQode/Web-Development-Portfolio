// create an empty array to store data //
let myPokemon = [];
try {
  // fetch Pokemon data from the API //
  fetch("https://pokeapi.co/api/v2/pokemon/wobbuffet/")
    //Fetch returns an object which is called res by default //
    //Parse the response as a JSON object //
    .then((res) => res.json())
    .then((fetched) => {
      // Assign and store the data in the items array //
      myPokemon = fetched;
      console.log("Name: \n", fetched.name, "\n");
      console.log("Weight: \n", fetched.weight, "\n");
      console.log("Abilities: \n", fetched.abilities);
    });
} catch (error) {
  // Error handling is executed if fetch fails //
  console.log(error);
}
