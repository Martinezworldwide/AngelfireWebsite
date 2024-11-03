// Alert Popup on Page Load
window.onload = function() {
  alert("Welcome to the Angelfire experience! Prepare for neon madness!");
};

// Add Mouseover Sound Effect
document.querySelectorAll('.gif').forEach(gif => {
  gif.addEventListener('mouseover', () => {
    new Audio('https://www.soundjay.com/button/sounds/button-4.mp3').play();
  });
});

// Fun Interaction Button
const button = document.createElement("button");
button.innerText = "Click for a Surprise!";
button.className = "fun-button";
button.onclick = () => alert("You found the surprise!");
document.querySelector('.frame-content').appendChild(button);
