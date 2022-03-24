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
            if (body.classList.contains('insultBody')) {
                body.classList.replace('insultBody', 'normalBody');
                main.classList.replace('insultMain', 'normalMain');
                adviceText.classList.replace('insultAdvice', 'normalAdvice');
                adviceID.classList.replace('insultID', 'normalID');
            }
            adviceID.textContent = 'Advice #' + obj.slip.id;
            adviceText.textContent = obj.slip.advice;
            console.log('ID: ' + obj.slip.id);
            console.log(obj.slip.advice.length);
        })
    })
}

let insulter = function () {
    let insult = fetch('https://evilinsult.com/generate_insult.php?lang=en&amp;type=json', {
        method: 'GET',
        cache: 'no-cache',
        accept: 'application/json',
        mode: 'cors'
    }).then(function (insult){
        insult.text().then(function (obj){
            console.log(obj);
            adviceID.textContent = 'Advice #INSULT';
            adviceText.textContent = obj;
            body.classList.replace('normalBody', 'insultBody');
            main.classList.replace('normalMain', 'insultMain');
            adviceText.classList.replace('normalAdvice', 'insultAdvice');
            adviceID.classList.replace('normalID', 'insultID');
        })
    })
}

let clickNum = 0;

button.addEventListener('click', function () {
    clickNum++;
    if (clickNum % 10 == 0) {
        insulter();
    }
    else {
        advicer()
    }
        });

