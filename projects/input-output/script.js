let sadURL = " https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/stressed.png?v=1652144262541 ";

let stressedURL = "https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/mad.png?v=1652144268348 ";

let calmURL = "https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/calm.png?v=1652152343523 ";

let happyURL = "https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/happy.png?v=1652152345994";

let proudURL = "https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/proud.PNG?v=1652312144888" ;

let nervousURL = "https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/nervous.png?v=1652312152328";

let passionURL = "https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/passion.png?v=1652312156958 ";

let inputElement = document.querySelector("#input");

let result = document.querySelector("#result");


inputElement.addEventListener("keydown",function(event){


  if (event.key == "Enter"){


    
    
    let mood = inputElement.value;
    console.log(mood);

    
    inputElement.value = "";
    
   
    result.innerHTML = "";
    
    
    for (let i = 0; i < 1; i++){
      
      
      console.log(i);
      
      
      let color = mood[i];
      console.log(color);
      
     
      let selectedCard = document.createElement("img");
      
      
      if (["s", "t", "r", "e", "s", "d"].includes(color)){
        selectedCard.src = sadURL;
      }
      
     
      if (["d", "w", "m", "s", "a", "d"].includes(color) ){
        selectedCard.src = stressedURL;
      }
      
     
      if (["h", "p", "a", "y", "w", "o"].includes(color)){
        selectedCard.src = happyURL;
      }
        
      if (["h", "a", "p", "y", "c","a"].includes(color)){
        selectedCard.src = calmURL;
      }

      if (["u", "g", "c", "h", "p"].includes(color)){
        selectedCard.src = proudURL;
      }
      if (["n", "e", "v", "u", "s", "r"].includes(color)){
        selectedCard.src = nervousURL;
      }
      if (["l", "e", "v", "u", "x", "i"].includes(color)){
        selectedCard.src = passionURL;
      }
      
      
      
      result.appendChild(selectedCard);
      
    }
    
  }
})