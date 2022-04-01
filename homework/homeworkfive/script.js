var ul = document.querySelector ("ul")


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
    tag.style.color = "blue";
}
var el = document.getElementById("result");
tag.appendChild(text);
el.appendChild(tag);
});
})
}

getInfo();
