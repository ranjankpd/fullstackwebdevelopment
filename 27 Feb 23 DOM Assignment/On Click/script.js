// clicks

const buttonClick = document.getElementById("button");
const body = document.getElementById("body");

buttonClick.addEventListener("click", function(){
    buttonClick.innerText = "You Just Clicked The Button";

    // changing body color
    
    body.style.backgroundColor = "purple";
    
  
}
)