var anythingIWant = document.body;

var isDark = false;
// if i click the button
var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click",changeToDarkMode);
// background color changes
//text color changes 

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

const colorbtn = document.getElementById('colorbtn');

colorbtn.addEventListener('click', function onClick(event) {
  document.body.style.backgroundColor = 'green';
  index = index >= backgroundcolor.length - 1 ? 0 : index + 1;
});
