// Birinci tapshiriq

// Bir konteyner yaradin ve ele edin ki duymeye kliklediyiviz zaman bir ses gelsin ve bir tekst herif-herif konteynerin gorunen hissesine qalxsin



let container = document.getElementById("container");
let startButton = document.getElementById("startButton");
let dingAudio = document.getElementById("dingAudio");

let playDingSound = () => {
    if (dingAudio) {
        dingAudio.currentTime = 0;
        dingAudio.play();
    }
};

let startAnimation = () => {
    container.innerHTML = " ";

    let text = "Muellim_ne_qeder_eledim_ama_aralarinda_bosluq_qoya_bilmedim";
    let letters = text.split("");
    letters.forEach((letter, index) => {
        let letterContainer = document.createElement("div");
        letterContainer.className = "letter-container";

        let span = document.createElement("span");
        span.className = "letter";
        span.innerText = letter;

        span.style.animation = `letterAnimation 0.5s ${index * 0.5}s forwards`;

        setTimeout(() => {
            playDingSound();
        }, (index) * 500);

        letterContainer.appendChild(span);
        container.appendChild(letterContainer);
    });
};

startButton.addEventListener("click", startAnimation);