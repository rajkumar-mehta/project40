
const DAYS = [
 {
  day:40,date:"September 27, 2026",title:"THE FIRST CLUE",
  question:"Forty days before you entered this world, your story had already begun.<br><br>Your mother could have been anywhere on Earth…<br><br>Can you name the city where she may have been physically present?",
  answerDisplay:"DUBAI",answers:["dubai"],
  hint:"Think of a city in the United Arab Emirates.",
  video:"https://youtu.be/z3DiPjZfbFY"
 },
 {
  day:39,date:"September 28, 2026",title:"A LITTLE WARM-UP",
  question:"I have cities, but no houses. I have mountains, but no trees. I have water, but no fish.<br><br>What am I?",
  answerDisplay:"A MAP",answers:["map","a map"],
  hint:"You might use one before a hiking or travel adventure.",
  video:"https://www.youtube.com/watch?v=Ngn-J5F9h1U"
 },
 {
  day:38,date:"September 29, 2026",title:"PACK LIGHT",
  question:"The more of me you take, the more you leave behind.<br><br>What am I?",
  answerDisplay:"FOOTSTEPS",answers:["footsteps","steps"],
  hint:"Think about what follows you on a hike.",
  video:"https://www.youtube.com/watch?v=DEd37hP36tg"
 },
 {
  day:37,date:"September 30, 2026",title:"LOOK UP",
  question:"I travel around the world while staying in one corner.<br><br>What am I?",
  answerDisplay:"A STAMP",answers:["stamp","a stamp","postage stamp"],
  hint:"Travel, envelopes, and one small corner.",
  video:"https://music.youtube.com/playlist?list=PLFFyMei_d85W1LfAatQhezLeJ7pDkOSoG"
 },
 {
  day:36,date:"October 1, 2026",title:"TAKE A BREAK",
  question:"What gets wetter the more it dries?",
  answerDisplay:"A TOWEL",answers:["towel","a towel"],
  hint:"You might need one after a spa day.",
  video:"https://music.youtube.com/playlist?list=PLFFyMei_d85W1LfAatQhezLeJ7pDkOSoG"
 },
 {
  day:35,date:"October 2, 2026",title:"THE ROAD AHEAD",
  question:"What has many keys but can’t open a single lock?",
  answerDisplay:"A PIANO",answers:["piano","a piano","keyboard"],
  hint:"These keys make music.",
  video:"https://music.youtube.com/playlist?list=PLFFyMei_d85W1LfAatQhezLeJ7pDkOSoG"
 }
];

const WRONG_MESSAGES = [
 "Not quite, birthday girl 😏",
 "Hmm… that one didn’t unlock anything.",
 "Nice try, Mika. The mystery survives.",
 "Nope! Your 39-year-old brain still has work to do.",
 "Almost… or maybe not even close 😂",
 "The vault remains locked."
];

let currentDay = DAYS[0];
let attemptsUsed = 0;
let unusedMessages = [];
const maxAttempts = 4;

const screens=[...document.querySelectorAll('.screen')];
function show(id){screens.forEach(s=>s.classList.toggle('active',s.id===id));window.scrollTo({top:0,behavior:'smooth'})}
function normalize(s){return s.trim().toLowerCase().replace(/\s+/g," ")}
function randomWrong(){
 if(!unusedMessages.length) unusedMessages=[...WRONG_MESSAGES];
 const i=Math.floor(Math.random()*unusedMessages.length);
 return unusedMessages.splice(i,1)[0];
}
function statusFor(day){
 const v=localStorage.getItem(`project40_day${day}_solved`);
 return v ? (v==="gave-up" ? "✓ Completed (with white flag 😂)" : "✓ Completed") : "Ready to play";
}
function renderDayGrid(){
 const grid=document.getElementById('dayGrid');
 grid.innerHTML="";
 DAYS.forEach(d=>{
  const b=document.createElement('button');
  b.className='day-card';
  b.innerHTML=`<div class="day">DAY ${d.day}</div><div class="date">${d.date}</div><div class="state">${statusFor(d.day)}</div>`;
  b.onclick=()=>openDay(d.day);
  grid.appendChild(b);
 });
}
function resetPuzzle(){
 attemptsUsed=0; unusedMessages=[...WRONG_MESSAGES];
 const input=document.getElementById('answerInput');
 input.value="";
 input.disabled=false;
 document.getElementById('feedback').textContent="";
 document.getElementById('attempts').textContent="";
 document.getElementById('giveUpBtn').classList.add('hidden');
 document.getElementById('submitBtn').disabled=false;
}
function openDay(dayNum){
 currentDay=DAYS.find(d=>d.day===dayNum);
 resetPuzzle();
 document.getElementById('dayEyebrow').textContent=`DAY ${currentDay.day} • ${currentDay.date.toUpperCase()}`;
 document.getElementById('puzzleTitle').textContent=currentDay.title;
 document.getElementById('puzzleText').innerHTML=currentDay.question;
 show('puzzle');
 setTimeout(()=>document.getElementById('answerInput').focus(),220);
}
function check(){
 const input=document.getElementById('answerInput');
 const val=normalize(input.value);
 const feedback=document.getElementById('feedback');
 const attempts=document.getElementById('attempts');

 if(currentDay.answers.includes(val)){
   localStorage.setItem(`project40_day${currentDay.day}_solved`,'yes');
   feedback.textContent="Correct.";
   feedback.className="feedback good";
   attempts.textContent="";
   input.value="";
   setTimeout(()=>show('success'),220);
   return;
 }
 attemptsUsed++;
 const remaining=maxAttempts-attemptsUsed;
 feedback.textContent=randomWrong();
 feedback.className="feedback bad";

 // v0.4 improvement: erase the previous wrong answer immediately.
 input.value="";
 input.focus();

 if(remaining>0){
   attempts.textContent=`${remaining} attempt${remaining===1?"":"s"} remaining`;
 }else{
   attempts.textContent="That's all four attempts. 😬";
   document.getElementById('submitBtn').disabled=true;
   input.disabled=true;
   document.getElementById('giveUpBtn').classList.remove('hidden');
 }
}
document.getElementById('submitBtn').onclick=check;
document.getElementById('answerInput').addEventListener('keydown',e=>{
 if(e.key==='Enter'&&!document.getElementById('submitBtn').disabled) check();
});
document.getElementById('hintBtn').onclick=()=>{
 const f=document.getElementById('feedback');
 f.textContent=`Hint: ${currentDay.hint}`;
 f.className="feedback";
};
document.getElementById('giveUpBtn').onclick=()=>show('confirmGiveUp');
document.getElementById('tryAgainBtn').onclick=()=>{resetPuzzle();show('puzzle')};
document.getElementById('saveMeBtn').onclick=()=>{
 localStorage.setItem(`project40_day${currentDay.day}_solved`,'gave-up');
 document.getElementById('answerReveal').textContent=currentDay.answerDisplay;
 show('surrender');
};
function openSurprise(){
 const q=encodeURIComponent(currentDay.video);
 document.getElementById('qrImage').src=`https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${q}`;
 document.getElementById('videoEyebrow').textContent=`DAY ${currentDay.day} UNLOCKED`;
 show('video');
}
document.getElementById('successSurpriseBtn').onclick=openSurprise;
document.getElementById('surrenderSurpriseBtn').onclick=openSurprise;
document.getElementById('watchBtn').onclick=()=>window.location.href=currentDay.video;
document.getElementById('backHomeBtn').onclick=()=>{renderDayGrid();show('home')};
document.querySelectorAll('[data-back]').forEach(b=>b.onclick=()=>{renderDayGrid();show(b.dataset.back)});
renderDayGrid();

if('serviceWorker' in navigator){
 window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js'));
}
