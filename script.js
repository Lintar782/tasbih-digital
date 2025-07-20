const counterDisplay = document.getElementById('counter') 
const incrementBtn = document.getElementById('incrementBtn') 
const resetBtn = document.getElementById('resetBtn') 

let count = 0; 

function updateCounterDisplay() { 
    counterDisplay.textContent = count;
} 

incrementBtn.addEventListener('click',() => { 
    count++;
    updateCounterDisplay()
}); 

resetBtn.addEventListener('click', () => { 
    count = 0 
    updateCounterDisplay()
}); 

counterDisplay.addEventListener('click', () => { 
    count++; 
    updateCounterDisplay()
}) 

updateCounterDisplay();