
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

  // Temporary Day 40 test video supplied by RK.
  day40VideoUrl: "https://youtu.be/z3DiPjZfbFY",

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

document.getElementById('showVideoOptionsBtn').addEventListener('click', () => {
  makeQr(CONFIG.day40VideoUrl);
  show('video');
});

document.getElementById('watchVideoBtn').addEventListener('click', () => {
  window.location.href = CONFIG.day40VideoUrl;
});

function makeQr(url) {
  const q = encodeURIComponent(url);
  document.getElementById('qrImage').src =
    `https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${q}`;
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js'));
}
