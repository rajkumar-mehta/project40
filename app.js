
const TEST_MODE = true; // v0.5: keep Days 40–35 open while RK tests.
const MAX_ATTEMPTS = 4;

const DAYS = [
 {day:40,date:"2026-09-27",displayDate:"September 27, 2026",
  question:"Forty days before you entered this world, your story had already begun.<br><br>Your mother could have been anywhere on Earth…<br><br>Can you name the city where she may have been physically present?",
  answerDisplay:"DUBAI",answers:["dubai"],hint:"Think of a city in the United Arab Emirates.",video:"https://youtu.be/z3DiPjZfbFY"},
 {day:39,date:"2026-09-28",displayDate:"September 28, 2026",
  question:"I have cities, but no houses. I have mountains, but no trees. I have water, but no fish.<br><br>What am I?",
  answerDisplay:"A MAP",answers:["map","a map"],hint:"You might use one before a hiking or travel adventure.",video:"https://www.youtube.com/results?search_query=top+hindi+songs+2026"},
 {day:38,date:"2026-09-29",displayDate:"September 29, 2026",
  question:"The more of me you take, the more you leave behind.<br><br>What am I?",
  answerDisplay:"FOOTSTEPS",answers:["footsteps","steps"],hint:"Think about what follows you on a hike.",video:"https://www.youtube.com/results?search_query=best+hindi+songs+2026"},
 {day:37,date:"2026-09-30",displayDate:"September 30, 2026",
  question:"I travel around the world while staying in one corner.<br><br>What am I?",
  answerDisplay:"A STAMP",answers:["stamp","a stamp","postage stamp"],hint:"Travel, envelopes, and one small corner.",video:"https://www.youtube.com/results?search_query=2026+bollywood+hits"},
 {day:36,date:"2026-10-01",displayDate:"October 1, 2026",
  question:"What gets wetter the more it dries?",
  answerDisplay:"A TOWEL",answers:["towel","a towel"],hint:"You might need one after a spa day.",video:"https://www.youtube.com/results?search_query=top+10+bollywood+songs+2026"},
 {day:35,date:"2026-10-02",displayDate:"October 2, 2026",
  question:"What has many keys but can’t open a single lock?",
  answerDisplay:"A PIANO",answers:["piano","a piano","keyboard"],hint:"These keys make music.",video:"https://www.youtube.com/results?search_query=hindi+romantic+songs+2026"}
];

const WRONG_MESSAGES=[
 "Not quite, birthday girl 😏",
 "Hmm… that one didn’t unlock anything.",
 "Nice try, Mika. The mystery survives.",
 "Nope! Your 39-year-old brain still has work to do.",
 "Almost… or maybe not even close 😂",
 "The vault remains locked."
];

let currentDay=DAYS[0], attemptsUsed=0, unusedMessages=[];

const $=id=>document.getElementById(id);
const screens=[...document.querySelectorAll(".screen")];

function show(id){screens.forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo({top:0,behavior:"smooth"})}
function norm(v){return v.trim().toLowerCase().replace(/\s+/g," ")}
function key(day){return `mika40_day_${day}`}
function getResult(day){try{return JSON.parse(localStorage.getItem(key(day))||"null")}catch{return null}}
function saveResult(day,result){localStorage.setItem(key(day),JSON.stringify(result))}
function available(d){
 if(TEST_MODE) return true;
 const today=new Date(); today.setHours(23,59,59,999);
 const unlock=new Date(d.date+"T00:00:00");
 return today>=unlock;
}
function randomWrong(){
 if(!unusedMessages.length)unusedMessages=[...WRONG_MESSAGES];
 return unusedMessages.splice(Math.floor(Math.random()*unusedMessages.length),1)[0];
}
function computeStats(){
 const completed=DAYS.map(d=>({d,r:getResult(d.day)})).filter(x=>x.r);
 const solved=completed.filter(x=>x.r.outcome==="solved");
 const flags=completed.filter(x=>x.r.outcome==="gave-up");
 let firstTry=solved.filter(x=>x.r.attempts===1).length;
 let streak=0;
 for(const d of DAYS){
   const r=getResult(d.day);
   if(!r) continue;
   if(r.outcome==="solved") streak++;
   else streak=0;
 }
 return {solved:solved.length,flags:flags.length,firstTry,streak};
}
function renderScore(){
 const s=computeStats();
 $("mikaScore").textContent=s.solved;
 $("mysteryScore").textContent=s.flags;
 $("solvedCount").textContent=s.solved;
 $("flagCount").textContent=s.flags;
 $("firstTryCount").textContent=s.firstTry;
 $("streakCount").textContent=s.streak;
}
function stateText(d){
 const r=getResult(d.day);
 if(r?.outcome==="solved") return `<span class="solved">✦ Mystery solved · ${r.attempts} attempt${r.attempts===1?"":"s"}</span>`;
 if(r?.outcome==="gave-up") return `<span class="flag">🏳 The Mystery won this one</span>`;
 if(!available(d)) return `🔒 Not yet revealed`;
 return `Ready to unlock`;
}
function renderGrid(){
 const grid=$("dayGrid");grid.innerHTML="";
 DAYS.forEach((d,i)=>{
   const b=document.createElement("button");b.className="day-card";
   if(i===0)b.classList.add("today");
   b.disabled=!available(d);
   b.innerHTML=`<div class="day">SECRET ${d.day}</div><div class="date">${d.displayDate}</div><div class="state">${stateText(d)}</div>`;
   if(available(d))b.onclick=()=>openDay(d.day);
   grid.appendChild(b);
 });
 renderScore();
}
function resetPuzzle(){
 attemptsUsed=0;unusedMessages=[...WRONG_MESSAGES];
 $("answerInput").value="";$("answerInput").disabled=false;
 $("feedback").textContent="";$("attempts").textContent="";
 $("giveUpBtn").classList.add("hidden");$("submitBtn").disabled=false;
}
function openDay(n){
 currentDay=DAYS.find(d=>d.day===n);resetPuzzle();
 $("dayEyebrow").textContent=`SECRET ${currentDay.day} · ${currentDay.displayDate.toUpperCase()}`;
 $("puzzleText").innerHTML=currentDay.question;show("puzzle");
 setTimeout(()=>$("answerInput").focus(),180);
}
function check(){
 const input=$("answerInput"), value=norm(input.value);
 if(!value)return;
 if(currentDay.answers.includes(value)){
   const tries=attemptsUsed+1;
   saveResult(currentDay.day,{outcome:"solved",attempts:tries,completedAt:new Date().toISOString()});
   input.value="";$("feedback").textContent="Secret unlocked."; $("feedback").className="feedback good";$("attempts").textContent="";
   setTimeout(()=>show("success"),220);return;
 }
 attemptsUsed++;
 input.value="";input.focus();
 const remaining=MAX_ATTEMPTS-attemptsUsed;
 $("feedback").textContent=randomWrong();$("feedback").className="feedback bad";
 $("attempts").textContent=remaining>0?`${remaining} attempt${remaining===1?"":"s"} remaining`:"Four attempts used.";
 if(remaining===0){
   $("submitBtn").disabled=true;input.disabled=true;$("giveUpBtn").classList.remove("hidden");
 }
}
$("submitBtn").onclick=check;
$("answerInput").addEventListener("keydown",e=>{if(e.key==="Enter"&&!$("submitBtn").disabled)check()});
$("hintBtn").onclick=()=>{$("feedback").textContent=`Hint: ${currentDay.hint}`;$("feedback").className="feedback";};
$("giveUpBtn").onclick=()=>show("confirmGiveUp");
$("tryAgainBtn").onclick=()=>{resetPuzzle();show("puzzle")};
$("saveMeBtn").onclick=()=>{
 saveResult(currentDay.day,{outcome:"gave-up",attempts:MAX_ATTEMPTS,completedAt:new Date().toISOString()});
 $("answerReveal").textContent=currentDay.answerDisplay;show("surrender");
};
function openSurprise(){
 $("qrImage").src=`https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(currentDay.video)}`;
 $("videoEyebrow").textContent=`SECRET ${currentDay.day} UNLOCKED`;show("video");
}
$("successSurpriseBtn").onclick=openSurprise;
$("surrenderSurpriseBtn").onclick=openSurprise;

// v0.5: preserve the game tab when the video opens.
$("watchBtn").onclick=()=>window.open(currentDay.video,"_blank","noopener,noreferrer");

document.querySelectorAll("[data-home]").forEach(b=>b.onclick=()=>{renderGrid();show("home")});
renderGrid();

if("serviceWorker" in navigator){
 window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
}
