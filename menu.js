//getting all elements from the DOM

let nameSubmit = document.getElementById('nameSubmit');
let nameError = document.getElementById('nameError');
let nameDis = document.getElementById('nameDis');
let games = document.getElementById('games');
let name = document.getElementById('name');
let welcome = document.getElementById('welcome');
let welcomeText = document.getElementById('welcomeText');
let info = document.getElementById('info');
let leader = document.getElementById('leaderBox');

let ninetyEight = document.getElementById('98');
let ninetyNine = document.getElementById('99');
let twoK = document.getElementById('2K');
let classic = document.getElementById('classic');

let courses1 = document.getElementById('courses1');
let courses2 = document.getElementById('courses2');
let courses3 = document.getElementById('courses3');
let courses4 = document.getElementById('courses4');

let gameModes = document.getElementById('gameModes');

let arbor = document.getElementById('arbor');
let bayou = document.getElementById('bayou');
let palm = document.getElementById('palm');
let aspen = document.getElementById('aspen');
let coconut = document.getElementById('coconut');
let rancho = document.getElementById('rancho');
let stone = document.getElementById('stone');
let sea = document.getElementById('sea');
let coyote = document.getElementById('coyote');
let mountain = document.getElementById('mountain');
let anchor = document.getElementById('anchor');
let scorpion = document.getElementById('scorpion');


let strokes = document.getElementById('strokes');
let speed = document.getElementById('speed');

let select = document.getElementById('select');
let gameSelected = document.getElementById('gameSelected');
let courseSelected = document.getElementById('courseSelected');
let modeSelected = document.getElementById('modeSelected');
let playersSelected = document.getElementById('playersSelected');
let back = document.getElementById('back');
let home = document.getElementById('home');

let scrollLock = document.getElementById('scrollLock');
let scrollUnlock = document.getElementById('scrollUnlock');


//end grabbing elements


//hide everything



back.hidden = true;
back2.hidden = true;
back3.hidden = true;
back4.hidden = true;
back5.hidden = true;
home.style.display = 'none';





//end hiding everything






//name submission 

nameSubmit.onclick = function () {
    if (name.value.length < 2) {
        nameError.innerText = 'Enter 2+ digit name'
    }

    if (name.value.length > 1) {
        nameError.innerText = ''
    games.style.display = 'flex';

    results.name = name.value;

    welcome.style.display = 'none';
    welcomeText.style.display = 'none';
    info.style.display = 'flex';
    scrollLock.style.display = 'flex';
    scrollUnlock.style.display = 'flex';
    scrollUnlock.style.display = 'flex';
    leader.style.display = 'flex';

    randGreeting();

    home.style.display = 'flex';
    }
}

function randGreeting() {
    let starters = ['Alright, ', 'Let\'s go, ', 'You got this, ', 'No way dude, it\'s ', 'My mans, ']
    let greetings = [name.value + '. Fuck \'em up!', name.value + '. Time to shred!', name.value + '. Kick some ass!', name.value +  '. Gotta go fast!', name.value +  '. Clap \'em bro!']
    let randIndex = Math.floor(Math.random() * 5)
    let randIndex2 = Math.floor(Math.random() * 5)

    let greeting = greetings[randIndex]
    let starter = starters[randIndex2]

    nameDis.innerText =  starter + greeting;
}




//game select buttons

/*these buttons will hide game select buttons and show the specific
courses to the game selected, show the back button to get back to game select,
display the game selected and push the game to the results object */



ninetyEight.onclick = function () {
    games.style.display = 'none';
    courses1.style.display = 'flex';
    back.hidden = false;
    home.style.display = 'none';

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = '98'

    results.game = '98';
}

ninetyNine.onclick = function() {
    games.style.display = 'none';
    courses2.style.display = 'flex';
    back.hidden = false;
    home.style.display = 'none';

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = '99'
    results.game = '99';
}

twoK.onclick = function () {
    games.style.display = 'none';
    courses3.style.display = 'flex';
    back.hidden = false;
    home.style.display = 'none';

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = '2K'
    results.game = '2K';
}

classic.onclick = function () {
    games.style.display = 'none';
    courses1.style.display = 'flex';
    back.hidden = false;
    home.style.display = 'none';

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = 'Classic'
    results.game = 'Classic';
}



//end game select


/*these buttons will hide course select buttons and show the game modes,
show the back button to get back to course select,
display the course selected and push the course to the results object */

// 98 course selection clicks


arbor.onclick = function () {

    courses1.style.display = 'none';

    gameModes.style.display = 'flex';

    back.hidden = true;
    back2.hidden = false;

    select.innerHTML = 'Select Mode:';
    courseSelected.innerHTML = 'Arbor Hill';

    results.course = 'Arbor Hill';
}

bayou.onclick = function () {

    courses1.style.display = 'none';

    gameModes.style.display = 'flex';

    back.hidden = true;
    back2.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Bayou Bend';

    results.course = 'Bayou Bend';
}

palm.onclick = function () {

    courses1.style.display = 'none';

    gameModes.style.display = 'flex';

    back.hidden = true;
    back2.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Palm Grove';

    results.course = 'Palm Grove';

}



// end 98 course select


// begin 99 course select



aspen.onclick = function () {

    courses2.style.display = 'none';
    gameModes.style.display = 'flex';

    back.hidden = true;
    back3.hidden = false;

    select.innerHTML = 'Select Mode:';
    courseSelected.innerHTML = 'Aspen Lake';

    results.course = 'Aspen Lake';
}

coconut.onclick = function () {

    courses2.style.display = 'none';
    gameModes.style.display = 'flex';

    back.hidden = true;
    back3.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Coconut Cove';

    results.course = 'Coconut Cove';
}

rancho.onclick = function () {

    courses2.style.display = 'none';
    gameModes.style.display = 'flex';

    back.hidden = true;
    back3.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Rancho Saguaro';

    results.course = 'Rancho Saguaro';
}



//end 99 course select



// begin 2k course select



stone.onclick = function () {

    courses3.style.display = 'none';
    gameModes.style.display = 'flex';

    back.hidden = true;
    back4.hidden = false;

    select.innerHTML = 'Select Mode:';
    courseSelected.innerHTML = 'Stone Valley';

    results.course = 'Stone Valley';
}

sea.onclick = function () {

    courses3.style.display = 'none';
    gameModes.style.display = 'flex';

    back.hidden = true;
    back4.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Sea Haven';

    results.course = 'Sea Haven';
}

coyote.onclick = function () {

    courses3.style.display = 'none';
    gameModes.style.display = 'flex';

    back.hidden = true;
    back4.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Coyote Run';

    results.course = 'Coyote Run';
}


// end 2k course select


// begin classic course select


mountain.onclick = function () {

    courses4.style.display = 'none';
    gameModes.style.display = 'flex';

    back.hidden = true;
    back5.hidden = false;

    select.innerHTML = 'Select Mode:';
    courseSelected.innerHTML = 'Mountain Springs';

    results.course = 'Mountain Springs';
}

anchor.onclick = function () {

    courses4.style.display = 'none';
    gameModes.style.display = 'flex';

    back.hidden = true;
    back5.hidden = false;

    select.innerHTML = 'Select Mode:';
    courseSelected.innerHTML = 'Anchor Cove';

    results.course = 'Anchor Cove';
}

scorpion.onclick = function () {

    courses4.style.display = 'none';
    gameModes.style.display = 'flex';

    back.hidden = true;
    back5.hidden = false;

    select.innerText = 'Select Mode:';
    courseSelected.innerText = 'Scorpion Bend';

    results.course = 'Scorpion Bend';
}


//end course select buttons


//begin game mode select buttons


//STROKE PLAY

strokes.onclick = function () {
        table.style.display = 'grid';
        gameModes.style.display = 'none';
        modeSelected.innerText = 'Stroke Play';
        select.style.display = 'none';

        home.hidden = false;
        back2.hidden = true;
        back3.hidden = true;
        back4.hidden = true;
        back5.hidden = true;

        home.style.display = 'flex';
        results.mode = 'Stroke Play';
}
//END STROKE PLAY


//SPEED RUN
speed.onclick = function () {
    speedRunDisplay.style.display = 'flex';
    gameModes.style.display = 'none';
    modeSelected.innerText = 'Speed Run';
    select.style.display = 'none';

    back2.hidden = true;
    back3.hidden = true;
    back4.hidden = true;
    back5.hidden = true;
    
    home.style.display = 'flex';
    results.mode = 'Speed Run';

    theButton.hidden = false;
    timerTotal.style.display = 'flex';
}     
//end game mode select buttons
// back button functionality
back.onclick = function () {
    games.style.display = 'flex';
    courses1.style.display = 'none';
    courses2.style.display = 'none';
    courses3.style.display = 'none';
    courses4.style.display = 'none';

    gameModes.style.display = 'none';

    back.hidden = true;

    select.innerHTML = 'Select Game:';
    gameSelected.innerHTML = '';
}

// 98 back button
back2.onclick = function () {
    courses1.style.display = 'flex';
    gameModes.style.display = 'none';

    back2.hidden = true;
    back.hidden = false;

    select.innerHTML = 'Select Course:';
    courseSelected.innerHTML = '';
}
//99 back button
back3.onclick = function () {
    courses2.style.display = 'flex';
    gameModes.style.display = 'none';

    back3.hidden = true;
    back.hidden = false;

    select.innerHTML = 'Select Course:';
    courseSelected.innerHTML = '';
}

back4.onclick = function () {
    courses3.style.display = 'flex';
    gameModes.style.display = 'none';

    back4.hidden = true;
    back.hidden = false;

    select.innerHTML = 'Select Course:';
    courseSelected.innerHTML = '';
}
back5.onclick = function () {
    
    courses4.style.display = 'flex';
    gameModes.style.display = 'none';

    back5.hidden = true;
    back.hidden = false;

    select.innerHTML = 'Select Course:';
    courseSelected.innerHTML = '';
}
home.onclick = function () {
    window.location.reload();
}

scrollLock.onclick = function () {
    if (document.body.style.overflow = 'visible') {
        document.body.style.overflow = 'hidden';
        scrollLock.style.zIndex = '1';
        scrollUnlock.style.zIndex = '2';

    }
}
scrollUnlock.onclick = function () {
    if (document.body.style.overflow = 'hidden') {
        document.body.style.overflow = 'visible';
        scrollLock.style.zIndex = '2';
        scrollUnlock.style.zIndex = '1';
    }
}  




results = {
    name: '',
    game: '',
    course: '',
    mode: '',
}