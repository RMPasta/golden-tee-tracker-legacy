let ninetyEight = document.getElementById('98');
let ninetyNine = document.getElementById('99');
let twoK = document.getElementById('2K');
let classic = document.getElementById('classic');

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
let scorpian = document.getElementById('scorpian');


let strokes = document.getElementById('strokes');
let speed = document.getElementById('speed');

let select = document.getElementById('select');
let gameSelected = document.getElementById('gameSelected');
let courseSelected = document.getElementById('courseSelected');
let modeSelected = document.getElementById('modeSelected');
let playersSelected = document.getElementById('playersSelected');
let back = document.getElementById('back');

let scrollLock = document.getElementById('scrollLock');
let scrollUnlock = document.getElementById('scrollUnlock');
//end grabbing elements
//hide everything
arbor.hidden = true;
bayou.hidden = true;
palm.hidden = true;
aspen.hidden = true;
coconut.hidden = true;
rancho.hidden = true;
stone.hidden = true;
sea.hidden = true;
coyote.hidden = true;
mountain.hidden = true;
anchor.hidden = true;
scorpian.hidden = true;



back.hidden = true;
back2.hidden = true;
back3.hidden = true;
back4.hidden = true;
back5.hidden = true;
back6.hidden = true;

strokes.hidden = true;
speed.hidden = true;
//end hiding everything
//game select buttons
ninetyEight.onclick = function () {
    ninetyEight.hidden = true;
    ninetyNine.hidden = true;
    twoK.hidden = true;
    classic.hidden = true;

    arbor.hidden = false;
    bayou.hidden = false;
    palm.hidden = false;
    

    back.hidden = false;

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = '98'

    results.game = '98';
}

ninetyNine.onclick = function() {
    ninetyEight.hidden = true;
    ninetyNine.hidden = true;
    twoK.hidden = true;
    classic.hidden = true;

    aspen.hidden = false;
    coconut.hidden = false;
    rancho.hidden = false;

    back.hidden = false;

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = '99'

    results.game = '99';
}

twoK.onclick = function () {
    ninetyEight.hidden = true;
    ninetyNine.hidden = true;
    twoK.hidden = true;
    classic.hidden = true;

    stone.hidden = false;
    sea.hidden = false;
    coyote.hidden = false;

    back.hidden = false;

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = '2K'

    results.game = '2K';
}

classic.onclick = function () {
    ninetyEight.hidden = true;
    ninetyNine.hidden = true;
    twoK.hidden = true;
    classic.hidden = true;

    mountain.hidden = false;
    anchor.hidden = false;
    scorpian.hidden = false;

    back.hidden = false;

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = 'Classic'

    results.game = 'Classic';
}
//end game select
// 98 course selection clicks
arbor.onclick = function () {

    arbor.hidden = true;
    bayou.hidden = true;
    palm.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back2.hidden = false;

    select.innerHTML = 'Select Mode:';
    courseSelected.innerHTML = 'Arbor Hill';

    results.course = 'Arbor Hill';
}

bayou.onclick = function () {

    arbor.hidden = true;
    bayou.hidden = true;
    palm.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back2.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Bayou Bend';

    results.course = 'Bayou Bend';
}

palm.onclick = function () {

    arbor.hidden = true;
    bayou.hidden = true;
    palm.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back2.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Palm Grove';

    results.course = 'Palm Grove';

}
// end 98 course select
// begin 99 course select
aspen.onclick = function () {

    aspen.hidden = true;
    coconut.hidden = true;
    rancho.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back3.hidden = false;

    select.innerHTML = 'Select Mode:';
    courseSelected.innerHTML = 'Aspen Lake';

    results.course = 'Aspen Lake';
}

coconut.onclick = function () {

    aspen.hidden = true;
    coconut.hidden = true;
    rancho.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back3.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Coconut Cove';

    results.course = 'Coconut Cove';
}

rancho.onclick = function () {

    aspen.hidden = true;
    coconut.hidden = true;
    rancho.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back3.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Rancho Saguaro';

    results.course = 'Rancho Saguaro';
}
//end 99 course select
// begin 2k course select
stone.onclick = function () {

    stone.hidden = true;
    sea.hidden = true;
    coyote.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back4.hidden = false;

    select.innerHTML = 'Select Mode:';
    courseSelected.innerHTML = 'Stone Valley';

    results.course = 'Stone Valley';
}

sea.onclick = function () {

    stone.hidden = true;
    sea.hidden = true;
    coyote.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back4.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Sea Haven';

    results.course = 'Sea Haven';
}

coyote.onclick = function () {

    stone.hidden = true;
    sea.hidden = true;
    coyote.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back4.hidden = false;

    select.innerHTML = 'Select Mode:'
    courseSelected.innerHTML = 'Coyote Run';

    results.course = 'Coyote Run';
}
// end 2k course select
// begin classic course select
mountain.onclick = function () {

    mountain.hidden = true;
    anchor.hidden = true;
    scorpian.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back5.hidden = false;

    select.innerHTML = 'Select Mode:';
    courseSelected.innerHTML = 'Mountain Springs';

    results.course = 'Mountain Springs';
}

anchor.onclick = function () {

    mountain.hidden = true;
    anchor.hidden = true;
    scorpian.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back5.hidden = false;

    select.innerHTML = 'Select Mode:';
    courseSelected.innerHTML = 'Anchor Cove';

    results.course = 'Anchor Cove';
}

scorpian.onclick = function () {

    mountain.hidden = true;
    anchor.hidden = true;
    scorpian.hidden = true;

    strokes.hidden = false;
    speed.hidden = false;

    back.hidden = true;
    back5.hidden = false;

    select.innerText = 'Select Mode:';
    courseSelected.innerText = 'Scorpion Bend';

    results.course = 'Scorpian Bend';
}
//end course select buttons
//begin game mode select buttons
//STROKE PLAY
strokes.onclick = function () {
        table.style.display = 'grid';
        strokes.hidden = true;
        speed.hidden = true;
        modeSelected.innerText = 'Stroke Play';
        select.style.display = 'none';
        back2.hidden = true;
        back3.hidden = true;
        back4.hidden = true;
        back5.hidden = true;
        back6.hidden = false;

        results.mode = 'Stroke Play';
}
//END STROKE PLAY


//SPEED RUN
speed.onclick = function () {
    speedRunDisplay.style.display = 'flex';
    strokes.hidden = true;
    speed.hidden = true;
    modeSelected.innerText = 'Speed Run';
    select.style.display = 'none';
    back2.hidden = true;
    back3.hidden = true;
    back4.hidden = true;
    back5.hidden = true;
    back6.hidden = false;

    results.mode = 'Speed Run';

    theButton.hidden = false;
    timerTotal.style.display = 'flex';
}     
//end game mode select buttons
// back button functionality
back.onclick = function () {
    ninetyEight.hidden = false;
    ninetyNine.hidden = false;
    twoK.hidden = false;
    classic.hidden = false;

    arbor.hidden = true;
    bayou.hidden = true;
    palm.hidden = true;
    aspen.hidden = true;
    coconut.hidden = true;
    rancho.hidden = true;
    stone.hidden = true;
    sea.hidden = true;
    coyote.hidden = true;
    mountain.hidden = true;
    anchor.hidden = true;
    scorpian.hidden = true;

    strokes.hidden = true;
    speed.hidden = true;

    back.hidden = true;
    

    select.innerHTML = 'Select Game:';
    gameSelected.innerHTML = '';
}

// 98 back button
back2.onclick = function () {

    arbor.hidden = false;
    bayou.hidden = false;
    palm.hidden = false;

    strokes.hidden = true;
    speed.hidden = true;

    back2.hidden = true;
    back.hidden = false;

    select.innerHTML = 'Select Course:';
    courseSelected.innerHTML = '';
}
//99 back button
back3.onclick = function () {
    
    aspen.hidden = false;
    coconut.hidden = false;
    rancho.hidden = false;

    strokes.hidden = true;
    speed.hidden = true;

    back3.hidden = true;
    back.hidden = false;

    select.innerHTML = 'Select Course:';
    courseSelected.innerHTML = '';
}

back4.onclick = function () {
    
    stone.hidden = false;
    sea.hidden = false;
    coyote.hidden = false;

    strokes.hidden = true;
    speed.hidden = true;

    back4.hidden = true;
    back.hidden = false;

    select.innerHTML = 'Select Course:';
    courseSelected.innerHTML = '';
}
back5.onclick = function () {
    
    mountain.hidden = false;
    anchor.hidden = false;
    scorpian.hidden = false;

    strokes.hidden = true;
    speed.hidden = true;

    back5.hidden = true;
    back.hidden = false;

    select.innerHTML = 'Select Course:';
    courseSelected.innerHTML = '';
}
back6.onclick = function () {
    window.location.reload();
}

scrollLock.onclick = function () {
    if (document.body.style.overflow = 'visible') {
        document.body.style.overflow = 'hidden';
    }
}
scrollUnlock.onclick = function () {
    if (document.body.style.overflow = 'hidden') {
        document.body.style.overflow = 'visible';
    }
}  




results = {
    name: 'Player 1',
    game: '',
    course: '',
    mode: '',
}