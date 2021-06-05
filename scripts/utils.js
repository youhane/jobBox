var burger = document.getElementById('burger');
var down = document.getElementById('down');

function dropdown() {
    if (down.classList.contains('hidden')) {
        burger.addEventListener('click', down.classList.remove('hidden'));
    } else {
        burger.addEventListener('click', down.classList.add('hidden'));
    }
}

var signUp1 = document.getElementById('partOne');
var signUp2 = document.getElementById('partTwo');

function nextForm() {
    if (signUp2.classList.contains('hidden')) {
        signUp2.addEventListener('click', signUp2.classList.remove('hidden'));
        signUp1.addEventListener('click', signUp1.classList.add('hidden'));
    } else if (signUp1.classList.contains('hidden')) {
        signUp1.addEventListener('click', signUp1.classList.remove('hidden'));
        signUp2.addEventListener('click', signUp2.classList.add('hidden'));
    }
}