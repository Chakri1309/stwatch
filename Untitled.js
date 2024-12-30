const stop=document.getElementById("decrease");
const reset=document.getElementById("reset");
const increase=document.getElementById("increase");
const mylabel=document.getElementById("mylabel");
let count=0;
let isCounting=false;
increase.onclick = function() {
    if (!isCounting) { // Start counting only if not already active
        isCounting = true;
        incrementCount();
    }
};

stop.onclick = function() { // Optional stop button
    isCounting = false; // Stop the recursive count
};

function incrementCount() {
    if (isCounting) {
        count++;
        mylabel.textContent = count;
        setTimeout(incrementCount, 1000); // Call the function again after 1 second
    }
}
reset.onclick=function(){
    count=0;
    mylabel.textContent=count;

}