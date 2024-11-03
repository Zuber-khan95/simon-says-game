h3=document.querySelector("h3");
let levels=[];
let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let btns=["red","green","yellow","purple"];

document.addEventListener("keypress",function(){
    if(started==false)
    {
        console.log("Game has started.");
        started=true;
        levelUp();
    }
})

function levelUp()
{
    userSeq=[];
    level++;
    let h3=document.querySelector("h3");
    h3.innerText=`Level ${level}`;
 let randIdx=Math.floor(Math.random()*3) ; 
 let randColor=btns[randIdx];
 let randBtn=document.querySelector(`.${randColor}`);
 btnFlash(randBtn) ;
 gameSeq.push(randColor);
 console.dir(gameSeq);
}
function btnFlash(btn)
{
    btn.classList.add("gameFlash");
    setTimeout(function(){
        btn.classList.remove("gameFlash");
    },250);
}
function btnPressed(){
    let btn=this;
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250)
    let userColor=btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAnswer(userSeq.length-1);



}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPressed);
}

function checkAnswer(Index)
{
    console.log("curr_level:",Index);
   
if(userSeq[Index]==gameSeq[Index])
{
   if(userSeq.length==gameSeq.length)
   {
    // levelUp();
    setInterval(levelUp(),1000);
   }

}
else{
   
    h3.innerHTML=`Game Over! Your score was <strong>${level}</strong>.<br>Press any key to start again.`;
    levels.push(level);
    let highestLevel=highlevel(levels);
    h2=document.querySelector("h2");
    h2.innerText=`Highest score:${highestLevel}`;
    document.querySelector("body").style.backgroundColor="red";
   setInterval(function(){
    document.querySelector("body").style.backgroundColor="white";
   },150);
    reset();

}
}

function reset(){
started=false;
gameSeq=[];
userSeq=[];
level=0;
}


function highlevel(a)
{
let max=-1;
for(let i=0;i<a.length;i++)
{
    if(max<a[i])
    {
        max=a[i];
    }
    
    }
    return max;

}
