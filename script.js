window.addEventListener("load", function() {
    advicer();
});

let button = document.querySelector('.button');
let adviceID = document.querySelector('.advice-ID');
let adviceText = document.querySelector('.advice-text');
let body = document.querySelector('.back');
let main = document.querySelector('.main-block');

let advicer = function() {
    let advice = fetch('https://api.adviceslip.com/advice', {
        method: 'GET',
        cache: 'no-cache'
    }).then(function (advice) {
        advice.json().then(function (obj) {
            adviceID.textContent = 'Advice #' + obj.slip.id;
            adviceText.textContent = obj.slip.advice;
        })
    })
}

button.addEventListener('click', function () {
        advicer();
        });

