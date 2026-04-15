const title = document.getElementById("title");

const originalText = "CSCE 190 Website";
const hoverText = "By: Ryan Newhouse";
let typingInterval;

function typeText(text) {
    let i = 0;
    clearInterval(typingInterval);
    typingInterval = setInterval(() => {
        title.textContent = text.slice(0, i + 1);
        i++;
        if (i > text.length) {
            title.textContent = text;
            clearInterval(typingInterval);
        }
    }, 80);
}

title.addEventListener("mouseenter", () => {
    typeText(hoverText);
});

title.addEventListener("mouseleave", () => {
    typeText(originalText);
});