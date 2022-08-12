//getting all elements from the DOM

let nameSubmit = document.getElementById("nameSubmit");
let nameError = document.getElementById("nameError");
let nameDis = document.getElementById("nameDis");
let games = document.getElementById("games");
let name = document.getElementById("name");
let welcome = document.getElementById("welcome");
let welcomeText = document.getElementById("welcomeText");
let info = document.getElementById("info");
let leader = document.getElementById("leaderBox");

let ninetyEight = document.getElementById("98");
let ninetyNine = document.getElementById("99");
let twoK = document.getElementById("2K");
let classic = document.getElementById("classic");

let courses1 = document.getElementById("courses1");
let courses2 = document.getElementById("courses2");
let courses3 = document.getElementById("courses3");
let courses4 = document.getElementById("courses4");

let gameModes = document.getElementById("gameModes");
let playerSelect = document.getElementById("playerSelect");

let arbor = document.getElementById("arbor");
let bayou = document.getElementById("bayou");
let palm = document.getElementById("palm");
let aspen = document.getElementById("aspen");
let coconut = document.getElementById("coconut");
let rancho = document.getElementById("rancho");
let stone = document.getElementById("stone");
let sea = document.getElementById("sea");
let coyote = document.getElementById("coyote");
let mountain = document.getElementById("mountain");
let anchor = document.getElementById("anchor");
let scorpion = document.getElementById("scorpion");

let strokes = document.getElementById("strokes");
let speed = document.getElementById("speed");
let blitz = document.getElementById("blitz");

let pTwo = document.getElementById("pTwo");
let pThree = document.getElementById("pThree");
let pFour = document.getElementById("pFour");
let holeBlitzDisplay = document.getElementById("holeBlitzDisplay");

let select = document.getElementById("select");
let gameSelected = document.getElementById("gameSelected");
let courseSelected = document.getElementById("courseSelected");
let playersSelected = document.getElementById("playersSelected");
let back = document.getElementById("back");
let home = document.getElementById("home");

let scrollLock = document.getElementById("scrollLock");
let scrollUnlock = document.getElementById("scrollUnlock");

//end grabbing elements

//name submission

nameSubmit.onclick = function () {
  if (name.value.length !== 3) {
    nameError.innerText = "Must enter 3 digit name (letters and numbers)";
  }

  if (name.value.length === 3) {
    games.style.display = "flex";

    results.name = name.value.toUpperCase();

    welcome.style.display = "none";
    welcomeText.style.display = "none";
    scrollLock.style.display = "flex";
    scrollUnlock.style.display = "flex";
    scrollUnlock.style.display = "flex";
    leader.style.display = "flex";
    home.style.display = "flex";
    gtt.style.display = "flex";
    info.style.display = "flex";

    randGreeting();
  }
};

function randGreeting() {
  let starters = [
    "Alright, ",
    "Let's go, ",
    "You got this, ",
    "No way dude, it's ",
    "My mans, ",
  ];
  let greetings = [
    name.value.toUpperCase() + ". Fuck 'em up!",
    name.value.toUpperCase() + ". Time to shred!",
    name.value.toUpperCase() + ". Kick some ass!",
    name.value.toUpperCase() + ". Gotta go fast!",
    name.value.toUpperCase() + ". Clap 'em bro!",
  ];
  let randIndex = Math.floor(Math.random() * 5);
  let randIndex2 = Math.floor(Math.random() * 5);

  let greeting = greetings[randIndex];
  let starter = starters[randIndex2];

  nameDis.innerText = starter + greeting;
}

//game select buttons

/*these buttons will hide game select buttons and show the specific
courses to the game selected, show the back button to get back to game select,
display the game selected and push the game to the results object */

ninetyEight.onclick = function () {
  info.style.display = "flex";
  games.style.display = "none";
  courses1.style.display = "flex";
  back.style.display = "flex";
  home.style.display = "none";

  gameSelected.innerHTML = "98";

  results.game = "98";
};

ninetyNine.onclick = function () {
  info.style.display = "flex";
  games.style.display = "none";
  courses2.style.display = "flex";
  back.style.display = "flex";
  home.style.display = "none";

  gameSelected.innerHTML = "99";
  results.game = "99";
};

twoK.onclick = function () {
  info.style.display = "flex";
  games.style.display = "none";
  courses3.style.display = "flex";
  back.style.display = "flex";
  home.style.display = "none";

  gameSelected.innerHTML = "2K";
  results.game = "2K";
};

classic.onclick = function () {
  info.style.display = "flex";
  games.style.display = "none";
  courses4.style.display = "flex";
  back.style.display = "flex";
  home.style.display = "none";

  gameSelected.innerHTML = "Classic";
  results.game = "Classic";
};

//end game select

/*these buttons will hide course select buttons and show the game modes,
show the back button to get back to course select,
display the course selected and push the course to the results object */

// 98 course selection clicks

arbor.onclick = function () {
  courses1.style.display = "none";

  gameModes.style.display = "flex";

  back.style.display = "none";
  back2.style.display = "flex";

  courseSelected.innerHTML = "Arbor Hill";

  results.course = "Arbor Hill";
};

bayou.onclick = function () {
  courses1.style.display = "none";

  gameModes.style.display = "flex";

  back.style.display = "none";
  back2.style.display = "flex";

  courseSelected.innerHTML = "Bayou Bend";

  results.course = "Bayou Bend";
};

palm.onclick = function () {
  courses1.style.display = "none";

  gameModes.style.display = "flex";

  back.style.display = "none";
  back2.style.display = "flex";

  courseSelected.innerHTML = "Palm Grove";

  results.course = "Palm Grove";
};

// end 98 course select

// begin 99 course select

aspen.onclick = function () {
  courses2.style.display = "none";
  gameModes.style.display = "flex";

  back.style.display = "none";
  back3.style.display = "flex";

  courseSelected.innerHTML = "Aspen Lake";

  results.course = "Aspen Lake";
};

coconut.onclick = function () {
  courses2.style.display = "none";
  gameModes.style.display = "flex";

  back.style.display = "none";
  back3.style.display = "flex";

  courseSelected.innerHTML = "Coconut Cove";

  results.course = "Coconut Cove";
};

rancho.onclick = function () {
  courses2.style.display = "none";
  gameModes.style.display = "flex";

  back.style.display = "none";
  back3.style.display = "flex";

  courseSelected.innerHTML = "Rancho Saguaro";

  results.course = "Rancho Saguaro";
};

//end 99 course select

// begin 2k course select

stone.onclick = function () {
  courses3.style.display = "none";
  gameModes.style.display = "flex";

  back.style.display = "none";
  back4.style.display = "flex";

  courseSelected.innerHTML = "Stone Valley";

  results.course = "Stone Valley";
};

sea.onclick = function () {
  courses3.style.display = "none";
  gameModes.style.display = "flex";

  back.style.display = "none";
  back4.style.display = "flex";

  courseSelected.innerHTML = "Sea Haven";

  results.course = "Sea Haven";
};

coyote.onclick = function () {
  courses3.style.display = "none";
  gameModes.style.display = "flex";

  back.style.display = "none";
  back4.style.display = "flex";

  courseSelected.innerHTML = "Coyote Run";

  results.course = "Coyote Run";
};

// end 2k course select

// begin classic course select

mountain.onclick = function () {
  courses4.style.display = "none";
  gameModes.style.display = "flex";

  back.style.display = "none";
  back5.style.display = "flex";

  courseSelected.innerHTML = "Mountain Springs";

  results.course = "Mountain Springs";
};

anchor.onclick = function () {
  courses4.style.display = "none";
  gameModes.style.display = "flex";

  back.style.display = "none";
  back5.style.display = "flex";

  courseSelected.innerHTML = "Anchor Cove";

  results.course = "Anchor Cove";
};

scorpion.onclick = function () {
  courses4.style.display = "none";
  gameModes.style.display = "flex";

  back.style.display = "none";
  back5.style.display = "flex";

  courseSelected.innerText = "Scorpion Bend";

  results.course = "Scorpion Bend";
};

//end course select buttons

//begin game mode select buttons

//STROKE PLAY

strokes.onclick = function () {
  table.style.display = "grid";
  gameModes.style.display = "none";

  back.style.display = "none";
  back2.style.display = "none";
  back3.style.display = "none";
  back4.style.display = "none";
  back5.style.display = "none";
  home.style.display = "flex";
  results.mode = "Stroke Play";
};
//END STROKE PLAY

//SPEED RUN
speed.onclick = function () {
  speedRunDisplay.style.display = "flex";
  gameModes.style.display = "none";

  back.style.display = "none";
  back2.style.display = "none";
  back3.style.display = "none";
  back4.style.display = "none";
  back5.style.display = "none";
  home.style.display = "flex";
  results.mode = "Speed Run";

  theButton.hidden = false;
  timerTotal.style.display = "flex";

  nameDis.innerText = "Good luck " + name.value.toUpperCase() + "!";
};
// END SPEED RUN

// BEGIN BLITZ GOLF
blitz.onclick = function () {
  playerSelect.style.display = "flex";
  gameModes.style.display = "none";

  back.style.display = "none";
  back2.style.display = "none";
  back3.style.display = "none";
  back4.style.display = "none";
  back5.style.display = "none";
  home.style.display = "flex";
  results.mode = "";

  nameDis.innerText = "How many players?";
};
// END BLITZ

pTwo.onclick = function () {
  playerSelect.style.display = "none";
  blitzSection.style.display = "flex";
  playerThree.style.display = "none";
  playerFour.style.display = "none";
  nameDis.style.display = "none";
  results.mode = "blitz2P";
  holeBlitzDisplay.style.display = "flex";
};
pThree.onclick = function () {
  playerSelect.style.display = "none";
  blitzSection.style.display = "flex";
  playerThree.style.display = "flex";
  playerFour.style.display = "none";
  nameDis.style.display = "none";
  results.mode = "blitz3P";
  holeBlitzDisplay.style.display = "flex";
};
pFour.onclick = function () {
  playerSelect.style.display = "none";
  blitzSection.style.display = "flex";
  playerThree.style.display = "flex";
  playerFour.style.display = "flex";
  nameDis.style.display = "none";
  results.mode = "blitz4P";
  holeBlitzDisplay.style.display = "flex";
};

//end game mode select buttons
// back button functionality
back.onclick = function () {
  games.style.display = "flex";
  home.style.display = "FLEX";
  courses1.style.display = "none";
  courses2.style.display = "none";
  courses3.style.display = "none";
  courses4.style.display = "none";

  gameModes.style.display = "none";

  back.style.display = "none";

  gameSelected.innerHTML = "";
};

// 98 back button
back2.onclick = function () {
  courses1.style.display = "flex";
  gameModes.style.display = "none";

  back2.style.display = "none";
  back.style.display = "flex";

  courseSelected.innerHTML = "";
};
//99 back button
back3.onclick = function () {
  courses2.style.display = "flex";
  gameModes.style.display = "none";

  back3.style.display = "none";
  back.style.display = "flex";

  courseSelected.innerHTML = "";
};

back4.onclick = function () {
  courses3.style.display = "flex";
  gameModes.style.display = "none";

  back4.style.display = "none";
  back.style.display = "flex";

  courseSelected.innerHTML = "";
};
back5.onclick = function () {
  courses4.style.display = "flex";
  gameModes.style.display = "none";
  playerSelect.style.display = "none";

  back5.style.display = "none";
  back.style.display = "flex";

  courseSelected.innerHTML = "";
};
home.onclick = function () {
  window.location.reload();
};

scrollLock.onclick = function () {
  if ((document.body.style.overflow = "visible")) {
    document.body.style.overflow = "hidden";
    scrollLock.style.zIndex = "1";
    scrollUnlock.style.zIndex = "2";
  }
};
scrollUnlock.onclick = function () {
  if ((document.body.style.overflow = "hidden")) {
    document.body.style.overflow = "visible";
    scrollLock.style.zIndex = "2";
    scrollUnlock.style.zIndex = "1";
  }
};

results = {
  name: "",
  game: "",
  course: "",
  mode: "",
};
