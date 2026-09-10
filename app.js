
const screens=[...document.querySelectorAll('.screen')];
const show=id=>{screens.forEach(s=>s.classList.toggle('active',s.id===id));window.scrollTo({top:0,behavior:'smooth'})};

const CONFIG={
 video:"https://youtu.be/z3DiPjZfbFY",
 answers:["dubai"],
 maxAttempts:4,
 wrongMessages:[
  "Not quite, birthday girl 😏",
  "Hmm… that one didn’t unlock anything.",
  "Nice try, Mika. The mystery survives.",
  "Nope! Your 39-year-old brain still has work to do.",
  "Almost… or maybe not even close 😂",
  "The vault remains locked."
 ]
};

let attemptsUsed=0;
let unusedMessages=[...CONFIG.wrongMessages];

function normalize(s){return s.trim().toLowerCase().replace(/\s+/g," ")}
function randomWrong(){
 if(!unusedMessages.length) unusedMessages=[...CONFIG.wrongMessages];
 const i=Math.floor(Math.random()*unusedMessages.length);
 return unusedMessages.splice(i,1)[0];
}
function resetPuzzle(){
 attemptsUsed=0; unusedMessages=[...CONFIG.wrongMessages];
 document.getElementById('answerInput').value="";
 document.getElementById('feedback').textContent="";
 document.getElementById('attempts').textContent="";
 document.getElementById('giveUpBtn').classList.add('hidden');
 document.getElementById('submitBtn').disabled=false;
}

document.getElementById('openPuzzleBtn').onclick=()=>{resetPuzzle();show('puzzle')};
document.querySelectorAll('[data-back]').forEach(b=>b.onclick=()=>show(b.dataset.back));
document.getElementById('hintBtn').onclick=()=>{
 document.getElementById('feedback').textContent="Hint: Think of a city in the United Arab Emirates.";
 document.getElementById('feedback').className="feedback";
};

function check(){
 const val=normalize(document.getElementById('answerInput').value);
 const feedback=document.getElementById('feedback');
 const attempts=document.getElementById('attempts');
 if(CONFIG.answers.includes(val)){
  localStorage.setItem('project40_day40_solved','yes');
  feedback.textContent="Correct!";
  feedback.className="feedback good";
  attempts.textContent="";
  setTimeout(()=>show('success'),250);
  return;
 }
 attemptsUsed++;
 const remaining=CONFIG.maxAttempts-attemptsUsed;
 feedback.textContent=randomWrong();
 feedback.className="feedback bad";
 if(remaining>0){
   attempts.textContent=`🔐 ${remaining} attempt${remaining===1?"":"s"} remaining`;
 }else{
   attempts.textContent="😬 That's all four attempts.";
   document.getElementById('submitBtn').disabled=true;
   document.getElementById('giveUpBtn').classList.remove('hidden');
 }
}
document.getElementById('submitBtn').onclick=check;
document.getElementById('answerInput').addEventListener('keydown',e=>{if(e.key==='Enter'&&!document.getElementById('submitBtn').disabled)check()});
document.getElementById('giveUpBtn').onclick=()=>show('confirmGiveUp');
document.getElementById('tryAgainBtn').onclick=()=>{
 // One mercy retry: resets the attempt counter.
 resetPuzzle(); show('puzzle');
};
document.getElementById('saveMeBtn').onclick=()=>{
 localStorage.setItem('project40_day40_solved','gave-up');
 show('surrender');
};

function openSurprise(){
 const q=encodeURIComponent(CONFIG.video);
 document.getElementById('qrImage').src=`https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${q}`;
 show('video');
}
document.getElementById('successSurpriseBtn').onclick=openSurprise;
document.getElementById('surrenderSurpriseBtn').onclick=openSurprise;
document.getElementById('watchBtn').onclick=()=>{window.location.href=CONFIG.video};

if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'))}
