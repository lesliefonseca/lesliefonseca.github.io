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