//grabbing html elements
//cell number display
//increment button
//decrement button
//score to display
//1
let scoreDisplayOne = document.getElementById("scoreOne");
let incOne = document.getElementById("incOne");
let decOne = document.getElementById("decOne");
let scoreOne = 0;
//2
let scoreDisplayTwo = document.getElementById("scoreTwo");
let incTwo = document.getElementById("incTwo");
let decTwo = document.getElementById("decTwo");
let scoreTwo = 0;
//3
let scoreDisplayThree = document.getElementById("scoreThree");
let incThree = document.getElementById("incThree");
let decThree = document.getElementById("decThree");
let scoreThree = 0;
//4
let scoreDisplayFour = document.getElementById("scoreFour");
let incFour = document.getElementById("incFour");
let decFour = document.getElementById("decFour");
let scoreFour = 0;
//5
let scoreDisplayFive = document.getElementById("scoreFive");
let incFive = document.getElementById("incFive");
let decFive = document.getElementById("decFive");
let scoreFive = 0;
//6
let scoreDisplaySix = document.getElementById("scoreSix");
let incSix = document.getElementById("incSix");
let decSix = document.getElementById("decSix");
let scoreSix = 0;
//7
let scoreDisplaySeven = document.getElementById("scoreSeven");
let incSeven = document.getElementById("incSeven");
let decSeven = document.getElementById("decSeven");
let scoreSeven = 0;
//8
let scoreDisplayEight = document.getElementById("scoreEight");
let incEight = document.getElementById("incEight");
let decEight = document.getElementById("decEight");
let scoreEight = 0;
//9
let scoreDisplayNine = document.getElementById("scoreNine");
let incNine = document.getElementById("incNine");
let decNine = document.getElementById("decNine");
let scoreNine = 0;
//10
let scoreDisplayTen = document.getElementById("scoreTen");
let incTen = document.getElementById("incTen");
let decTen = document.getElementById("decTen");
let scoreTen = 0;
//11
let scoreDisplayEleven = document.getElementById("scoreEleven");
let incEleven = document.getElementById("incEleven");
let decEleven = document.getElementById("decEleven");
let scoreEleven = 0;
//12
let scoreDisplayTwelve = document.getElementById("scoreTwelve");
let incTwelve = document.getElementById("incTwelve");
let decTwelve = document.getElementById("decTwelve");
let scoreTwelve = 0;
//13
let scoreDisplayThirteen = document.getElementById("scoreThirteen");
let incThirteen = document.getElementById("incThirteen");
let decThirteen = document.getElementById("decThirteen");
let scoreThirteen = 0;
//14
let scoreDisplayFourteen = document.getElementById("scoreFourteen");
let incFourteen = document.getElementById("incFourteen");
let decFourteen = document.getElementById("decFourteen");
let scoreFourteen = 0;
//15
let scoreDisplayFifteen = document.getElementById("scoreFifteen");
let incFifteen = document.getElementById("incFifteen");
let decFifteen = document.getElementById("decFifteen");
let scoreFifteen = 0;
//16
let scoreDisplaySixteen = document.getElementById("scoreSixteen");
let incSixteen = document.getElementById("incSixteen");
let decSixteen = document.getElementById("decSixteen");
let scoreSixteen = 0;
//17
let scoreDisplaySeventeen = document.getElementById("scoreSeventeen");
let incSeventeen = document.getElementById("incSeventeen");
let decSeventeen = document.getElementById("decSeventeen");
let scoreSeventeen = 0;
//18
let scoreDisplayEighteen = document.getElementById("scoreEighteen");
let incEighteen = document.getElementById("incEighteen");
let decEighteen = document.getElementById("decEighteen");
let scoreEighteen = 0;
//end cell buttons
//all submit buttons
let submitOne = document.getElementById("submitOne");
let submitTwo = document.getElementById("submitTwo");
let submitThree = document.getElementById("submitThree");
let submitFour = document.getElementById("submitFour");
let submitFive = document.getElementById("submitFive");
let submitSix = document.getElementById("submitSix");
let submitSeven = document.getElementById("submitSeven");
let submitEight = document.getElementById("submitEight");
let submitNine = document.getElementById("submitNine");
let submitTen = document.getElementById("submitTen");
let submitEleven = document.getElementById("submitEleven");
let submitTwelve = document.getElementById("submitTwelve");
let submitThirteen = document.getElementById("submitThirteen");
let submitFourteen = document.getElementById("submitFourteen");
let submitFifteen = document.getElementById("submitFifteen");
let submitSixteen = document.getElementById("submitSixteen");
let submitSeventeen = document.getElementById("submitSeventeen");
let submitEighteen = document.getElementById("submitEighteen");
//total score
//download csv file of results
let downloadCSV = document.getElementById("action");

let totalScoreDisplay = document.getElementById("totalScore");
let totalScoreDisplayCopy = document.getElementById("totalScoreCopy");
let totalScoreDisplayFinal = document.getElementById("totalScoreFinal");
let totalScore = 0;

let table = document.getElementById("wrapper");

//end grabbing elements
// hide elements
table.style.display = "none";

//begin button functions
//strokeplay select

//submit buttons add score to total score and then display it
//then it hides all buttons essentially locking in the score
//then it shows the hidden buttons on the next cell
//1
submitOne.onclick = function () {
  totalScore += scoreOne;
  totalScoreDisplay.innerText = totalScore;
  totalScoreDisplayCopy.innerText = totalScore;
  incOne.style.display = "none";
  decOne.style.display = "none";
  submitOne.style.display = "none";
  incTwo.style.display = "flex";
  decTwo.style.display = "flex";
  submitTwo.style.display = "flex";

  results.hole1 = scoreOne;

  /* uncomment for testing result func
    incEighteen.style.display = 'flex';
    decEighteen.style.display = 'flex';
    submitEighteen.style.display = 'flex';
    */
};
//2
submitTwo.onclick = function () {
  totalScore += scoreTwo;
  totalScoreDisplay.innerText = totalScore;
  totalScoreDisplayCopy.innerText = totalScore;
  incTwo.style.display = "none";
  decTwo.style.display = "none";
  submitTwo.style.display = "none";
  incThree.style.display = "flex";
  decThree.style.display = "flex";
  submitThree.style.display = "flex";

  results.hole2 = scoreTwo;
};
//3
submitThree.onclick = function () {
  totalScore += scoreThree;
  totalScoreDisplay.innerText = totalScore;
  totalScoreDisplayCopy.innerText = totalScore;
  incThree.style.display = "none";
  decThree.style.display = "none";
  submitThree.style.display = "none";
  incFour.style.display = "flex";
  decFour.style.display = "flex";
  submitFour.style.display = "flex";

  results.hole3 = scoreThree;
};
//4
submitFour.onclick = function () {
  totalScore += scoreFour;
  totalScoreDisplay.innerText = totalScore;
  totalScoreDisplayCopy.innerText = totalScore;
  incFour.style.display = "none";
  decFour.style.display = "none";
  submitFour.style.display = "none";
  incFive.style.display = "flex";
  decFive.style.display = "flex";
  submitFive.style.display = "flex";

  results.hole4 = scoreFour;
};
//5
submitFive.onclick = function () {
  totalScore += scoreFive;
  totalScoreDisplay.innerText = totalScore;
  totalScoreDisplayCopy.innerText = totalScore;
  incFive.style.display = "none";
  decFive.style.display = "none";
  submitFive.style.display = "none";
  incSix.style.display = "flex";
  decSix.style.display = "flex";
  submitSix.style.display = "flex";

  results.hole5 = scoreFive;
};
//6
submitSix.onclick = function () {
  totalScore += scoreSix;
  totalScoreDisplay.innerText = totalScore;
  totalScoreDisplayCopy.innerText = totalScore;
  incSix.style.display = "none";
  decSix.style.display = "none";
  submitSix.style.display = "none";
  incSeven.style.display = "flex";
  decSeven.style.display = "flex";
  submitSeven.style.display = "flex";

  results.hole6 = scoreSix;
};
//7
submitSeven.onclick = function () {
  totalScore += scoreSeven;
  totalScoreDisplay.innerText = totalScore;
  totalScoreDisplayCopy.innerText = totalScore;
  incSeven.style.display = "none";
  decSeven.style.display = "none";
  submitSeven.style.display = "none";
  incEight.style.display = "flex";
  decEight.style.display = "flex";
  submitEight.style.display = "flex";

  results.hole7 = scoreSeven;
};
//8
submitEight.onclick = function () {
  totalScore += scoreEight;
  totalScoreDisplay.innerText = totalScore;
  totalScoreDisplayCopy.innerText = totalScore;
  incEight.style.display = "none";
  decEight.style.display = "none";
  submitEight.style.display = "none";
  incNine.style.display = "flex";
  decNine.style.display = "flex";
  submitNine.style.display = "flex";

  results.hole8 = scoreEight;
};
//9
submitNine.onclick = function () {
  totalScore += scoreNine;
  totalScoreDisplay.innerText = totalScore;
  totalScoreDisplayCopy.innerText = totalScore;
  incNine.style.display = "none";
  decNine.style.display = "none";
  submitNine.style.display = "none";
  incTen.style.display = "flex";
  decTen.style.display = "flex";
  submitTen.style.display = "flex";

  results.hole9 = scoreNine;
};
//10
submitTen.onclick = function () {
  totalScore += scoreTen;
  totalScoreDisplayCopy.innerText = totalScore;
  incTen.style.display = "none";
  decTen.style.display = "none";
  submitTen.style.display = "none";
  incEleven.style.display = "flex";
  decEleven.style.display = "flex";
  submitEleven.style.display = "flex";

  results.hole10 = scoreTen;
};
//11
submitEleven.onclick = function () {
  totalScore += scoreEleven;
  totalScoreDisplayCopy.innerText = totalScore;
  incEleven.style.display = "none";
  decEleven.style.display = "none";
  submitEleven.style.display = "none";
  incTwelve.style.display = "flex";
  decTwelve.style.display = "flex";
  submitTwelve.style.display = "flex";

  results.hole11 = scoreEleven;
};
//12
submitTwelve.onclick = function () {
  totalScore += scoreTwelve;
  totalScoreDisplayCopy.innerText = totalScore;
  incTwelve.style.display = "none";
  decTwelve.style.display = "none";
  submitTwelve.style.display = "none";
  incThirteen.style.display = "flex";
  decThirteen.style.display = "flex";
  submitThirteen.style.display = "flex";

  results.hole12 = scoreTwelve;
};
//13
submitThirteen.onclick = function () {
  totalScore += scoreThirteen;
  totalScoreDisplayCopy.innerText = totalScore;
  incThirteen.style.display = "none";
  decThirteen.style.display = "none";
  submitThirteen.style.display = "none";
  incFourteen.style.display = "flex";
  decFourteen.style.display = "flex";
  submitFourteen.style.display = "flex";

  results.hole13 = scoreThirteen;
};
//14
submitFourteen.onclick = function () {
  totalScore += scoreFourteen;
  totalScoreDisplayCopy.innerText = totalScore;
  incFourteen.style.display = "none";
  decFourteen.style.display = "none";
  submitFourteen.style.display = "none";
  incFifteen.style.display = "flex";
  decFifteen.style.display = "flex";
  submitFifteen.style.display = "flex";

  results.hole14 = scoreFourteen;
};
//15
submitFifteen.onclick = function () {
  totalScore += scoreFifteen;
  totalScoreDisplayCopy.innerText = totalScore;
  incFifteen.style.display = "none";
  decFifteen.style.display = "none";
  submitFifteen.style.display = "none";
  incSixteen.style.display = "flex";
  decSixteen.style.display = "flex";
  submitSixteen.style.display = "flex";

  results.hole15 = scoreFifteen;
};
//16
submitSixteen.onclick = function () {
  totalScore += scoreSixteen;
  totalScoreDisplayCopy.innerText = totalScore;
  incSixteen.style.display = "none";
  decSixteen.style.display = "none";
  submitSixteen.style.display = "none";
  incSeventeen.style.display = "flex";
  decSeventeen.style.display = "flex";
  submitSeventeen.style.display = "flex";

  results.hole16 = scoreSixteen;
};
//17
submitSeventeen.onclick = function () {
  totalScore += scoreSeventeen;
  totalScoreDisplayCopy.innerText = totalScore;
  incSeventeen.style.display = "none";
  decSeventeen.style.display = "none";
  submitSeventeen.style.display = "none";
  incEighteen.style.display = "flex";
  decEighteen.style.display = "flex";
  submitEighteen.style.display = "flex";

  results.hole17 = scoreSeventeen;
};
//18
submitEighteen.onclick = function () {
  totalScore += scoreEighteen;
  totalScoreDisplayCopy.innerText = totalScore;

  if (totalScore <= -1 && totalScore > -5) {
    totalScoreDisplayFinal.innerText = "Nice job, you scored: " + totalScore;
  } else if (totalScore < -5 && totalScore > -10) {
    totalScoreDisplayFinal.innerText = "Cool dude, you scored: " + totalScore;
  } else if (totalScore < -10 && totalScore > -15) {
    totalScoreDisplayFinal.innerText =
      "Woah, siiiick... you scored: " + totalScore;
  } else if (totalScore < -15) {
    totalScoreDisplayFinal.innerText = "New Record! you scored: " + totalScore;
  } else if (totalScore > 0) {
    totalScoreDisplayFinal.innerText =
      ".... you okay? you scored: " + totalScore;
  } else if (totalScore > 5) {
    totalScoreDisplayFinal.innerText = "get rekt... you scored: " + totalScore;
  }

  incEighteen.style.display = "none";
  decEighteen.style.display = "none";
  submitEighteen.style.display = "none";

  results.hole18 = scoreEighteen;
  results.finalResult = totalScore;
  downloadCSV.style.display = "flex";
};
//end submit buttons
//begin inc and dec buttons
//increments or decrements score and then displays it
incOne.onclick = function () {
  scoreOne++;
  scoreDisplayOne.innerText = scoreOne;
};
decOne.onclick = function () {
  scoreOne--;
  scoreDisplayOne.innerText = scoreOne;
};
//1
incTwo.onclick = function () {
  scoreTwo++;
  scoreDisplayTwo.innerText = scoreTwo;
};
decTwo.onclick = function () {
  scoreTwo--;
  scoreDisplayTwo.innerText = scoreTwo;
};
//2
incThree.onclick = function () {
  scoreThree++;
  scoreDisplayThree.innerText = scoreThree;
};
decThree.onclick = function () {
  scoreThree--;
  scoreDisplayThree.innerText = scoreThree;
};
//3
incFour.onclick = function () {
  scoreFour++;
  scoreDisplayFour.innerText = scoreFour;
};
decFour.onclick = function () {
  scoreFour--;
  scoreDisplayFour.innerText = scoreFour;
};
//4
incFive.onclick = function () {
  scoreFive++;
  scoreDisplayFive.innerText = scoreFive;
};
decFive.onclick = function () {
  scoreFive--;
  scoreDisplayFive.innerText = scoreFive;
};
//5
incSix.onclick = function () {
  scoreSix++;
  scoreDisplaySix.innerText = scoreSix;
};
decSix.onclick = function () {
  scoreSix--;
  scoreDisplaySix.innerText = scoreSix;
};
//6
incSeven.onclick = function () {
  scoreSeven++;
  scoreDisplaySeven.innerText = scoreSeven;
};
decSeven.onclick = function () {
  scoreSeven--;
  scoreDisplaySeven.innerText = scoreSeven;
};
//7
incEight.onclick = function () {
  scoreEight++;
  scoreDisplayEight.innerText = scoreEight;
};
decEight.onclick = function () {
  scoreEight--;
  scoreDisplayEight.innerText = scoreEight;
};
//8
incNine.onclick = function () {
  scoreNine++;
  scoreDisplayNine.innerText = scoreNine;
};
decNine.onclick = function () {
  scoreNine--;
  scoreDisplayNine.innerText = scoreNine;
};
//9
incTen.onclick = function () {
  scoreTen++;
  scoreDisplayTen.innerText = scoreTen;
};
decTen.onclick = function () {
  scoreTen--;
  scoreDisplayTen.innerText = scoreTen;
};
//10
incEleven.onclick = function () {
  scoreEleven++;
  scoreDisplayEleven.innerText = scoreEleven;
};
decEleven.onclick = function () {
  scoreEleven--;
  scoreDisplayEleven.innerText = scoreEleven;
};
//11
incTwelve.onclick = function () {
  scoreTwelve++;
  scoreDisplayTwelve.innerText = scoreTwelve;
};
decTwelve.onclick = function () {
  scoreTwelve--;
  scoreDisplayTwelve.innerText = scoreTwelve;
};
//12
incThirteen.onclick = function () {
  scoreThirteen++;
  scoreDisplayThirteen.innerText = scoreThirteen;
};
decThirteen.onclick = function () {
  scoreThirteen--;
  scoreDisplayThirteen.innerText = scoreThirteen;
};
//13
incFourteen.onclick = function () {
  scoreFourteen++;
  scoreDisplayFourteen.innerText = scoreFourteen;
};
decFourteen.onclick = function () {
  scoreFourteen--;
  scoreDisplayFourteen.innerText = scoreFourteen;
};
//14
incFifteen.onclick = function () {
  scoreFifteen++;
  scoreDisplayFifteen.innerText = scoreFifteen;
};
decFifteen.onclick = function () {
  scoreFifteen--;
  scoreDisplayFifteen.innerText = scoreFifteen;
};
//15
incSixteen.onclick = function () {
  scoreSixteen++;
  scoreDisplaySixteen.innerText = scoreSixteen;
};
decSixteen.onclick = function () {
  scoreSixteen--;
  scoreDisplaySixteen.innerText = scoreSixteen;
};
//16
incSeventeen.onclick = function () {
  scoreSeventeen++;
  scoreDisplaySeventeen.innerText = scoreSeventeen;
};
decSeventeen.onclick = function () {
  scoreSeventeen--;
  scoreDisplaySeventeen.innerText = scoreSeventeen;
};
//17
incEighteen.onclick = function () {
  scoreEighteen++;
  scoreDisplayEighteen.innerText = scoreEighteen;
};
decEighteen.onclick = function () {
  scoreEighteen--;
  scoreDisplayEighteen.innerText = scoreEighteen;
};
//18
