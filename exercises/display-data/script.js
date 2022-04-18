
let eggs = [
    {name: "Baked Egg Boat", likes: 156},
    {name: "Egg Pizza", likes: 318},
    {name: "Avacado Toast", likes: 131},
    {name: "Kimchi Fried Rice", likes: 687},
    {name: "Omurice", likes: 1700},
    {name: "Egg Art", likes: 275}
    ];
  
    // One: Use the amount to indicate how big each circle is
  
  // First show all the flowers and create divs for each of them
  let container = document.querySelector(".recipes");
  // create a counter variable that will give us each flowers number in the array
  let i = 0;
  
  function displayEggs(eggs) {
    // creates a new div; appends that div to the container
    let newItem = document.createElement("div");
    let eggsDiv = container.appendChild(newItem);
    // increase the counter variable by one
    i++;
    // adds a shared class to each new div
    newItem.classList.add("eggs");
    // adds a specific class to each new div
    newItem.classList.add("eggs" + [i]);
    // places the flower name and amount to the div
    eggsDiv.innerHTML = eggs.name + " – " + eggs.likes;
    // sets height of flower to the amount. try changing height to width, or padding
    eggsDiv.style.width = eggs.likes + "px";
    eggsDiv.style.height = eggs.likes + "px";
    console.log(eggs);
  }
  // loops through the flowers and runs the displayFlowers function for each one
  eggs.forEach(displayEggs);