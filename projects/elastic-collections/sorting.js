/* globals require */
console.log("Hello, Airtable");

let wrapper = document.querySelector(".wrapper");

// load the airtable library, call it "Airtable"
let Airtable = require("airtable");
console.log(Airtable);

// use the airtable library, connect to our base using API key
let base = new Airtable({ apiKey: "key6JRCXYfvmDYn7L" }).base(
  "appUi8RnGDomhaQLX"
);

//get the "books" table from the base, select ALL the records, and specify the functions that will receive the data
base("recipes").select({}).eachPage(gotPageOfRecipes, gotAllRecipes);

// an empty array to hold our book data
let recipes = [];

// callback function that receives our data
function gotPageOfRecipes(records, fetchNextPage) {
  console.log("gotPageOfRecipes()");
  // add the records from this page to our books array
  recipes.push(...records);
  // request more pages
  fetchNextPage();
}

// call back function that is called when all pages are loaded
function gotAllRecipes(err) {
  console.log("gotAllRecipes()");

  // report an error, you'd want to do something better than this in production
  if (err) {
    console.log("error loading recipes");
    console.error(err);
    return;
  }

  // call functions to log and show the books
  consoleLogRecipes();
  showRecipes();
}

// just loop through the books and console.log them
function consoleLogRecipes() {
  console.log("consoleLogRecipes()");
  recipes.forEach((recipe) => {
    console.log("Recipes:", recipe);
  });
}

// loop through the books, create an h2 for each one, and add it to the page
function showRecipes() {
  console.log("showRecipes()");
  recipes.forEach((recipe) => {
    let recipeTextHolder = document.createElement("div");
    recipeTextHolder.classList.add("entry");
    recipeTextHolder.innerText = recipe.fields.name;
    wrapper.appendChild(recipeTextHolder);

    let imageHolder = document.createElement("img");
    imageHolder.src = recipe.fields.images[0].url;
    recipeTextHolder.appendChild(imageHolder);



  const slugify = function(name) {
    return name.toLowerCase().replaceAll(' ', '-');
  };
  
  // clean up names of tags to be lower case without spaces


// moved everything inside the show recipe function
  //changed recipes to recipe
  let continents = recipe.fields.continents;
  continents.forEach(function(continents) {
    let continentsClassName = slugify(continents);
    console.log('continentsClassName', continentsClassName);
    imageHolder.classList.add(continentsClassName);
  });
  
  // add event listener to our filter to add an active class to our video
  let filterAsia = document.querySelector(".asia");
  let asiabutton = document.querySelector(".asiabutton");
  filterAsia.addEventListener("click", function(){
    if (imageHolder.classList.contains("asia")) {
      imageHolder.style.display = "block";
      asiabutton.classList.add("active");
    } else {
      imageHolder.style.display = "none";
      asiabutton.classList.remove("active");
    }
  });
  
  let filterEurope = document.querySelector(".europe");
  let europeButton = document.querySelector(".europebutton");
  filterEurope.addEventListener("click", function(){
    if (imageHolder.classList.contains("europe")) {
      imageHolder.style.display = "block";
      europeButton.classList.add("active");
    } else {
     imageHolder.style.display = "none";
     europeButton.classList.remove("active");
    }
  });
  
  let filterAustralia = document.querySelector(".australia");
  let australiaButton = document.querySelector(".australiabutton");
  filterAustralia.addEventListener("click", function(){
    if (imageHolder.classList.contains("australia")) {
      imageHolder.style.display = "block";
      australiaButton.classList.add("active");
    } else {
     imageHolder.style.display = "none";
     australiaButton.classList.remove("active");
    }
  });
  
  let filterSouthAmerica = document.querySelector(".southamerica");
  let southamericaButton = document.querySelector(".southamericabutton");
  filterSouthAmerica.addEventListener("click", function(){
    if (imageHolder.classList.contains("southamerica")) {
      imageHolder.style.display = "block";
      southamericaButton.classList.add("active");
    } else {
     imageHolder.style.display = "none";
     southamericaButton.classList.remove("active");
    }
  });
  
  let filterNorthAmerica = document.querySelector(".northamerica");
  let northamericaButton = document.querySelector(".northamerica");
  filterNorthAmerica.addEventListener("click", function(){
    if (imageHolder.classList.contains("northamerica")) {
      imageHolder.style.display = "block";
      northamericaButton.classList.add("active");
    } else {
     imageHolder.style.display = "none";
     northamericaButton.classList.remove("active");
    }
  });
  
  let filterAfrica = document.querySelector(".africa");
  let africaButton = document.querySelector(".africa");
  filterAfrica.addEventListener("click", function(){
    if (imageHolder.classList.contains("africa")) {
      imageHolder.style.display = "block";
      africaButton.classList.add("active");
    } else {
     imageHolder.style.display = "none";
     africaButton.classList.remove("active");
    }
  });

  });
}
  
  



     