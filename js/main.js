const menuButtonOne = document.querySelector('.menu-btn-one');
const bars = document.querySelectorAll('bar');

menuButtonOne.addEventListener('click', () => {
    menuButtonOne.classList.toggle('active');

    bars.forEach(bar => {
        bar.classList.toggle('active');
    });
});