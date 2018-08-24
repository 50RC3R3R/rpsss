let p1,com;
const gameText = document.getElementById("gameText");
const p1Score = document.getElementById("playerScore");
const cScore = document.getElementById("comScore");
let _comScoreCounter = 0;
let _p1ScoreCounter = 0;
function comSelect(){
  com = Math.floor(Math.random()*5);
  switch(com){
    case 0:
      com = "rock";
      break;
    case 1:
      com = "paper";
      break;
    case 2:
      com = "scissors";
      break;
    case 3:
      com = "shoe";
      break;
    case 4:
      com = "shoot";
      break;
  }
  return com;
} //end of com sel func
function playRpsss(player) {
  //document.getElementById("player").style = "background-color";
  comSelect();
  if (player === "rock") {
    switch(com) {
    case "paper":
      gameText.innerHTML = "Paper covers Rock. Computer Wins.";
      console.log("Paper covers Rock. Computer Wins.");
      _comScoreCounter++;
      cScore.innerHTML = _comScoreCounter;
      break;
    case "scissors":
      gameText.innerHTML = "Rock breaks Scissors. You Win!";
      console.log("Rock breaks Scissors. You Win!");
      _p1ScoreCounter++;
      p1Score.innerHTML = _p1ScoreCounter;
      break;
    case "shoe":
      gameText.innerHTML = "Shoe kicks Rock. Computer Wins.";
      console.log("Shoe kicks Rock. Computer Wins.");
      _comScoreCounter++;
      cScore.innerHTML = _comScoreCounter;
      break;
    case "shoot":
      gameText.innerHTML = "Rock deflects Shoot. You Win!";
      console.log("Rock deflects Shoot. You Win!");
      _p1ScoreCounter++;
      p1Score.innerHTML = _p1ScoreCounter;
      break;
    default:
      gameText.innerHTML = "Tie!";
      console.log("Tie!");
    }
  }
  if (player === "paper") {
    switch(com) {
    case "rock":
      gameText.innerHTML = "Paper covers Rock. You Win!";
      console.log("Paper covers Rock. You Win!");
      _p1ScoreCounter++;
      p1Score.innerHTML = _p1ScoreCounter;
      break;
    case "scissors":
      gameText.innerHTML = "Scissors cut Paper. Computer Wins.";
      console.log("Scissors cut Paper. Computer Wins.");
      _comScoreCounter++;
      cScore.innerHTML = _comScoreCounter;
      break;
    case "shoe":
      gameText.innerHTML = "Paper stuffs Shoe. You Win!";
      console.log("Paper stuffs Shoe. You Win!");
      _p1ScoreCounter++;
      p1Score.innerHTML = _p1ScoreCounter;
      break;
    case "shoot":
      gameText.innerHTML = "Shoot blasts paper. Computer Wins.";
      console.log("Shoot blasts paper. Computer Wins.");
      _comScoreCounter++;
      cScore.innerHTML = _comScoreCounter;
      break;
    default:
      gameText.innerHTML = "Tie!";
      console.log("Tie!");
    }
  }
  if (player === "scissors") {
    switch(com) {
    case "rock":
      gameText.innerHTML = "Rock breaks Scissors. Computer Wins.";
      console.log("Rock breaks Scissors. Computer Wins.");
      _comScoreCounter++;
      cScore.innerHTML = _comScoreCounter;
      break;
    case "paper":
      gameText.innerHTML = "Scissors cut Paper. You Win!";
      console.log("Scissors cut Paper. You Win!");
      _p1ScoreCounter++;
      p1Score.innerHTML = _p1ScoreCounter;
      break;
    case "shoe":
      gameText.innerHTML = "Scissors cut shoe. You Win!";
      console.log("Scissors cut shoe. You Win!");
      _p1ScoreCounter++;
      p1Score.innerHTML = _p1ScoreCounter;
      break;
    case "shoot":
      gameText.innerHTML = "Shoot destroys Scissors. Computer Wins.";
      console.log("Shoot destroys Scissors. Computer Wins.");
      _comScoreCounter++;
      cScore.innerHTML = _comScoreCounter;
      break;
    default:
      gameText.innerHTML = "Tie!";
      console.log("Tie!");
    }
  }
  
  if (player === "shoe") {
    switch(com) {
    case "rock":
      gameText.innerHTML = "Shoe kicks Rock. You Win!";
      console.log("Shoe kicks Rock. You Win!");
      _p1ScoreCounter++;
      p1Score.innerHTML = _p1ScoreCounter;
      break;
    case "scissors":
      gameText.innerHTML = "Scissors cut Shoe. Computer Wins.";
      console.log("Scissors cut Shoe. Computer Wins.");
      _comScoreCounter++;
      cScore.innerHTML = _comScoreCounter;
      break;
    case "paper":
      gameText.innerHTML = "Paper stuffs Shoe. Computer Wins";
      console.log("Paper stuffs Shoe. Computer Wins");
      _comScoreCounter++;
      cScore.innerHTML = _comScoreCounter;
      break;
    case "shoot":
      gameText.innerHTML = "Shoe runs from Shoot. You Win!";
      console.log("Shoe runs from Shoot. You Win!");
      _p1ScoreCounter++;
      p1Score.innerHTML = _p1ScoreCounter;
      break;
    default:
      gameText.innerHTML = "Tie!";
      console.log("Tie!");
    }
  }
  if (player === "shoot") {
    switch(com) {
    case "rock":
      gameText.innerHTML = "Rock deflects Shoot. Computer Wins.";
      console.log("Rock deflects Shoot. Computer Wins.");
      _comScoreCounter++;
      cScore.innerHTML = _comScoreCounter;
      break;
    case "paper":
      gameText.innerHTML = "Shoot blasts Paper. You Win!";
      console.log("Shoot blasts Paper. You Win!");
      _p1ScoreCounter++;
      p1Score.innerHTML = _p1ScoreCounter;
      break;
    case "scissors":
      gameText.innerHTML = "Shoot destroys Scissors. You Win!";
      console.log("Shoot destroys Scissors. You Win!");
      _p1ScoreCounter++;
      p1Score.innerHTML = _p1ScoreCounter;
      break;
    case "shoe":
      gameText.innerHTML = "Shoe runs from Shoot. Computer Wins.";
      console.log("Shoe runs from Shoot. Computer Wins.");
      _comScoreCounter++;
      cScore.innerHTML = _comScoreCounter;
      break;
    default:
      gameText.innerHTML = "Tie!";
      console.log("Tie!");
    }
  }
}
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const shoe = document.getElementById("shoe");
const shoot = document.getElementById("shoot");

rock.addEventListener("click", function pickRock(){
  p1 = "rock";
  console.log(p1);
  playRpsss(p1);
});
paper.addEventListener("click", function pickPaper(){
  p1 = "paper";
  console.log(p1);
  playRpsss(p1);
});
scissors.addEventListener("click", function pickScissors(){
  p1 = "scissors";
  console.log(p1);
  playRpsss(p1);
});
shoe.addEventListener("click", function pickShoe(){
  p1 = "shoe";
  console.log(p1);
  playRpsss(p1);
});
shoot.addEventListener("click", function pickShoot(){
  p1 = "shoot";
  console.log(p1);
  playRpsss(p1);
}); // end of player sel