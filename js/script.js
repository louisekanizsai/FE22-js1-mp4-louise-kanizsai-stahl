const playBtn = document.querySelector("#play");
const pauseBtn = document.querySelector("#pause");
const stopBtn = document.querySelector("#stop");

const humanBreatheAnimation = {
    targets: "#body",
    translateY: "-.6rem",
    easing: "linear",
    direction: "alternate",
    delay: 500,
    endDelay: 500,
    loop: true,
    autoplay: false,
}

const humanSnoreAnimation = {
    targets: "#human-snores div",
    scale: 5,
    left: "580px",
    top: "170px",
    opacity: "0",
    easing: "linear",
    loop: true,
    duration: 2000,
    delay: anime.stagger(1000),
    autoplay: false,
}

const catBreatheAnimation = {
    targets: "#cat div",
    translateY: "-.6rem",
    easing: "linear",
    direction: "alternate",
    delay: 500,
    endDelay: 500,
    loop: true,
    autoplay: false,
}

const catSnoreAnimation = {
    targets: "#cat #cat-snores div",
    scale: 5,
    left: "35px",
    top: "250px",
    opacity: "0",
    easing: "linear",
    loop: true,
    duration: 2000,
    delay: anime.stagger(1000),
    autoplay: false,
}

const humanBreathe = anime(humanBreatheAnimation);
const humanSnore = anime(humanSnoreAnimation);
const catBreathe = anime(catBreatheAnimation);
const catSnore = anime(catSnoreAnimation);
let catIsOnBed = false;

const catJumpAnimation = {
    targets: "#cat",
    keyframes: [
        { left: "50px" },
        { left: "80px" },
        { left: "110px" },
        { left: "150px" },
        { top: "-160px", left: "350px" },
        { top: "-80px" }
    ],
    delay: 3000,
    duration: 5000,
    easing: "easeOutQuint",
    autoplay: false,
    complete: function () {
        document.querySelector('#cat').style.left = "350px";
        catBreathe.play();
        catSnore.play();
        catIsOnBed = true;
    }
}

const catJump = anime(catJumpAnimation);

playBtn.addEventListener("click", function () {
    humanSnore.play();
    humanBreathe.play();

    // om katten har hoppat upp ska den inte göra det igen när man klickar på play efter att ha pausat (endast andning + snarkning)
    if (catIsOnBed == false) {
        catJump.play();
    } else {
        catBreathe.play();
        catSnore.play();
    }
});

pauseBtn.addEventListener("click", function () {
    humanBreathe.pause();
    humanSnore.pause();
    catJump.pause();
    catBreathe.pause();
    catSnore.pause();
});

stopBtn.addEventListener("click", function () {
    humanBreathe.restart();
    humanBreathe.pause();
    humanSnore.restart();
    humanSnore.pause();
    catJump.restart();
    catJump.pause();
    catBreathe.restart();
    catBreathe.pause();
    catSnore.restart();
    catSnore.pause();
    catIsOnBed = false;
})
