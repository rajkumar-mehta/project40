
const TEST_MODE = true;
const DEFAULT_TEST_DATE = "2026-11-06";
const MAX_ATTEMPTS = 3;

const DAYS = [
 {
  "day": 40,
  "date": "2026-09-27",
  "displayDate": "September 27, 2026",
  "lines": [
   "Forty days before you entered this world,",
   "your story had already begun.",
   "",
   "Your mother could have been anywhere on Earth…",
   "",
   "Can you name the city where she may have been",
   "physically present?"
  ],
  "answerDisplay": "DUBAI",
  "answers": [
   "dubai"
  ],
  "hint": "Think of a city in the United Arab Emirates.",
  "video": "https://youtu.be/z3DiPjZfbFY"
 },
 {
  "day": 39,
  "date": "2026-09-28",
  "displayDate": "September 28, 2026",
  "lines": [
   "I have cities, but no houses.",
   "I have mountains, but no trees.",
   "I have water, but no fish.",
   "",
   "What am I?"
  ],
  "answerDisplay": "A MAP",
  "answers": [
   "map",
   "a map"
  ],
  "hint": "You might use one before a hiking or travel adventure.",
  "video": "https://www.youtube.com/results?search_query=top+hindi+songs+2026"
 },
 {
  "day": 38,
  "date": "2026-09-29",
  "displayDate": "September 29, 2026",
  "lines": [
   "The more of me you take,",
   "the more you leave behind.",
   "",
   "What am I?"
  ],
  "answerDisplay": "FOOTSTEPS",
  "answers": [
   "footsteps",
   "steps"
  ],
  "hint": "Think about what follows you on a hike.",
  "video": "https://www.youtube.com/results?search_query=best+hindi+songs+2026"
 },
 {
  "day": 37,
  "date": "2026-09-30",
  "displayDate": "September 30, 2026",
  "lines": [
   "I travel around the world",
   "while staying in one corner.",
   "",
   "What am I?"
  ],
  "answerDisplay": "A STAMP",
  "answers": [
   "stamp",
   "a stamp",
   "postage stamp"
  ],
  "hint": "Travel, envelopes, and one small corner.",
  "video": "https://www.youtube.com/results?search_query=2026+bollywood+hits"
 },
 {
  "day": 36,
  "date": "2026-10-01",
  "displayDate": "October 1, 2026",
  "lines": [
   "What gets wetter",
   "the more it dries?"
  ],
  "answerDisplay": "A TOWEL",
  "answers": [
   "towel",
   "a towel"
  ],
  "hint": "You might need one after a spa day.",
  "video": "https://www.youtube.com/results?search_query=top+10+bollywood+songs+2026"
 },
 {
  "day": 35,
  "date": "2026-10-02",
  "displayDate": "October 2, 2026",
  "lines": [
   "What has many keys",
   "but can’t open a single lock?"
  ],
  "answerDisplay": "A PIANO",
  "answers": [
   "piano",
   "a piano",
   "keyboard"
  ],
  "hint": "These keys make music.",
  "video": "https://www.youtube.com/results?search_query=hindi+romantic+songs+2026"
 },
 {
  "day": 34,
  "date": "2026-10-03",
  "displayDate": "October 3, 2026",
  "lines": [
   "What has hands but cannot clap?"
  ],
  "answerDisplay": "A CLOCK",
  "answers": [
   "clock",
   "a clock"
  ],
  "hint": "It tells time.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+34"
 },
 {
  "day": 33,
  "date": "2026-10-04",
  "displayDate": "October 4, 2026",
  "lines": [
   "What has a neck but no head?"
  ],
  "answerDisplay": "A BOTTLE",
  "answers": [
   "bottle",
   "a bottle"
  ],
  "hint": "You might drink from it.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+33"
 },
 {
  "day": 32,
  "date": "2026-10-05",
  "displayDate": "October 5, 2026",
  "lines": [
   "What has one eye but cannot see?"
  ],
  "answerDisplay": "A NEEDLE",
  "answers": [
   "needle",
   "a needle"
  ],
  "hint": "Think sewing.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+32"
 },
 {
  "day": 31,
  "date": "2026-10-06",
  "displayDate": "October 6, 2026",
  "lines": [
   "What has many teeth but cannot bite?"
  ],
  "answerDisplay": "A COMB",
  "answers": [
   "comb",
   "a comb"
  ],
  "hint": "Used for hair.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+31"
 },
 {
  "day": 30,
  "date": "2026-10-07",
  "displayDate": "October 7, 2026",
  "lines": [
   "What goes up but never comes down?"
  ],
  "answerDisplay": "YOUR AGE",
  "answers": [
   "age",
   "your age"
  ],
  "hint": "Birthday-related.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+30"
 },
 {
  "day": 29,
  "date": "2026-10-08",
  "displayDate": "October 8, 2026",
  "lines": [
   "What can fill a room but takes up no space?"
  ],
  "answerDisplay": "LIGHT",
  "answers": [
   "light"
  ],
  "hint": "Flip a switch.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+29"
 },
 {
  "day": 28,
  "date": "2026-10-09",
  "displayDate": "October 9, 2026",
  "lines": [
   "What has words but never speaks?"
  ],
  "answerDisplay": "A BOOK",
  "answers": [
   "book",
   "a book"
  ],
  "hint": "Pages hold it.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+28"
 },
 {
  "day": 27,
  "date": "2026-10-10",
  "displayDate": "October 10, 2026",
  "lines": [
   "What runs but never walks?"
  ],
  "answerDisplay": "WATER",
  "answers": [
   "water",
   "a river",
   "river"
  ],
  "hint": "Think of a river.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+27"
 },
 {
  "day": 26,
  "date": "2026-10-11",
  "displayDate": "October 11, 2026",
  "lines": [
   "What has a face and two hands but no arms or legs?"
  ],
  "answerDisplay": "A CLOCK",
  "answers": [
   "clock",
   "a clock"
  ],
  "hint": "It keeps time.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+26"
 },
 {
  "day": 25,
  "date": "2026-10-12",
  "displayDate": "October 12, 2026",
  "lines": [
   "What can you catch but not throw?"
  ],
  "answerDisplay": "A COLD",
  "answers": [
   "cold",
   "a cold"
  ],
  "hint": "Usually unwanted.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+25"
 },
 {
  "day": 24,
  "date": "2026-10-13",
  "displayDate": "October 13, 2026",
  "lines": [
   "What has a thumb and four fingers but is not alive?"
  ],
  "answerDisplay": "A GLOVE",
  "answers": [
   "glove",
   "a glove"
  ],
  "hint": "Wear it on your hand.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+24"
 },
 {
  "day": 23,
  "date": "2026-10-14",
  "displayDate": "October 14, 2026",
  "lines": [
   "What gets bigger the more you take away?"
  ],
  "answerDisplay": "A HOLE",
  "answers": [
   "hole",
   "a hole"
  ],
  "hint": "Digging makes it larger.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+23"
 },
 {
  "day": 22,
  "date": "2026-10-15",
  "displayDate": "October 15, 2026",
  "lines": [
   "What belongs to you but other people use it more than you do?"
  ],
  "answerDisplay": "YOUR NAME",
  "answers": [
   "name",
   "your name"
  ],
  "hint": "People say it to get your attention.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+22"
 },
 {
  "day": 21,
  "date": "2026-10-16",
  "displayDate": "October 16, 2026",
  "lines": [
   "What has lots of eyes but cannot see?"
  ],
  "answerDisplay": "A POTATO",
  "answers": [
   "potato",
   "a potato"
  ],
  "hint": "A vegetable with 'eyes'.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+21"
 },
 {
  "day": 20,
  "date": "2026-10-17",
  "displayDate": "October 17, 2026",
  "lines": [
   "What has many rings but no fingers?"
  ],
  "answerDisplay": "A TELEPHONE",
  "answers": [
   "telephone",
   "phone",
   "a phone"
  ],
  "hint": "It can ring.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+20"
 },
 {
  "day": 19,
  "date": "2026-10-18",
  "displayDate": "October 18, 2026",
  "lines": [
   "What kind of room has no doors or windows?"
  ],
  "answerDisplay": "A MUSHROOM",
  "answers": [
   "mushroom",
   "a mushroom"
  ],
  "hint": "A wordplay answer.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+19"
 },
 {
  "day": 18,
  "date": "2026-10-19",
  "displayDate": "October 19, 2026",
  "lines": [
   "What can travel around the world without leaving its spot?"
  ],
  "answerDisplay": "A STAMP",
  "answers": [
   "stamp",
   "a stamp"
  ],
  "hint": "It sits on mail.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+18"
 },
 {
  "day": 17,
  "date": "2026-10-20",
  "displayDate": "October 20, 2026",
  "lines": [
   "What has a head and a tail but no body?"
  ],
  "answerDisplay": "A COIN",
  "answers": [
   "coin",
   "a coin"
  ],
  "hint": "Flip it.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+17"
 },
 {
  "day": 16,
  "date": "2026-10-21",
  "displayDate": "October 21, 2026",
  "lines": [
   "What has four wheels and flies?"
  ],
  "answerDisplay": "A GARBAGE TRUCK",
  "answers": [
   "garbage truck",
   "a garbage truck"
  ],
  "hint": "The 'flies' are not the vehicle.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+16"
 },
 {
  "day": 15,
  "date": "2026-10-22",
  "displayDate": "October 22, 2026",
  "lines": [
   "What has a bed but never sleeps?"
  ],
  "answerDisplay": "A RIVER",
  "answers": [
   "river",
   "a river"
  ],
  "hint": "It flows.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+15"
 },
 {
  "day": 14,
  "date": "2026-10-23",
  "displayDate": "October 23, 2026",
  "lines": [
   "What has branches but no fruit, trunk, or leaves?"
  ],
  "answerDisplay": "A BANK",
  "answers": [
   "bank",
   "a bank"
  ],
  "hint": "Think business, not trees.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+14"
 },
 {
  "day": 13,
  "date": "2026-10-24",
  "displayDate": "October 24, 2026",
  "lines": [
   "What invention lets you look right through a wall?"
  ],
  "answerDisplay": "A WINDOW",
  "answers": [
   "window",
   "a window"
  ],
  "hint": "Common in every home.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+13"
 },
 {
  "day": 12,
  "date": "2026-10-25",
  "displayDate": "October 25, 2026",
  "lines": [
   "What begins with T, ends with T, and has T in it?"
  ],
  "answerDisplay": "A TEAPOT",
  "answers": [
   "teapot",
   "tea pot",
   "a teapot"
  ],
  "hint": "It holds tea.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+12"
 },
 {
  "day": 11,
  "date": "2026-10-26",
  "displayDate": "October 26, 2026",
  "lines": [
   "What has 13 hearts but no other organs?"
  ],
  "answerDisplay": "A DECK OF CARDS",
  "answers": [
   "deck of cards",
   "cards",
   "a deck of cards"
  ],
  "hint": "Think playing cards.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+11"
 },
 {
  "day": 10,
  "date": "2026-10-27",
  "displayDate": "October 27, 2026",
  "lines": [
   "What can be broken without being touched?"
  ],
  "answerDisplay": "A PROMISE",
  "answers": [
   "promise",
   "a promise"
  ],
  "hint": "It depends on trust.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+10"
 },
 {
  "day": 9,
  "date": "2026-10-28",
  "displayDate": "October 28, 2026",
  "lines": [
   "What gets sharper the more you use it?"
  ],
  "answerDisplay": "YOUR BRAIN",
  "answers": [
   "brain",
   "your brain"
  ],
  "hint": "A thinking answer.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+9"
 },
 {
  "day": 8,
  "date": "2026-10-29",
  "displayDate": "October 29, 2026",
  "lines": [
   "What comes once in a minute, twice in a moment, but never in a thousand years?"
  ],
  "answerDisplay": "THE LETTER M",
  "answers": [
   "m",
   "letter m",
   "the letter m"
  ],
  "hint": "Look at the spelling.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+8"
 },
 {
  "day": 7,
  "date": "2026-10-30",
  "displayDate": "October 30, 2026",
  "lines": [
   "What can you hold without ever touching it?"
  ],
  "answerDisplay": "A CONVERSATION",
  "answers": [
   "conversation",
   "a conversation"
  ],
  "hint": "You can 'hold' one with someone.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+7"
 },
 {
  "day": 6,
  "date": "2026-10-31",
  "displayDate": "October 31, 2026",
  "lines": [
   "What has ears but cannot hear?"
  ],
  "answerDisplay": "CORN",
  "answers": [
   "corn",
   "an ear of corn",
   "ear of corn"
  ],
  "hint": "Think food.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+6"
 },
 {
  "day": 5,
  "date": "2026-11-01",
  "displayDate": "November 1, 2026",
  "lines": [
   "What can be seen once in a year, twice in a week, and never in a day?"
  ],
  "answerDisplay": "THE LETTER E",
  "answers": [
   "e",
   "letter e",
   "the letter e"
  ],
  "hint": "Look at the words.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+5"
 },
 {
  "day": 4,
  "date": "2026-11-02",
  "displayDate": "November 2, 2026",
  "lines": [
   "What kind of band never plays music?"
  ],
  "answerDisplay": "A RUBBER BAND",
  "answers": [
   "rubber band",
   "a rubber band"
  ],
  "hint": "It stretches.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+4"
 },
 {
  "day": 3,
  "date": "2026-11-03",
  "displayDate": "November 3, 2026",
  "lines": [
   "What has a bottom at the top?"
  ],
  "answerDisplay": "YOUR LEGS",
  "answers": [
   "legs",
   "your legs"
  ],
  "hint": "Think anatomy and wordplay.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+3"
 },
 {
  "day": 2,
  "date": "2026-11-04",
  "displayDate": "November 4, 2026",
  "lines": [
   "What can you keep after giving it to someone?"
  ],
  "answerDisplay": "YOUR WORD",
  "answers": [
   "word",
   "your word"
  ],
  "hint": "A promise-related phrase.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+2"
 },
 {
  "day": 1,
  "date": "2026-11-05",
  "displayDate": "November 5, 2026",
  "lines": [
   "What has no beginning, end, or middle?"
  ],
  "answerDisplay": "A DONUT",
  "answers": [
   "donut",
   "doughnut",
   "a donut",
   "a doughnut"
  ],
  "hint": "Think round and delicious.",
  "video": "https://www.youtube.com/results?search_query=hindi+songs+2026+day+1"
 },
 {
  "day": 0,
  "date": "2026-11-06",
  "displayDate": "November 6, 2026",
  "lines": [
   "I come once every year,",
   "but today I arrive with forty candles.",
   "",
   "What am I?"
  ],
  "answerDisplay": "A BIRTHDAY",
  "answers": [
   "birthday",
   "a birthday",
   "40th birthday",
   "fortieth birthday"
  ],
  "hint": "Today, this celebration belongs entirely to you.",
  "video": "https://www.youtube.com/results?search_query=happy+birthday+hindi+song"
 }
];

const WRONG_MESSAGES=[
 "Not quite 😏 Two guesses left.",
 "Still locked 🔒 One guess left.",
 "Nope 😂 The mystery wins this round."
];

const ANSWER_PLACEHOLDERS=[
 "3 GUESSES — ENTER YOUR ANSWER",
 "2 GUESSES LEFT — TRY AGAIN",
 "1 GUESS LEFT — MAKE IT COUNT",
 ""
];

let currentDay=DAYS[0], attemptsUsed=0;
let wrongPopupAwaitingAck=false, wrongPopupSuppressClickUntil=0, wrongPopupReadyAt=0;
let confirmGiveUpReadyAt=0, confirmGiveUpUnlockTimer=0;

const $=id=>document.getElementById(id);

function isLikelyPhone(){
 const ua=navigator.userAgent||"";
 return /Android.*Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(ua) ||
   ((window.matchMedia?.("(pointer: coarse)").matches||false) &&
    Math.min(window.screen.width||9999,window.screen.height||9999)<=900);
}
function fitRevealAnswer(text){
 const el=$("answerReveal"); if(!el) return;
 const n=(text||"").trim().length;
 el.style.fontSize=n<=8?"clamp(48px,14vw,86px)":n<=14?"clamp(38px,10.5vw,68px)":n<=22?"clamp(29px,8vw,54px)":"clamp(23px,6.4vw,42px)";
}
function hidePhoneQr(){
 const phone=isLikelyPhone();
 document.querySelectorAll("#video .divider,#video .qr-wrap,#video .qr-wrap + .muted.small,#finale .divider,#finale .qr-wrap,#finale .qr-wrap + .muted.small")
 .forEach(el=>el.style.display=phone?"none":"");
}
function keyboardOffset(){
 const vv=window.visualViewport;
 return vv?Math.max(0,window.innerHeight-vv.height-vv.offsetTop):0;
}
function positionKeyboardUI(){
 const vv=window.visualViewport;
 document.documentElement.style.setProperty("--keyboard-offset",keyboardOffset()+"px");
 if(vv){
   document.documentElement.style.setProperty("--visual-top",vv.offsetTop+"px");
   document.documentElement.style.setProperty("--visual-height",vv.height+"px");
 }
 const p=$("wrongAnswerPopover");
 if(p && p.classList.contains("show") && isLikelyPhone()){
   requestAnimationFrame(()=>{
     const rawViewportTop=vv?vv.offsetTop:0;
     const viewportHeight=vv?vv.height:window.innerHeight;
     // v2.17 surgical first-attempt guard:
     // On Android Chrome, the FIRST keyboard session can report a positive
     // VisualViewport.offsetTop after Mika manually scrolls with the keyboard
     // still open. The popup is already position:fixed, so applying that
     // transient offset again can push only the first (Yellow) popup behind
     // the keyboard. Preserve the stable v2.16/v2.7 positioning everywhere
     // else; clamp only attempt 1 while the soft keyboard is clearly open.
     const keyboardIsOpen=!!vv && (window.innerHeight-vv.height)>120;
     const firstWrongAfterKeyboardScroll=keyboardIsOpen && p.dataset.mode==="wrong" && p.dataset.attempt==="1" && rawViewportTop>4;
     const viewportTop=firstWrongAfterKeyboardScroll?0:rawViewportTop;
     const safeGap=10;
     const maxH=Math.max(104,viewportHeight-(safeGap*2));
     p.style.maxHeight=maxH+"px";
     p.style.bottom="auto";
     p.style.top=(viewportTop+safeGap)+"px";
     requestAnimationFrame(()=>{
       const h=Math.min(p.offsetHeight,maxH);
       const top=Math.max(viewportTop+safeGap,viewportTop+viewportHeight-h-safeGap);
       const currentTop=parseFloat(p.style.top);
       // Keep the exact v2.7 placement model, but ignore tiny Android/SwiftKey
       // visualViewport jitter that made an already-correct popup visibly flicker.
       if(!Number.isFinite(currentTop) || Math.abs(currentTop-top)>=3){
         p.style.top=top+"px";
       }
     });
   });
 }
}
function keepAnswerVisible(){
 if(!isLikelyPhone()) return;
 const input=$("answerInput"), vv=window.visualViewport;
 if(!input) return;
 if(!vv){input.scrollIntoView({block:"center",behavior:"smooth"});return}
 const r=input.getBoundingClientRect(), bottom=vv.offsetTop+vv.height-22;
 if(r.bottom>bottom || r.top<vv.offsetTop+12){
   input.scrollIntoView({block:"center",behavior:"smooth"});
 }
}
function refocusAnswer(adjust=true){
 const input=$("answerInput"); if(!input||input.disabled)return;
 requestAnimationFrame(()=>{
   try{input.focus({preventScroll:true})}catch{input.focus()}
   if(adjust){setTimeout(keepAnswerVisible,180);setTimeout(keepAnswerVisible,420)}
 });
}
function openConfirmGiveUpGuarded(){
 // Mobile Chrome can synthesize a follow-up click after the pointerup that
 // dismisses the surrender popup. If the confirm screen is already live, that
 // ghost click can hit WAIT or SAVE ME and make the screen appear to skip.
 // Keep both controls inert until the originating tap sequence is safely over.
 const tryAgain=$("tryAgainBtn"), saveMe=$("saveMeBtn");
 clearTimeout(confirmGiveUpUnlockTimer);
 confirmGiveUpReadyAt=Date.now()+550;
 if(tryAgain) tryAgain.disabled=true;
 if(saveMe) saveMe.disabled=true;
 show("confirmGiveUp");
 confirmGiveUpUnlockTimer=setTimeout(()=>{
   if($("confirmGiveUp")?.classList.contains("active")){
     if(tryAgain) tryAgain.disabled=false;
     if(saveMe) saveMe.disabled=false;
   }
 },560);
}
function acknowledgeWrongPopup(p){
 if(!p || !p.classList.contains("show")) return;
 wrongPopupAwaitingAck=false;
 const backdrop=$("wrongAnswerBackdrop");
 if(p.dataset.mode==="surrender"){
   p.classList.remove("show");
   if(backdrop) backdrop.remove();
   openConfirmGiveUpGuarded();
   return;
 }
 const showSurrender=p.dataset.after==="surrender";
 p.classList.remove("show");
 p.setAttribute("aria-hidden","true");
 if(backdrop) backdrop.remove();
 if(showSurrender){
   requestAnimationFrame(()=>requestAnimationFrame(showSurrenderPopup));
 }
}
function buildWrongPopup(){
 // v2.7: fresh modal + backdrop for every failed attempt. The backdrop blocks
 // ghost taps from landing on HOME or puzzle controls while the keyboard resizes.
 const old=$("wrongAnswerPopover"); if(old) old.remove();
 const oldBackdrop=$("wrongAnswerBackdrop"); if(oldBackdrop) oldBackdrop.remove();

 const backdrop=document.createElement("div");
 backdrop.id="wrongAnswerBackdrop";
 backdrop.className="wrong-answer-backdrop";
 backdrop.setAttribute("aria-hidden","true");

 const p=document.createElement("div");
 p.id="wrongAnswerPopover"; p.className="wrong-answer-popover";
 p.setAttribute("role","dialog"); p.setAttribute("aria-live","assertive"); p.setAttribute("aria-hidden","true");
 p.innerHTML='<div class="wap-message"></div><div class="wap-remaining"></div><button class="wap-ok" type="button">OK</button>';

 backdrop.appendChild(p);
 document.body.appendChild(backdrop);

 backdrop.addEventListener("pointerdown",e=>{ if(e.target===backdrop) e.preventDefault(); });
 backdrop.addEventListener("click",e=>{ if(e.target===backdrop){e.preventDefault();e.stopPropagation();} });

 const ok=p.querySelector(".wap-ok");
 ok.addEventListener("pointerdown",e=>{
   if(isLikelyPhone() && p.dataset.mode!=="surrender") e.preventDefault();
 });
 ok.addEventListener("pointerup",e=>{
   if(!isLikelyPhone()) return;
   e.preventDefault(); e.stopPropagation();
   if(Date.now()<wrongPopupReadyAt) return;
   wrongPopupSuppressClickUntil=Date.now()+350;
   acknowledgeWrongPopup(p);
 });
 ok.addEventListener("click",e=>{
   if(Date.now()<wrongPopupReadyAt || Date.now()<wrongPopupSuppressClickUntil){e.preventDefault();return;}
   acknowledgeWrongPopup(p);
 });
 return p;
}
function ensureWrongPopup(){
 return $("wrongAnswerPopover") || buildWrongPopup();
}
function showWrongPopup(message,remaining){
 if(!isLikelyPhone())return false;
 // Fresh DOM instance for EVERY attempt. The attempt cannot be submitted again
 // until this exact instance is acknowledged because wrongPopupAwaitingAck=true.
 const p=buildWrongPopup();
 wrongPopupAwaitingAck=true;
 p.dataset.mode="wrong";
 p.dataset.attempt=String(MAX_ATTEMPTS-remaining);
 p.dataset.after=remaining===0?"surrender":"";
 p.querySelector(".wap-message").textContent=message;
 // The fixed attempt-specific sentence already carries the countdown. Keep the
 // second line empty so the mobile popup stays short and never repeats itself.
 p.querySelector(".wap-remaining").textContent="";
 p.querySelector(".wap-ok").textContent="OK";
 wrongPopupReadyAt=Date.now()+400;
 const backdrop=$("wrongAnswerBackdrop");
 if(backdrop){backdrop.classList.add("show");backdrop.setAttribute("aria-hidden","false");}
 p.classList.add("show");
 p.setAttribute("aria-hidden","false");
 // v2.14 is intentionally based on the stable v2.7 popup code. Keep the
 // same placement sequence, but conceal the modal during those first layout
 // passes so the user sees only the final stable position instead of flicker.
 p.style.visibility="hidden";
 p.style.opacity="0";
 positionKeyboardUI();
 requestAnimationFrame(()=>{positionKeyboardUI(); requestAnimationFrame(positionKeyboardUI);});
 setTimeout(positionKeyboardUI,80);
 setTimeout(()=>{
   positionKeyboardUI();
   requestAnimationFrame(()=>{
     if(!p.isConnected || !p.classList.contains("show")) return;
     p.style.visibility="visible";
     p.style.opacity="1";
   });
 },220);
 return true;
}
function showSurrenderPopup(){
 if(!isLikelyPhone())return false;
 const p=buildWrongPopup();
 wrongPopupAwaitingAck=true;
 p.dataset.mode="surrender";
 p.dataset.attempt="";
 p.dataset.after="";
 p.querySelector(".wap-message").textContent="I GIVE UP — I'M SO OLD… I'M ABOUT TO TURN 40! 😂";
 p.querySelector(".wap-remaining").textContent="The mystery wins this round.";
 p.querySelector(".wap-ok").textContent="I GIVE UP 😂";
 wrongPopupReadyAt=Date.now()+400;
 const backdrop=$("wrongAnswerBackdrop");
 if(backdrop){backdrop.classList.add("show");backdrop.setAttribute("aria-hidden","false");}
 p.classList.add("show");
 p.setAttribute("aria-hidden","false");
 // v2.14 is intentionally based on the stable v2.7 popup code. Keep the
 // same placement sequence, but conceal the modal during those first layout
 // passes so the user sees only the final stable position instead of flicker.
 p.style.visibility="hidden";
 p.style.opacity="0";
 positionKeyboardUI();
 requestAnimationFrame(()=>{positionKeyboardUI(); requestAnimationFrame(positionKeyboardUI);});
 setTimeout(positionKeyboardUI,80);
 setTimeout(()=>{
   positionKeyboardUI();
   requestAnimationFrame(()=>{
     if(!p.isConnected || !p.classList.contains("show")) return;
     p.style.visibility="visible";
     p.style.opacity="1";
   });
 },220);
 return true;
}

const screens=[...document.querySelectorAll(".screen")];
const params=new URLSearchParams(location.search);

function normalizeTestDate(raw){
 if(!raw) return DEFAULT_TEST_DATE;
 if(/^\d{4}$/.test(raw)){
   const mm=raw.slice(0,2), dd=raw.slice(2,4);
   return `2026-${mm}-${dd}`;
 }
 return raw;
}
function todayISO(){
 if(TEST_MODE) return normalizeTestDate(params.get("testDate"));
 const d=new Date();
 return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function show(id){
 screens.forEach(s=>s.classList.toggle("active",s.id===id));
 document.body.classList.toggle("home-active",id==="home");
 if(id!=="puzzle") document.body.classList.remove("answer-entry-active");
 if(id!=="home"){
   document.body.classList.remove("home-grid-scrolled","portrait-score-fixed");
   portraitScoreTop=0;
 }
 window.scrollTo({top:0,left:0,behavior:"auto"});
 setTimeout(()=>{
   hidePhoneQr();
   if(id==="home"){document.body.classList.remove("portrait-score-fixed");portraitScoreTop=0;measurePortraitScore();syncPortraitScoreFreeze();}
 },0);
}
function norm(v){return v.trim().toLowerCase().replace(/\s+/g," ")}
function key(day){return `mika40_day_${day}`}
function getResult(day){try{return JSON.parse(localStorage.getItem(key(day))||"null")}catch{return null}}
function saveResult(day,result){localStorage.setItem(key(day),JSON.stringify(result))}
function isVisible(d){return d.date<=todayISO()}
function wrongMessageForAttempt(attemptNumber){
 return WRONG_MESSAGES[Math.max(0,Math.min(WRONG_MESSAGES.length-1,attemptNumber-1))];
}
function syncAnswerPlaceholder(){
 const input=$("answerInput");
 if(!input) return;
 input.placeholder=ANSWER_PLACEHOLDERS[Math.max(0,Math.min(ANSWER_PLACEHOLDERS.length-1,attemptsUsed))];
}
function dateValue(iso){
 const [y,m,d]=iso.split("-").map(Number);
 return Date.UTC(y,m-1,d);
}
function visibleDays(){
 return DAYS
   .filter(isVisible)
   .slice()
   .sort((a,b)=>dateValue(b.date)-dateValue(a.date)); // newest first, deterministic across browsers
}
function computeStats(){
 const ordered=DAYS.filter(isVisible).slice().sort((a,b)=>dateValue(a.date)-dateValue(b.date)); // chronological
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

function syncMobileHomeChrome(){
 const grid=$("dayGrid");
 if(!grid) return;
 const mobile=window.matchMedia("(max-width: 620px)").matches;
 if(!mobile){
   document.body.classList.remove("home-grid-scrolled");
   return;
 }
 document.body.classList.toggle("home-grid-scrolled",grid.scrollTop>18);
}

let mobileHomeScrollBound=false;
function bindMobileHomeScroll(){
 if(mobileHomeScrollBound) return;
 const grid=$("dayGrid");
 if(!grid) return;
 grid.addEventListener("scroll",syncMobileHomeChrome,{passive:true});
 window.addEventListener("resize",syncMobileHomeChrome,{passive:true});
 window.addEventListener("orientationchange",()=>setTimeout(syncMobileHomeChrome,120),{passive:true});
 mobileHomeScrollBound=true;
}

let portraitScoreBound=false, portraitScoreTop=0;
function measurePortraitScore(){
 const score=document.querySelector("#home .score-card");
 if(!score) return;
 const portrait=window.matchMedia("(max-width: 620px) and (orientation: portrait)").matches;
 if(!portrait || !document.body.classList.contains("home-active")){
   document.body.classList.remove("portrait-score-fixed");
   return;
 }
 // Measure in normal flow only. Once fixed, preserve the previously measured threshold.
 if(!document.body.classList.contains("portrait-score-fixed")){
   portraitScoreTop=score.getBoundingClientRect().top+window.scrollY;
 }
 const r=score.getBoundingClientRect();
 document.documentElement.style.setProperty("--portrait-score-left",r.left+"px");
 document.documentElement.style.setProperty("--portrait-score-width",r.width+"px");
 document.documentElement.style.setProperty("--portrait-score-space",(r.height+6)+"px");
}
function syncPortraitScoreFreeze(){
 const portrait=window.matchMedia("(max-width: 620px) and (orientation: portrait)").matches;
 if(!portrait || !document.body.classList.contains("home-active")){
   document.body.classList.remove("portrait-score-fixed");
   return;
 }
 const topPad=8;
 if(!portraitScoreTop) measurePortraitScore();
 document.body.classList.toggle("portrait-score-fixed",window.scrollY>=Math.max(0,portraitScoreTop-topPad));
}
function bindPortraitScoreFreeze(){
 if(portraitScoreBound) return;
 window.addEventListener("scroll",syncPortraitScoreFreeze,{passive:true});
 window.addEventListener("resize",()=>{document.body.classList.remove("portrait-score-fixed");portraitScoreTop=0;requestAnimationFrame(()=>{measurePortraitScore();syncPortraitScoreFreeze();});},{passive:true});
 window.addEventListener("orientationchange",()=>setTimeout(()=>{document.body.classList.remove("portrait-score-fixed");portraitScoreTop=0;measurePortraitScore();syncPortraitScoreFreeze();},140),{passive:true});
 portraitScoreBound=true;
}

function lockIcon(open=false){
 const klass=open ? "state-icon solved-icon" : "state-icon unsolved-icon";
 const path=open
   ? `<path d="M8.4 10V7.3a3.6 3.6 0 0 1 6.7-1.8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <rect x="6" y="10" width="12" height="10" rx="2.2" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="15" r="1.2" fill="currentColor"/>`
   : `<path d="M8.5 10V7.3a3.5 3.5 0 0 1 7 0V10" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      <rect x="6" y="10" width="12" height="10" rx="2.2" fill="none" stroke="currentColor" stroke-width="2"/>
      <circle cx="12" cy="15" r="1.2" fill="currentColor"/>`;
 return `<svg class="${klass}" viewBox="0 0 24 24" aria-hidden="true">${path}</svg>`;
}
function flagIcon(){
 return `<svg class="state-icon flag-icon" viewBox="0 0 24 24" aria-hidden="true">
   <path d="M7 21V3" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
   <path d="M8 4h9l-2.2 3L17 10H8z" fill="currentColor"/>
 </svg>`;
}

function stateMarkup(d){
 const r=getResult(d.day);
 if(r?.outcome==="solved"){
   if(d.day===0){
     return {
       icon:lockIcon(true),
       state:`<span class="solved">🎉 HAPPY BIRTHDAY!</span>`
     };
   }
   return {
     icon:lockIcon(true),
     state:`<span class="solved">MYSTERY SOLVED · ${r.attempts} ATTEMPT${r.attempts===1?"":"S"}</span>`
   };
 }
 if(r?.outcome==="gave-up"){
   return {
     icon:flagIcon(),
     state:`<span class="flag">THE MYSTERY WON THIS ONE</span>`
   };
 }
 return {
   icon:lockIcon(false),
   state:`<span class="ready">READY TO UNLOCK</span>`
 };
}
function renderGrid(){
 const grid=$("dayGrid");grid.innerHTML="";
 const vd=visibleDays();
 $("emptyState").classList.toggle("hidden",vd.length>0);
 vd.forEach((d,i)=>{
   const status=stateMarkup(d);
   const b=document.createElement("button");
   b.className="day-card entering";
   const todayChip=d.date===todayISO()?`<span class="today-chip">TODAY</span>`:"";
   b.dataset.secret=String(d.day);
   b.dataset.date=d.date;
   b.innerHTML=`<div class="dayline"><div class="day"><span class="exit-word">EXIT</span><span class="exit-number">${d.day}</span></div>${status.icon}</div><div class="date">${d.displayDate} ${todayChip}</div><div class="state">${status.state}</div>`;
   b.onclick=()=>openDay(d.day);
   grid.appendChild(b);
 });
 renderScore();
 $("simDateText").textContent=todayISO();
 bindMobileHomeScroll();
 bindPortraitScoreFreeze();
 requestAnimationFrame(()=>{measurePortraitScore();syncPortraitScoreFreeze();syncMobileHomeChrome();});
}
function renderQuestion(lines){
 $("puzzleText").innerHTML=lines.map(line=>line===""?`<div class="gap"></div>`:`<span class="line">${line}</span>`).join("");
}
function resetPuzzle(){
 attemptsUsed=0;
 wrongPopupAwaitingAck=false;
 $("answerInput").value="";$("answerInput").disabled=false;
 syncAnswerPlaceholder();
 $("feedback").textContent="";$("attempts").textContent="";
 $("giveUpBtn").classList.add("hidden");$("submitBtn").disabled=false;
 const popup=$("wrongAnswerPopover"); if(popup) popup.remove(); const backdrop=$("wrongAnswerBackdrop"); if(backdrop) backdrop.remove();
}
function openDay(n){
 currentDay=DAYS.find(d=>d.day===n);
 const existing=getResult(currentDay.day);

 // Completed EXITs never reopen the riddle or alter saved stats.
 if(existing?.outcome==="solved"){
   if(currentDay.day===0) openBirthdayFinale();
   else openSurprise(true);
   return;
 }
 if(existing?.outcome==="gave-up"){
   $("answerReveal").textContent=currentDay.answerDisplay; fitRevealAnswer(currentDay.answerDisplay);
   show("surrender");
   return;
 }

 resetPuzzle();
 $("dayEyebrow").textContent=`EXIT ${currentDay.day} · ${currentDay.displayDate.toUpperCase()}`;
 renderQuestion(currentDay.lines);
 show("puzzle");
}
function check(){
 if(wrongPopupAwaitingAck) return;
 const input=$("answerInput"), value=norm(input.value);
 if(!value)return;
 if(currentDay.answers.includes(value)){
   const tries=attemptsUsed+1;
   saveResult(currentDay.day,{outcome:"solved",attempts:tries,completedAt:new Date().toISOString()});
   input.value="";
   if(currentDay.day===0) openBirthdayFinale();
   else openSurprise(true);
   return;
 }
 attemptsUsed++;
 input.value="";
 const remaining=MAX_ATTEMPTS-attemptsUsed;
 const wrongMessage=wrongMessageForAttempt(attemptsUsed);
 syncAnswerPlaceholder();
 $("feedback").textContent=isLikelyPhone()?"":wrongMessage;$("feedback").className="feedback bad";
 $("attempts").textContent=isLikelyPhone()?"":(remaining>0?`${remaining} attempt${remaining===1?"":"s"} remaining`:"Three attempts used.");
 if(remaining===0){
   $("submitBtn").disabled=true;
   if(isLikelyPhone()){
     // Keep the focused input alive so Android/iOS do not close and reopen
     // the keyboard while the third-failure and surrender popups are shown.
     $("giveUpBtn").classList.add("hidden");
     showWrongPopup(wrongMessage,0);
   }else{
     input.disabled=true;
     $("giveUpBtn").classList.remove("hidden");
   }
 }else{
   if(!showWrongPopup(wrongMessage,remaining)) refocusAnswer(false);
 }
}
const submitButton=$("submitBtn");
let suppressSubmitClickUntil=0;
submitButton.addEventListener("pointerdown",e=>{
  const input=$("answerInput");
  if(isLikelyPhone() && document.activeElement===input && e.pointerType!=="mouse"){
    // Prevent focus moving from the input to the button. We execute the submit
    // on pointerup instead so the soft keyboard remains continuously open.
    e.preventDefault();
    submitButton.dataset.keepFocusTap="1";
  }
});
submitButton.addEventListener("pointerup",e=>{
  if(submitButton.dataset.keepFocusTap==="1"){
    delete submitButton.dataset.keepFocusTap;
    e.preventDefault();
    suppressSubmitClickUntil=Date.now()+500;
    if(!submitButton.disabled) check();
  }
});
submitButton.onclick=()=>{
  if(Date.now()<suppressSubmitClickUntil) return;
  check();
};
$("answerInput").addEventListener("beforeinput",e=>{
 if(wrongPopupAwaitingAck){e.preventDefault();e.stopPropagation();}
});
$("answerInput").addEventListener("paste",e=>{
 if(wrongPopupAwaitingAck){e.preventDefault();e.stopPropagation();}
});
$("answerInput").addEventListener("drop",e=>{
 if(wrongPopupAwaitingAck){e.preventDefault();e.stopPropagation();}
});
$("answerInput").addEventListener("keydown",e=>{
 if(wrongPopupAwaitingAck){e.preventDefault();e.stopPropagation();return;}
 if(e.key==="Enter"&&!$("submitBtn").disabled)check();
});
$("answerInput").addEventListener("focus",()=>{
  if(isLikelyPhone()){
    document.body.classList.add("answer-entry-active");
    setTimeout(keepAnswerVisible,180);setTimeout(keepAnswerVisible,420);
  }
});
$("answerInput").addEventListener("blur",()=>{
  setTimeout(()=>{
    if(document.activeElement!==$("answerInput")) document.body.classList.remove("answer-entry-active");
  },80);
});
if(window.visualViewport){
 window.visualViewport.addEventListener("resize",positionKeyboardUI,{passive:true});
 window.visualViewport.addEventListener("scroll",positionKeyboardUI,{passive:true});
}
window.addEventListener("resize",hidePhoneQr,{passive:true});
window.addEventListener("orientationchange",()=>setTimeout(hidePhoneQr,120),{passive:true});
hidePhoneQr();
$("hintBtn").onclick=()=>{$("feedback").textContent=`Hint: ${currentDay.hint}`;$("feedback").className="feedback";};
$("scrollCue").onclick=()=>$("answerArea").scrollIntoView({behavior:"smooth",block:"start"});
$("giveUpBtn").onclick=()=>show("confirmGiveUp");
$("tryAgainBtn").onclick=e=>{
 if(Date.now()<confirmGiveUpReadyAt){e.preventDefault();e.stopPropagation();return;}
 resetPuzzle();show("puzzle");
};
$("saveMeBtn").onclick=e=>{
 if(Date.now()<confirmGiveUpReadyAt){e.preventDefault();e.stopPropagation();return;}
 saveResult(currentDay.day,{outcome:"gave-up",attempts:MAX_ATTEMPTS,completedAt:new Date().toISOString()});
 $("answerReveal").textContent=currentDay.answerDisplay;fitRevealAnswer(currentDay.answerDisplay);show("surrender");
};
function openSurprise(solved=true){
 $("solvedHeading").style.display=solved?"":"none";
 $("solvedSubheading").style.display=solved?"":"none";
 const options=[
   {heading:"OPEN TODAY'S SURPRISE",button:"GRAB YOUR GIFT"},
   {heading:"ENJOY TODAY'S GIFT",button:"REVEAL YOUR SURPRISE"}
 ];
 const pick=options[Math.floor(Math.random()*options.length)];
 $("giftHeading").textContent=pick.heading;
 $("watchBtn").textContent=pick.button;
 $("qrImage").src=`https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(currentDay.video)}`;
 $("videoEyebrow").textContent=`EXIT ${currentDay.day} UNLOCKED`;
 show("video");
}

function launchBirthdayCelebration(){
 const layer=$("celebrationLayer");
 if(!layer) return;

 // Put the effect layer directly under <body>. This avoids mobile browsers
 // clipping fixed-position effects while the finale screen is fading in.
 if(layer.parentElement!==document.body) document.body.appendChild(layer);

 layer.innerHTML="";
 const reduced=window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 layer.classList.toggle("reduced-motion",!!reduced);

 // Reduced-motion still gets a celebration, just fewer/slower elements.
 const confettiCount=reduced?22:60;
 const balloonCount=reduced?5:10;
 const confettiChars=["✦","◆","●","★","♥","✧"];
 const confettiColors=["#ff6680","#ffd166","#b8a8ff","#78c7ff","#ff9ed2","#8ee3c0"];

 // Balloons begin at the QR/reward region instead of the bottom edge.
 // On mobile the QR is hidden, so anchor them just below the primary button.
 const mobileReward=window.matchMedia && window.matchMedia("(max-width: 620px)").matches;
 const qrWrap=document.querySelector("#finale .qr-wrap");
 const birthdayButton=$("birthdaySurpriseBtn");
 let balloonOrigin=Math.round(window.innerHeight*.72);
 if(!mobileReward && qrWrap){
   const qrRect=qrWrap.getBoundingClientRect();
   if(qrRect.height>0) balloonOrigin=Math.round(qrRect.top);
 }else if(birthdayButton){
   const buttonRect=birthdayButton.getBoundingClientRect();
   balloonOrigin=Math.round(Math.min(window.innerHeight-54,buttonRect.bottom+18));
 }
 layer.style.setProperty("--balloon-origin-y",`${balloonOrigin}px`);

 for(let i=0;i<confettiCount;i++){
   const piece=document.createElement("span");
   piece.className="confetti-piece";
   piece.textContent=confettiChars[Math.floor(Math.random()*confettiChars.length)];
   piece.style.left=`${Math.random()*100}%`;
   piece.style.animationDelay=`${Math.random()*.34}s`;
   piece.style.animationDuration=reduced?`${5.8+Math.random()*1.8}s`:`${2.8+Math.random()*2.1}s`;
   piece.style.fontSize=`${9+Math.random()*11}px`;
   piece.style.setProperty("--drift",`${-72+Math.random()*144}px`);
   piece.style.setProperty("--confetti-color",confettiColors[Math.floor(Math.random()*confettiColors.length)]);
   layer.appendChild(piece);
 }

 for(let i=0;i<balloonCount;i++){
   const balloon=document.createElement("span");
   balloon.className="birthday-balloon";
   balloon.textContent="🎈";
   balloon.style.left=`${4+Math.random()*92}%`;
   balloon.style.animationDelay=`${.12+i*.08}s`;
   balloon.style.animationDuration=reduced?`${7.3+Math.random()*1.2}s`:`${4.6+Math.random()*1.2}s`;
   layer.appendChild(balloon);
 }

 window.setTimeout(()=>{ if(layer) layer.innerHTML=""; },reduced?9500:8200);
}
function openBirthdayFinale(){
 $("birthdayQrImage").src=`https://api.qrserver.com/v1/create-qr-code/?size=320x320&data=${encodeURIComponent(currentDay.video)}`;
 show("finale");
 window.setTimeout(launchBirthdayCelebration,260);
}

$("surrenderSurpriseBtn").onclick=()=>currentDay.day===0?openBirthdayFinale():openSurprise(false);
$("watchBtn").onclick=()=>window.open(currentDay.video,"_blank","noopener,noreferrer");
$("birthdaySurpriseBtn").onclick=()=>window.open(currentDay.video,"_blank","noopener,noreferrer");
document.querySelectorAll("[data-home]").forEach(b=>b.onclick=e=>{
 if(wrongPopupAwaitingAck){e.preventDefault();e.stopPropagation();return;}
 renderGrid();show("home");
});
document.body.classList.add("home-active");
renderGrid();


function resetTestProgress(){
 if(!TEST_MODE) return;
 const ok=confirm("Reset all test progress for Mika's 40 Exits on this browser?");
 if(!ok) return;
 for(let day=0; day<=40; day++) localStorage.removeItem(key(day));
 renderGrid();
 show("home");
}
const resetBtn=$("resetTestBtn");
if(resetBtn) resetBtn.onclick=resetTestProgress;

if("serviceWorker" in navigator){
 window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js?v=27").catch(()=>{}));
}

function syncDesktopFrame(){
 if(window.innerWidth<=620)return;
 const score=document.querySelector("#home .score-card");
 if(!score)return;
 const top=parseFloat(getComputedStyle(score).top)||10;
 document.documentElement.style.setProperty("--score-frame-bottom",(top+score.offsetHeight)+"px");
}
window.addEventListener("resize",syncDesktopFrame,{passive:true});
requestAnimationFrame(syncDesktopFrame);


function syncMobileStickyFrame(){
  if(window.innerWidth>620) return;
  const score=document.querySelector("#home .score-card");
  if(!score) return;
  const safeTop=8;
  const bottom=safeTop+score.offsetHeight;
  document.documentElement.style.setProperty("--mobile-score-bottom", bottom+"px");
}
window.addEventListener("resize",syncMobileStickyFrame,{passive:true});
window.addEventListener("orientationchange",()=>setTimeout(syncMobileStickyFrame,150),{passive:true});
requestAnimationFrame(syncMobileStickyFrame);
setTimeout(syncMobileStickyFrame,250);
