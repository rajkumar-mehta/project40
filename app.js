
const screens = [...document.querySelectorAll('.screen')];
const show = id => {
  screens.forEach(s => s.classList.toggle('active', s.id === id));
  window.scrollTo({top:0, behavior:'smooth'});
};

const CONFIG = {
  name: "Mika",
  title: "Project 40",
  day40Date: "2026-09-27T00:00:00-04:00",
  birthdayFinale: "2026-11-06T00:00:00-05:00",

  // Replace this later with the real Day 40 YouTube URL.
  day40VideoUrl: "https://www.youtube.com/",

  acceptedAnswers: ["dubai"]
};

document.getElementById('openPuzzleBtn').addEventListener('click', () => show('puzzle'));
document.querySelectorAll('[data-back]').forEach(btn => {
  btn.addEventListener('click', () => show(btn.dataset.back));
});

document.getElementById('hintBtn').addEventListener('click', () => {
  const msg = document.getElementById('answerMessage');
  msg.textContent = "Hint: Think of a city in the United Arab Emirates.";
  msg.className = "feedback";
});

function normalizeAnswer(s) {
  return s.trim().toLowerCase().replace(/\s+/g,' ');
}

document.getElementById('submitAnswerBtn').addEventListener('click', checkAnswer);
document.getElementById('answerInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') checkAnswer();
});

function checkAnswer() {
  const input = normalizeAnswer(document.getElementById('answerInput').value);
  const msg = document.getElementById('answerMessage');

  if (CONFIG.acceptedAnswers.includes(input)) {
    localStorage.setItem('project40_day40_solved','yes');
    msg.textContent = "Correct!";
    msg.className = "feedback good";
    setTimeout(() => show('success'), 250);
  } else {
    msg.textContent = "Not quite… try again.";
    msg.className = "feedback bad";
  }
}

document.getElementById('showQrBtn').addEventListener('click', () => {
  makeQr(CONFIG.day40VideoUrl);
  show('qr');
});

document.getElementById('openVideoBtn').addEventListener('click', () => {
  window.open(CONFIG.day40VideoUrl, '_blank', 'noopener');
});

// Uses a public QR image endpoint only for the prototype.
// Production version can bundle QR generation locally/offline.
function makeQr(url) {
  const q = encodeURIComponent(url);
  document.getElementById('qrImage').src =
    `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${q}`;
}

// Installable PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
