let moreButton = document.querySelector('#show-text');
let hiddenHistory = document.querySelector('#hidden-history');
let questionBtn = document.querySelector('#question-button');
let questionForm = document.querySelector('#question-form');

//Add functionality to the 'more' button.
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

//Add functionality to the 'Get in Touch' button.
questionBtn.addEventListener('click', function(){
    questionForm.removeAttribute('class', 'hidden');
    questionBtn.setAttribute('class', 'hidden');
});


