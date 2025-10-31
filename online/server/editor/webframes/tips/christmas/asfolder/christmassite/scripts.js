/* Christmas Countdown */
function getNextChristmas() {
    const now = new Date();
    const currentYear = now.getFullYear();
    let christmas = new Date(currentYear, 11, 25, 7, 0, 0); // December 25, 07:00:00

    if (now >= christmas) {
        // If current date is after this year's Christmas, set it to next year
        christmas = new Date(currentYear + 1, 11, 25, 7, 0, 0);
    }
    return christmas;
}

function updateCountdown() {
    const now = new Date();
    const nextChristmas = getNextChristmas();
    const totalSeconds = Math.floor((nextChristmas - now) / 1000);

    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('countdown').innerHTML = 
        `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds
        <br>
        Have a happy new year, and merry christmas to you all!`;

    // Repeat the countdown after every second
    setTimeout(updateCountdown, 1000);
}

// Initial call to update the countdown
updateCountdown();

/* Christmas Easter Egg video */
function easterEgg() {
    var santaEasterEgg = document.querySelector(".santaEasterEggContainer");
    var santaSleigh = santaEasterEgg.querySelector(".santa");
    santaEasterEgg.style.display = "block";
    santaEasterEgg.style.opacity = 1;
    var speech = new SpeechSynthesisUtterance();
        speech.text = "Ho ho ho, Merry Christmas!";
        window.speechSynthesis.speak(speech);
    setTimeout(() => {
        santaSleigh.style.right = "101%";
        setTimeout(() => {
            speech.text = "Have a happy new year!";
            window.speechSynthesis.speak(speech);
            santaEasterEgg.style.opacity = 0;
            setTimeout(() => {
                santaEasterEgg.style.display = "none";
                santaSleigh.style.right = "5px";
            }, 3000);
        }, 2000);
    }, 1000);
}

/* Sidebar */
var sidebar = document.querySelector(".sidebar");
var sidebarCloseBtn = sidebar.querySelector(".closeBtn");
document.getElementById("options").addEventListener("click", () => {
    sidebar.style.right = "0";
});
sidebarCloseBtn.addEventListener("click", () => {
    sidebar.style.right = "-100%";
});

/* Message */
document.getElementById("message").innerText = "Next year will be: " + (parseInt(new Date().getFullYear()) + 1);

/* Scroll */
window.addEventListener('scroll', function() {
    var scrollY = window.scrollY || window.pageYOffset;
    var nav = document.querySelector('nav');
    
    if (scrollY >= 100) {
        nav.style.background = "rgb(12, 160, 12)";
    } else {
        nav.style.background = "transparent";
    }
});