let sadURL =
  " https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/licebea.jpeg?v=1651707177880";

let stressedURL =
  "https://cdn.glitch.com/86f6ec63-583a-418b-bd53-cd91dd8158da%2Fmagician.jpeg?v=1617856947682";

let madURL =
  "https://cdn.glitch.com/86f6ec63-583a-418b-bd53-cd91dd8158da%2Fstar.jpeg?v=1617856930598";

let peaceURL =
  "https://cdn.glitch.com/86f6ec63-583a-418b-bd53-cd91dd8158da%2Fmoon.jpeg?v=1617856939495";

let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");
inputElement.addEventListener("keydown", function (event) {
  // Detect when we specifically press enter key
  if (event.key == "Enter") {
    // Get the contents of the text input (aka name)
    let name = inputElement.value;
    console.log(name);

    //We can also clear what we wrote in the text box
    inputElement.value = "";

    //Clear the reading result from last time
    result.innerHTML = "";

    // Loop through 4 times
    for (let i = 0; i < 4; i++) {
      // Print the number we're at in the loop
      console.log(i);

      // Get the i-th letter in the name
      let letter = name[i];
      console.log(letter);

      // Create a new HTML image element for the card
      let selectedCard = document.createElement("img");

      // If letter is any of these, use the devil card
      if (["a", "b", "c", "d", "e", "f"].includes(letter)) {
        selectedCard.src = sadURL;
        
      }

      // If letter is any of these, use the magician card
      if (["g", "h", "i", "j", "k", "l"].includes(letter)) {
        selectedCard.src = stressedURL;
      }

      // If letter is any of these, use the star card
      if (["m", "n", "o", "p", "q", "r"].includes(letter)) {
        selectedCard.src = madURL;
      }

      // If letter is any of these, use the moon card
      if (["s", "t", "u", "v", "w", "x", "y", "z"].includes(letter)) {
        selectedCard.src = peaceURL;
      }

      result.appendChild(selectedCard);
    }
  }
});
