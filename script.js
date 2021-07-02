const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
let timer = 0 ;
let interval = 0;
// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTimer(){
  theTimer.innerHTML = timer;
  timer++;
  
}

// Match the text entered with the provided text on the page:
function start(){
    let stringentered = testArea.value.length;
    if(stringentered === 0){
        interval = setInterval(runTimer,10);
    }
    //console.log(stringentered);
}
function spellCheck(){
    let stringcheck = testArea.value;
   // console.log(stringcheck);
    if(stringcheck == originText){
        clearInterval(interval);
        testWrapper.style.borderColor = "green"; 
     
    }
    else{
        testWrapper.style.borderColor = "red";       
    }
   
}

// Start the timer:


// Reset everything:
function reset (){
   // interval = null;
    timer = 0;
    theTimer.innerHTML = "00:00:00"
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spellCheck,false);
resetButton.addEventListener("click",reset,false);
