var readlineSync = require('readline-sync');

console.log("Please ignore and move on.");
console.log("-----------------------------")

var score = 0;
var userName = readlineSync.question("Please enter your name: ");
console.log("Welcome", userName,"to MODERN Family Quiz");
console.log("-----------------------------")
console.log("Game rules are really simple. Each correct answer will score you 1 point. Let's gooo.")


function modernFamilyQuiz(question,answer){
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() == answer){
    console.log("Correct");
    score +=1;
  }else{
    console.log("Wrong")
  }
  
}

var hallOfFame = [
  rank1 = {
    name : "Heeral",
    score : 7
  },
  rank2 = {
    name : "Test 1",
    score : 6
  }
]

// console.log(hallOfFame[1].score);


var questionList = [

  questionOne = {
  questionValue : "What is Jay's pet dog's name?: ",
    answerValue : "STELLA"
    
  },
  questionTwo =
  {
  questionValue : "Where is Gloria from?: ",
    answerValue : "COLUMBIA"
    
  },
  questionThree =
  {
  questionValue : "What is Cameron's clown name?: ",
    answerValue : "FIZBO"
    
  },
  questionFour =
  {
  questionValue : "Which animal is Larry?: ",
    answerValue : "CAT"
    
  },
  questionFive =
  {
  questionValue : "What college did Alex graduate from?: ",
    answerValue : "CALTECH"
    
  },
  questionSix =
  {
  questionValue : "What was Luke's first lead role?: ",
    answerValue : "PHANTOM"
    
  },
  questionSeven =
  {
  questionValue : "Which instrument did Phil learn for his 50th birthday?: ",
    answerValue : "PIANO"
    
  },
  questionEight =
  {
  questionValue : "What is Haley and Dylan's daughter's name?: ",
    answerValue : "POPPY"
    
  }
]

for (i=0;i<questionList.length;i++){
  modernFamilyQuiz(questionList[i].questionValue,questionList[i].answerValue)
  
}



console.log("Game Completed!! You have scored", score , "points");

switch (true){
  case (score >= hallOfFame[0].score) : console.log("Yayy!! You beat the highest score!!")
    break;
    case (score >= hallOfFame[1].score) : console.log("Yayy!! You rank 2nd!!")
    break;   
}
