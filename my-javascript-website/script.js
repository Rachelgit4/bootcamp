const button = document.getElementById('action-button');
const colorBox = document.getElementById('color-box');
const counterText = document.getElementById('click-counter');

let clickCount = 0;
const colors = ['#e74c3c', '#2ecc71', '#f1c40f', '#9b59b6', '#e67e22', '#3498db'];

button.addEventListener('click', function() {
    clickCount++;
    counterText.textContent = clickCount;
    const randomIndex = Math.floor(Math.random() * colors.length);
    const newColor=colors [randomIndex];

    colorBox.style.backgroundColor = newColor;
});