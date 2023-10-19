let questionBtn = document.querySelector('.button');
let questionForm = document.querySelector('.form');

//Add functionality to the 'Get in Touch' button.
questionBtn.addEventListener('click', function(){
    questionForm.removeAttribute('class', 'hidden');
    questionBtn.setAttribute('class', 'hidden');
});