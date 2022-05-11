let sadURL = " https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/stressed.png?v=1652144262541 ";

let stressedURL = "https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/mad.png?v=1652144268348 ";

let calmURL = "https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/calm.png?v=1652152343523 ";

let happyURL = "https://cdn.glitch.global/80801623-ab9a-444f-828e-06fb8e2cb6fb/happy.png?v=1652152345994";

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
      
      
      if (["a", "b", "c", "d", "e", "f"].includes(color)){
        selectedCard.src = sadURL;
      }
      
     
      if (["g", "h", "i", "j", "k", "l"].includes(color) ){
        selectedCard.src = stressedURL;
      }
      
     
      if (["m", "n", "o", "p", "q", "r"].includes(color)){
        selectedCard.src = happyURL;
      }
      
      
      if (["s", "t", "u", "v", "w", "x", "y", "z"].includes(color)){
        selectedCard.src = calmURL;
      }
      
      result.appendChild(selectedCard);
      
    }
    
  }
})