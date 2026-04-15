const title = document.getElementById("title");

const originalText = "CSCE190 Website";
const hoverText = "By Ryan Newhoue";
let typingInterval;

function typeText(text) {
    let i = 0;
    clearInterval(typingInterval);
    typingInterval = setInterval(() => {
        title.textContent = text.slice(0, i);
        i++;
        if (ii > text.length) clearInterval(typingInterval);
    }, 80);
}

title.addEventListener("mouseenter", () => {
    typeText(hoverText);
});

title.addEventListener("mouseleave", () => {
    typeText(originalText);
});