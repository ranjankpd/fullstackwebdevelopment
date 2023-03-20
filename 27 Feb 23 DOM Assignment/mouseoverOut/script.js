
// getting by id
const box = document.getElementById("box");
const bod = document.getElementsByTagName("body");

// adding event listner

// MOUSE OVER

box.addEventListener("mouseover",function(){
    box.innerText = "Mouseover Tested Successfully";

    box.style.backgroundColor = "yellowGreen";
    
});

// MOUSE OUT
box.addEventListener("mouseout", function(){
    alert("Mouseout Tested Successfully");
})



box.addEventListener("click",function(){
    box.innerText = "Dont Enter Here";
    
    box.style.backgroundColor = "red";

}
)
