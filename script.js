let ninetyEight = document.getElementById('98');
let ninetyNine = document.getElementById('99');
let twoK = document.getElementById('2K');
let classic = document.getElementById('classic');

let course1 = document.getElementById('course1');
let course2 = document.getElementById('course2');
let course3 = document.getElementById('course3');
let course4 = document.getElementById('course4');

let select = document.getElementById('select');
let gameSelected = document.getElementById('gameSelected');

course1.hidden = true;
course2.hidden = true;
course3.hidden = true;
course4.hidden = true;


ninetyEight.onclick = function () {
    ninetyEight.hidden = true;
    ninetyNine.hidden = true;
    twoK.hidden = true;
    classic.hidden = true;

    course1.hidden = false;
    course2.hidden = false;
    course3.hidden = false;
    course4.hidden = false;

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = '98'
}

ninetyNine.onclick = function () {
    ninetyEight.hidden = true;
    ninetyNine.hidden = true;
    twoK.hidden = true;
    classic.hidden = true;

    course1.hidden = false;
    course2.hidden = false;
    course3.hidden = false;
    course4.hidden = false;

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = '99'
}

twoK.onclick = function () {
    ninetyEight.hidden = true;
    ninetyNine.hidden = true;
    twoK.hidden = true;
    classic.hidden = true;

    course1.hidden = false;
    course2.hidden = false;
    course3.hidden = false;
    course4.hidden = false;

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = '2K'
}

classic.onclick = function () {
    ninetyEight.hidden = true;
    ninetyNine.hidden = true;
    twoK.hidden = true;
    classic.hidden = true;

    course1.hidden = false;
    course2.hidden = false;
    course3.hidden = false;
    course4.hidden = false;

    select.innerHTML = 'Select Course:'
    gameSelected.innerHTML = 'Classic'
}

back.onclick = function () {
    ninetyEight.hidden = false;
    ninetyNine.hidden = false;
    twoK.hidden = false;
    classic.hidden = false;

    course1.hidden = true;
    course2.hidden = true;
    course3.hidden = true;
    course4.hidden = true;

    select.innerHTML = 'Select Game:'
    gameSelected.innerHTML = ''
}