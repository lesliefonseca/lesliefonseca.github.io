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

    // let videoHolder = document.createElement("video");
    // videoHolder.src = tiktok.fields.video[0].url;
    // videoHolder.classList.add("tiktokVideo");
    // videoHolder.muted = true;
    // videoHolder.autoplay = true;
    // videoHolder.loop = true;
    // tiktokTextHolder.appendChild(videoHolder);
  });
}









//old code
// //var ul = document.querySelector("ul");
// // get the date//
// async function getRecipes() {
//   let response = await fetch(
//     "https://api.airtable.com/v0/appUi8RnGDomhaQLX/recipes?api_key=key6JRCXYfvmDYn7L");
//   let data = response.json();
//   return data;
// }

// getRecipes().then((data) => {showRecipes(data.records);});

// function showRecipes(records) {
//   for (let i = 0; i < records.length; i++) {
//     let name = records[i].fields.name;
//     let origin = records[i].fields.origin;
//     let creator =records[i].fields.creator;
//     let site = records[i].fields.site;
//     let images = records[i].fields.images.url;

//     let wrapper = document.querySelector(".containter");
    
//     let listItem = document.createElement("li");
//     let nameItem = document.createElement("h2");
//     let creatorItem = document.createElement("h3");
//     let siteItem = document.createElement("h4");
//     let imagesItem = document.createElement("img");


//     imagesItem.src = images;
    
//     listItem.appendChild(document.createTextNode(origin));
//     wrapper.appendChild(listItem);
    
//     listItem.appendChild(document.createTextNode(name));
//     wrapper.appendChild(listItem);
    
//     listItem.appendChild(document.createTextNode(creator));
//     wrapper.appendChild(creatorItem);
    
//      listItem.appendChild(document.createTextNode(site));
//      wrapper.appendChild(siteItem);
  
//     listItem.appendChild(document.createTextNode(images));
//     wrapper.appendChild(imagesItem);
    
//     console.log("show origin");
//   }
// }//