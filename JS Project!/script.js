let counter = 0;

const counterElement = document.getElementById('counter');
const decreaseButton = document.getElementById('decrease');
const resetButton = document.getElementById('reset');
const increaseButton = document.getElementById('increase');

decreaseButton.addEventListener('click', () => {
    counter--;
    updateCounter();
});

resetButton.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

increaseButton.addEventListener('click', () => {
    counter++;
    updateCounter();
});

function updateCounter() {
    counterElement.textContent = counter;
}