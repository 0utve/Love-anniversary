
function updateCountdown() {
  const targetDate = new Date("2024-05-27T00:00:00").getTime();
  const now = new Date().getTime();
  const distance = now - targetDate;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("counter").innerHTML = `
    <div><span>${days}</span><small>Days</small></div>
    <div><span>${hours}</span><small>Hours</small></div>
    <div><span>${minutes}</span><small>Minutes</small></div>
    <div><span>${seconds}</span><small>Seconds</small></div>
  `;
}

setInterval(updateCountdown, 1000);
updateCountdown();
