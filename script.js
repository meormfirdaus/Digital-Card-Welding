// Countdown timer
const eventDate = new Date("2027-12-27T11:00:00+08:00"); // GMT+8
function updateCountdown() {
  const now = new Date();
  const diff = eventDate - now;
  const cd = document.getElementById("countdown");
  if (diff <= 0) {
    cd.innerHTML = "Majlis sedang berlangsung!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  cd.innerHTML = `${days} hari ${hours} jam ${mins} minit ${secs} saat`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Music control
const bgm = document.getElementById("bgm");
const musicIcon = document.getElementById("music-icon");
function toggleBgm() {
  if (bgm.paused) {
    bgm.play();
    musicIcon.textContent = "🔊";
  } else {
    bgm.pause();
    musicIcon.textContent = "🔇";
  }
}
// Autoplay workaround for some browsers
window.addEventListener('click', () => { bgm.play().catch(()=>{}); }, { once: true });