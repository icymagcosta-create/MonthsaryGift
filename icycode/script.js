// ================= MGA VARIABLES (PALITAN MO ITO) =================

// 1. Ilagay ang saktong kaarawan ng iyong girlfriend (Format: YYYY-MM-DD)
const GIRLFRIEND_BIRTHDAY = "2024-05-08"; 

// 2. Kailan naging kayo? (Para ito sa timer counter)
const ANNIVERSARY_DATE = new Date("2024-05-08T00:00:00"); 


// ================= MGA FUNCTIONS =================

// Tinitingnan kung tama ang nilagay niyang kaarawan
function checkBirthdate() {
    const inputDate = document.getElementById("birthdate-input").value;
    
    if (inputDate === GIRLFRIEND_BIRTHDAY) {
        document.getElementById("lock-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        startTimer(); // Sisimulan ang timer kapag unlock na
    } else {
        alert("Ops! Mali ang date. Subukan mo ulit, Love! 💖");
    }
}

// Function para sa pag-ihip ng kandila ng cake
function blowCandle() {
    document.getElementById("cake-emoji").innerHTML = "🎂✨";
    document.getElementById("cake-instruction").innerHTML = "Wish Made! 🎉";
    
    const blowBtn = document.getElementById("blow-btn");
    blowBtn.style.backgroundColor = "#4caf50";
    blowBtn.innerText = "✔ Wish Sent to the Universe";
    blowBtn.disabled = true; // Hindi na pwedeng pindutin ulit
}

// Para sa pagbukas at pagsara ng love letter modal
function openLetter() { 
    document.getElementById("letter-modal").style.display = "flex"; 
}
function closeLetter() { 
    document.getElementById("letter-modal").style.display = "none"; 
}

// Relationship Timer Logic
function startTimer() {
    setInterval(() => {
        const now = new Date();
        const difference = now - ANNIVERSARY_DATE;

        // Pag-compute sa Araw, Oras, Minuto, at Segundo
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Pag-display sa HTML screen
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("mins").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("secs").innerText = seconds < 10 ? "0" + seconds : seconds;
    }, 1000);
}
