'use strict'

const timerCt = document.querySelector('.timer');
const secQuestionsBox = document.querySelector('.sec-questions-box');
let secQuestions = document.querySelector('.sec-questions');
const secOptions = document.querySelector('.sec-questions__options');
const secOption =  document.querySelector('.sec-questions__option');
let optionAll = document.querySelectorAll('.option-btn');
const toggleLeft = document.querySelector('.toggle-left');
const toggleRight = document.querySelector('.toggle-right');
// const optionBtn = document.querySelector('.option-btn');
const qItems = document.querySelectorAll('.qitem');
const btnSubmit = document.querySelector('.btn');
const btnSubmitConfirm = document.getElementById('btn-confirm');
const btnSubmitCancel = document.getElementById('btn-cancel');
const popup = document.querySelector('.popup');


const setLogOutTimer = function() {

    const tick = function() {
        const min = String(Math.trunc(time / 60)).padStart(2, 0);
        const sec = String(time % 60).padStart(2, 0);

        timerCt.textContent = `${min}:${sec}`;

        if(time == 0) {
            clearInterval(timer);
            alert('Time is up!!');
        }

        time--;
    }
    let time = 60;

    tick();
    const timer = setInterval(tick, 1000);
}

//call timer function

setLogOutTimer();

//select ooptions
let currOpt, prevOpt;
prevOpt = null;

const selectOption = function() {
    optionAll.forEach(opt => {
        opt.addEventListener('click', function(e) {
            if(prevOpt) prevOpt.classList.remove('option-btn--active');
    
            currOpt = e.target;
            prevOpt = currOpt;
    
            opt.classList.add('option-btn--active');
        })
    });
}
selectOption();

//
let currPos = 1;
let start, end;
start = 1;
end = 3;

let currSecQ;
currSecQ = secQuestions;

const insertQuestion = function(no, question, options) {
    
    const html = `
        <div class="sec-questions">
            <p class="sec-questions__q">${no}. ${question}</p>
            <div class="sec-questions__options">
                <div class="sec-questions__option">
                    <input type="radio" class="option" id="op-1" name="ops">
                    <label class="option-label" for="op-1">
                        <span class="option-btn"></span>
                        ${options[0]}
                    </label>
                </div>
                <div class="sec-questions__option">
                    <input type="radio" class="option" id="op-2" name="ops">
                    <label class="option-label" for="op-2">
                        <span class="option-btn"></span>
                        ${options[1]}
                    </label>
                </div>
                <div class="sec-questions__option">
                    <input type="radio" class="option" id="op-3" name="ops">
                    <label class="option-label" for="op-3">
                        <span class="option-btn"></span>
                        ${options[2]}
                    </label>
                </div>
                <div class="sec-questions__option">
                    <input type="radio" class="option" id="op-4" name="ops">
                    <label class="option-label" for="op-4">
                        <span class="option-btn"></span>
                        ${options[3]}
                    </label>
                </div>
            </div>
        </div>` 

    if(currSecQ) {
        currSecQ.remove();
    }    
    secQuestionsBox.insertAdjacentHTML('afterbegin', html);
    currSecQ = document.querySelector('.sec-questions');       
};

const Questions = {
    1: {
        question: 'What is the best Smartphone?',
        options: ['Apple', 'Samsung', 'MI', 'Vivo']
    },
    2: {
        question: 'What is the best Fruit?',
        options: ['Apple', 'Orange', 'Strawberry', 'Grapes']
    },
    3: {
        question: 'What is the best Sport?',
        options: ['Football', 'Cricket', 'Tennis', 'Basketball']
    },

}

const goToQuestion = function(no) {
    const {[no]:{question}} = Questions;
    const {[no]:{options}} = Questions;

    insertQuestion(no, question, options);
}


const reInit = function() {
    optionAll = document.querySelectorAll('.option-btn');
    selectOption();
}

const selectQuestion = function(e) {
    if(e.target === toggleLeft) {
        currPos = (currPos <= start) ? end : --currPos;
    }
    else if(e.target === toggleRight) {
        currPos = (currPos >= end) ? start : ++currPos;
    }
    goToQuestion(currPos);
    reInit();
}

toggleLeft.addEventListener('click', selectQuestion);
toggleRight.addEventListener('click', selectQuestion);

//Navigate
qItems.forEach(item => {
    item.addEventListener('click', function(e) {
        this.style.backgroundColor = 'orangered'; //linear-gradient(to top left, #e52a5a, #ff585f);

        const qNo = parseInt(this.firstElementChild.textContent);
        currPos = qNo;
        goToQuestion(currPos);

        //changes for new quesion page
        reInit();
    })
});

btnSubmit.addEventListener('click', function(e) {
    // console.log(this);
    popup.classList.add('popup--active');
});

btnSubmitCancel.addEventListener('click', function(e) {
    popup.classList.remove('popup--active');
});