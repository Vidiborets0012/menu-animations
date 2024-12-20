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

const menuButtonThree = document.querySelector('.menu-btn-three');
const menuThree = document.querySelector('.menu-three');

menuButtonThree.addEventListener('click', () => {
    
    menuButtonThree.classList.toggle('active');
    menuThree.classList.toggle('active');

    bars.forEach(bar => {
        bar.classList.toggle('active');
    });
});

const menuButtonFour = document.querySelector('.menu-btn-four');
const menuFour = document.querySelector('.menu-four');

menuButtonFour.addEventListener('click', () => {
    
    menuButtonFour.classList.toggle('active');
    menuFour.classList.toggle('active');

    bars.forEach(bar => {
        bar.classList.toggle('active');
    });
});