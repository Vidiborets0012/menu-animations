const menuButtonOne = document.querySelector('.menu-btn-one');
const menuOne = document.querySelector('.menu-one');
const bars = document.querySelectorAll('bar');



menuButtonOne.addEventListener('click', () => {
    
    menuButtonOne.classList.toggle('active');
    menuOne.classList.toggle('active');

    bars.forEach(bar => {
        bar.classList.toggle('active');
    });
});

const menuButtonTwo = document.querySelector('.menu-btn-two');
const menuTwo = document.querySelector('.menu-two');

menuButtonTwo.addEventListener('click', () => {
    
    menuButtonTwo.classList.toggle('active');
    menuTwo.classList.toggle('active');

    bars.forEach(bar => {
        bar.classList.toggle('active');
    });
});

