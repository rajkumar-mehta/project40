
const TEST_MODE = true;
const DEFAULT_TEST_DATE = "2026-10-02";
const MAX_ATTEMPTS = 4;

const DAYS = [
 {day:40,date:"2026-09-27",displayDate:"September 27, 2026",
  lines:[
   "Forty days before you entered this world,",
   "your story had already begun.",
   "",
   "Your mother could have been anywhere on Earth…",
   "",
   "Can you name the city where she may have been",
   "physically present?"
  ],
  answerDisplay:"DUBAI",answers:["dubai"],hint:"Think of a city in the United Arab Emirates.",video:"https://youtu.be/z3DiPjZfbFY"},
 {day:39,date:"2026-09-28",displayDate:"September 28, 2026",
  lines:["I have cities, but no houses.","I have mountains, but no trees.","I have water, but no fish.","","What am I?"],
  answerDisplay:"A MAP",answers:["map","a map"],hint:"You might use one before a hiking or travel adventure.",video:"https://www.youtube.com/results?search_query=top+hindi+songs+2026"},
 {day:38,date:"2026-09-29",displayDate:"September 29, 2026",
  lines:["The more of me you take,","the more you leave behind.","","What am I?"],
  answerDisplay:"FOOTSTEPS",answers:["footsteps","steps"],hint:"Think about what follows you on a hike.",video:"https://www.youtube.com/results?search_query=best+hindi+songs+2026"},
 {day:37,date:"2026-09-30",displayDate:"September 30, 2026",
  lines:["I travel around the world","while staying in one corner.","","What am I?"],
  answerDisplay:"A STAMP",answers:["stamp","a stamp","postage stamp"],hint:"Travel, envelopes, and one small corner.",video:"https://www.youtube.com/results?search_query=2026+bollywood+hits"},
 {day:36,date:"2026-10-01",displayDate:"October 1, 2026",
  lines:["What gets wetter","the more it dries?"],
  answerDisplay:"A TOWEL",answers:["towel","a towel"],hint:"You might need one after a spa day.",video:"https://www.youtube.com/results?search_query=top+10+bollywood+songs+2026"},
 {day:35,date:"2026-10-02",displayDate:"October 2, 2026",
  lines:["What has many keys","but can’t open a single lock?"],
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
const params=new URLSearchParams(location.search);

function todayISO(){
 if(TEST_MODE) return params.get("testDate") || DEFAULT_TEST_DATE;
 const d=new Date();
 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function show(id){screens.forEach(s=>s.classList.toggle("active",s.id===id));window.scrollTo({top:0,left:0,behavior:"auto"})}
function norm(v){return v.trim().toLowerCase().replace(/\s+/g," ")}
function key(day){return `mika40_day_${day}`}
function getResult(day){try{return JSON.parse(localStorage.getItem(key(day))||"null")}catch{return null}}
function saveResult(day,result){localStorage.setItem(key(day),JSON.stringify(result))}
function isVisible(d){return d.date<=todayISO()}
function randomWrong(){
 if(!unusedMessages.length)unusedMessages=[...WRONG_MESSAGES];
 return unusedMessages.splice(Math.floor(Math.random()*unusedMessages.length),1)[0];
}
function visibleDays(){
 return DAYS.filter(isVisible).sort((a,b)=>b.date.localeCompare(a.date)); // newest first
}
function computeStats(){
 const ordered=DAYS.filter(isVisible).sort((a,b)=>a.date.localeCompare(b.date)); // chronological
 let solved=0,flags=0,firstTry=0,current=0,best=0;
 for(const d of ordered){
   const r=getResult(d.day);
   if(!r) continue; // missed day doesn't break streak
   if(r.outcome==="solved"){
     solved++; if(r.attempts===1) firstTry++;
     current++; best=Math.max(best,current);
   }else if(r.outcome==="gave-up"){
     flags++; current=0;
   }
 }
 return {solved,flags,firstTry,current,best};
}
function renderScore(){
 const s=computeStats();
 $("mikaScore").textContent=s.solved;
 $("mysteryScore").textContent=s.flags;
 $("solvedCount").textContent=s.solved;
 $("flagCount").textContent=s.flags;
 $("firstTryCount").textContent=s.firstTry;
 $("streakCount").textContent=s.current;
 $("bestStreakCount").textContent=s.best;
}
function stateMarkup(d){
 const r=getResult(d.day);
 if(r?.outcome==="solved") return {lock:`<span class="lock solved">🔓</span>`,state:`<span class="solved">Mystery solved · ${r.attempts} attempt${r.attempts===1?"":"s"}</span>`};
 if(r?.outcome==="gave-up") return {lock:`<span class="lock solved">🔓</span>`,state:`<span class="flag">🏳 The Mystery won this one</span>`};
 return {lock:`<span class="lock unsolved">🔒</span>`,state:`Ready to unlock`};
}
function renderGrid(){
 const grid=$("dayGrid");grid.innerHTML="";
 const vd=visibleDays();
 $("emptyState").classList.toggle("hidden",vd.length>0);
 vd.forEach((d,i)=>{
   const status=stateMarkup(d);
   const b=document.createElement("button");
   b.className="day-card entering";
   b.innerHTML=`<div class="dayline"><div class="day">SECRET ${d.day}</div>${status.lock}</div><div class="date">${d.displayDate}</div><div class="state">${status.state}</div>`;
   b.onclick=()=>openDay(d.day);
   grid.appendChild(b);
 });
 renderScore();
 $("simDateText").textContent=todayISO();
}
function renderQuestion(lines){
 $("puzzleText").innerHTML=lines.map(line=>line===""?`<div class="gap"></div>`:`<span class="line">${line}</span>`).join("");
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
 renderQuestion(currentDay.lines);
 show("puzzle");
 // v0.6: deliberately NO autofocus. Riddle stays in view on mobile.
}
function check(){
 const input=$("answerInput"), value=norm(input.value);
 if(!value)return;
 if(currentDay.answers.includes(value)){
   const tries=attemptsUsed+1;
   saveResult(currentDay.day,{outcome:"solved",attempts:tries,completedAt:new Date().toISOString()});
   input.value="";$("feedback").textContent="Secret unlocked.";$("feedback").className="feedback good";$("attempts").textContent="";
   setTimeout(()=>show("success"),220);return;
 }
 attemptsUsed++;
 input.value="";
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
$("scrollCue").onclick=()=>$("answerArea").scrollIntoView({behavior:"smooth",block:"start"});
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
$("watchBtn").onclick=()=>window.open(currentDay.video,"_blank","noopener,noreferrer");
document.querySelectorAll("[data-home]").forEach(b=>b.onclick=()=>{renderGrid();show("home")});
renderGrid();

if("serviceWorker" in navigator){
 window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
}
