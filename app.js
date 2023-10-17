let moreButton = document.querySelector('#show-text');
let hiddenHistory = document.querySelector('#hidden-history');
let questionBtn = document.querySelector('#question-button');
let questionForm = document.querySelector('#question-form');
console.log(questionForm);

moreButton.addEventListener('click', function(){
    if(hiddenHistory.classList.contains('hidden')){
        hiddenHistory.removeAttribute('class', 'hidden');
        moreButton.textContent = ".less";
    } else {
        hiddenHistory.setAttribute('class', 'hidden');
        moreButton.textContent = "...more";
    }
console.log(moreButton.classList.contains('hidden'));    
});

questionBtn.addEventListener('click', function(){
    questionForm.removeAttribute('class', 'hidden');
    questionBtn.setAttribute('class', 'hidden');
})
