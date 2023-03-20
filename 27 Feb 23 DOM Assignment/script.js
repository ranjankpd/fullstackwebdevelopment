const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const zeroValue = document.getElementById("zeroValue");
const resetBtn = document.getElementById("resetBtn");

//Decrement button 
decrementBtn.addEventListener("click", () => {
    const value = Number(zeroValue.innerText);

    if(value > 0){
        zeroValue.innerText = value - 1;
    }else{
        alert("Negative Value Not Allowed");
    }
}
);

//Increment button

incrementBtn.addEventListener("click" , () =>{
const value = Number(zeroValue.innerText);

if(value >= 10){
    alert("10+ Value are not allowed")
}else{
    zeroValue.innerText = value + 1;
}

});

//reset button
resetBtn.addEventListener("click", () => {
    zeroValue.innerText = 0;
}
);