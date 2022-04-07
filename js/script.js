const secHand = document.querySelector(".sec-hand");
const minsHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const secDeg = ((sec / 60) * 360) + 90;
    secHand.style.transform = `rotate(${secDeg}deg)`;

    const mins = now.getMinutes();
    const minsDeg = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDeg}deg)`;

    const hour = now.getHours();
    const hourDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
};


setInterval(setDate, 1000);