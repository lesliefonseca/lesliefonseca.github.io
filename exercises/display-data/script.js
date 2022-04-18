
let eggs = [
    {name: "Baked Egg Boat", date: 156},
    {name: "Egg Pizza", date: 318},
    {name: "Avacado Toast", date: 131},
    {name: "Kimchi Fried Rice", date: 687},
    {name: "Omurice", date: 17300},
    {name: "Egg Art", date: 275}
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
    eggsDiv.innerHTML = eggs.name + " – " + eggs.date;
    // sets height of flower to the amount. try changing height to width, or padding
    eggsDiv.style.width = eggs.date + "px";
    console.log(eggs);
  }
  // loops through the flowers and runs the displayFlowers function for each one
  eggs.forEach(displayEggs);