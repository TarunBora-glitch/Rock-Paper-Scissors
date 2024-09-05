
let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genComChoice=()=>{
  const options=["rock","paper","scissors"];
  const ranIdx= Math.floor(Math.random()*3);
  return options[ranIdx];
};
const drawGame=()=>{
  console.log("game was draw.");
  msg.innerText="Game was Draw. Play again.";
  msg.style.backgroundColor="#081b31";
};
const showWinner=(userWin,userChoice,compChoice)=>{
  if(userWin){
    userScore++;
    userScorePara.innerHTML=userScore;
    console.log("you win!");
    msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
}else{
  compScore++;
  compScorePara.innerHTML=compScore;
  console.log("you lose.");
  msg.innerText=`You lose. ${compChoice} beats your ${userChoice}`;
  msg.style.backgroundColor="red";
}
};
const playGame=(userChoice)=>{
const compChoice=genComChoice();
if(userChoice===compChoice){
drawGame();
}else{
  let userWin=true;
  if(userChoice==="rock"){
    compChoice==="paper"?false:true;
  }else if(userChoice==="paper"){
    userWin=compChoice==="scissors"?false:true;
  }else{
    compChoice==="rock"?false:true;
  }
  showWinner(userWin,userChoice,compChoice);
}
};
choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
console.log("choice was  click");
playGame(userChoice);
  });
});
