
const countDownDate = new Date("Sep 7, 2025 08:00:00").getTime();

const timer = setInterval(() => {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  document.getElementById("days").innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById("hours").innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "Acara Telah Dimulai!";
  }
}, 1000);
