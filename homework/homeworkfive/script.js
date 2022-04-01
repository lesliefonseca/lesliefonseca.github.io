document.querySelector ("ul")

function getInfo() {
fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response) {
return response.json();
})
.then((response) => {
console.log(response);
var text="latitude";
response.forEach(element=> {
var tag = document.createElement ("p");
var text = document.createTextNode (element.name);
if (element.address.geo.lat < -30) {
    tag.style.fontFamily = "courier new";
}
var el = document.getElementById("people");
tag.appendChild(text);
el.appendChild(tag);
document.querySelector ("ul")
});
})
}

getInfo();
