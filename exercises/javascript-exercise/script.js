var anythingIWant = document.body;

var isDark = false;
var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click",changeToDarkMode);

function changeToDarkMode() { 
  if(isDark === true) {
  darkModeButton.textContent = "dark mode";
   anythingIWant.style.background="white"; 
   anythingIWant.style.color="black"; 
    isDark = false;
    console.log ("dark mode is off");
    
  } else if (isDark === false) { 
    darkModeButton.textContent = "light mode";
    anythingIWant.style.background="black"; 
   anythingIWant.style.color="white"; 
    isDark = true;
    console.log("dark mode is on!");
  }
}
const btn = document.getElementById('btn');

let index = 0;

const colors = ['pink', 'red', 'orange', 'yellow'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});
var place =0;
function changeColor() {
 var colorList = ["hotpink","deeppink","palevioletred"];
document.body.style.backgroundColor = colorList[place]; 
place++;
 if (place ===colorList.length) place=0; 
}
function changeStyle(){
  var element = document.getElementById("myElement");
  element.style.fontFamily = "verdana";
}
