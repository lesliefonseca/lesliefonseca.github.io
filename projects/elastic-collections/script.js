var ul = document.querySelector("ul");
// get the date//
async function getRecipes() {
  let response = await fetch(
    "https://api.airtable.com/v0/appUi8RnGDomhaQLX/recipes?api_key=key6JRCXYfvmDYn7L");
  let data = response.json();
  return data;
}

getRecipes().then((data) => {showRecipes(data.records);});

function showRecipes(records) {
  for (let i = 0; i < records.length; i++) {
    let name = records[i].fields.name;
    let origin = records[i].fields.origin;
    let creator =records[i].fields.creator;
    let site = records[i].fields.site;
    let images = records[i].fields.images;
    
    let listItem = document.createElement("li");
    let nameItem = document.createElement("h2");
    let creatorItem = document.createElement("h3");
    let siteItem = document.createElement("h4");
    let imagesItem = document.createElement("h5");
    
    listItem.appendChild(document.createTextNode(origin));
    ul.appendChild(listItem);
    
    listItem.appendChild(document.createTextNode(name));
    ul.appendChild(listItem);
    
    listItem.appendChild(document.createTextNode(creator));
    ul.appendChild(creatorItem);
    
     listItem.appendChild(document.createTextNode(site));
    ul.appendChild(siteItem);
  
    listItem.appendChild(document.createTextNode(images));
    ul.appendChild(imagesItem);
    
    console.log("show origin");
  }
}