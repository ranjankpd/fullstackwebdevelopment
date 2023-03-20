
//getting elemnts
let inputBox = document.getElementById('test') 
let display = document.getElementById('head')


// // adding a keypress event listener to the inputbox
inputBox.addEventListener('keypress', function(e){
    display.innerText ="you have Pressed " + e.key
})