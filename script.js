// Countdown Timer
const eventDate = new Date("Jun 30, 2024 09:00:00").getTime();

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "Event Started!";
    }
}, 1000);

// Collapsible Sections
const collapsibles = document.getElementsByClassName("collapsible");
for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

// Tabs for Speaker Bios
function openSpeaker(evt, speakerName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(speakerName).style.display = "block";
    evt.currentTarget.className += " active";
}

//Navbar

function changeBg(){
    var navv = document.getElementById('navv');
    var scrollValue = window.scrollY;
    if(scrollValue < 100){
        navv.classList.remove('bgColor');
    } else {
        navv.classList.add('bgColor');
    }
}

window.addEventListener('scroll', changeBg);