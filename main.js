const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

       /* navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkSlide 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });*/
        burger.classList.toggle('toggle');
    });
}
navSlide();

// Dark mode + local storage:

let darkMode = localStorage.getItem('darkMode');
const contrastButton = document.querySelector('#contrast-btn');

const enableDarkMode = () => {
document.body.classList.add('dark-mode');
contrastButton.classList.add('enable-color');
localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    contrastButton.classList.remove('enable-color');
    localStorage.setItem('darkMode', null);
    };

    if (darkMode === 'enabled') {
        enableDarkMode();
    }

contrastButton.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode();
        console.log(darkMode);
    } else {
        disableDarkMode();
        console.log(darkMode);
    }
});

// Large font + local storage

let largeFont = localStorage.getItem('largeFont');
const fontButton = document.querySelector('#font-btn');

const enableLargeFont = () => {
document.body.classList.add('large-font');
fontButton.classList.add('enable-color');
localStorage.setItem('largeFont', 'enabledFont');
};

const disableLargeFont = () => {
    document.body.classList.remove('large-font');
    fontButton.classList.remove('enable-color');
    localStorage.setItem('largeFont', null);
    };

    if (largeFont === 'enabledFont') {
        enableLargeFont();
    }

fontButton.addEventListener('click', () => {
    largeFont = localStorage.getItem('largeFont');
    if (largeFont !== 'enabledFont') {
        enableLargeFont();
        console.log(largeFont);
    } else {
        disableLargeFont();
        console.log(largeFont);
    }
});

//'czytaj wiecej', zakladka 'zespol'

const more = document.querySelector('.more');
const moreBtn = document.querySelector('.more-btn');
const dots = document.querySelector('.dots');
const shortText = document.querySelector('.short-text');

moreBtn.addEventListener('click', (e) =>{
    if (dots.style.display === 'none'){
        dots.style.display = 'inline';
        shortText.style.display = 'inline';
        moreBtn.innerHTML = 'Czytaj więcej';
        more.style.display = 'none';
    }else{
        dots.style.display = 'none';
        shortText.style.display = 'none';
        moreBtn.innerHTML = 'Czytaj mniej';
        more.style.display = 'inline';
    }
});


const more2 = document.querySelector('.more2');
const moreBtn2 = document.querySelector('.more-btn2');
const dots2 = document.querySelector('.dots2');
const shortText2 = document.querySelector('.short-text2');

moreBtn2.addEventListener('click', (e) =>{
    if (dots2.style.display === 'none'){
        dots2.style.display = 'inline';
        shortText2.style.display = 'inline';
        moreBtn2.innerHTML = 'Czytaj więcej';
        more2.style.display = 'none';
    }else{
        dots2.style.display = 'none';
        shortText2.style.display = 'none';
        moreBtn2.innerHTML = 'Czytaj mniej';
        more2.style.display = 'inline';
    }
});

const more3 = document.querySelector('.more3');
const moreBtn3 = document.querySelector('.more-btn3');
const dots3 = document.querySelector('.dots3');
const shortText3 = document.querySelector('.short-text3');

moreBtn3.addEventListener('click', (e) =>{
    if (dots3.style.display === 'none'){
        dots3.style.display = 'inline';
        shortText3.style.display = 'inline';
        moreBtn3.innerHTML = 'Czytaj więcej';
        more3.style.display = 'none';
    }else{
        dots3.style.display = 'none';
        shortText3.style.display = 'none';
        moreBtn3.innerHTML = 'Czytaj mniej';
        more3.style.display = 'inline';
    }
});


const more4 = document.querySelector('.more4');
const moreBtn4 = document.querySelector('.more-btn4');
const dots4 = document.querySelector('.dots4');
const shortText4 = document.querySelector('.short-text4');

moreBtn4.addEventListener('click', (e) =>{
    if (dots4.style.display === 'none'){
        dots4.style.display = 'inline';
        shortText4.style.display = 'inline';
        moreBtn4.innerHTML = 'Czytaj więcej';
        more4.style.display = 'none';
    }else{
        dots4.style.display = 'none';
        shortText4.style.display = 'none';
        moreBtn4.innerHTML = 'Czytaj mniej';
        more4.style.display = 'inline';
    }
});

const more5 = document.querySelector('.more5');
const moreBtn5 = document.querySelector('.more-btn5');
const dots5 = document.querySelector('.dots5');
const shortText5 = document.querySelector('.short-text5');

moreBtn5.addEventListener('click', (e) =>{
    if (dots5.style.display === 'none'){
        dots5.style.display = 'inline';
        shortText5.style.display = 'inline';
        moreBtn5.innerHTML = 'Czytaj więcej';
        more5.style.display = 'none';
    }else{
        dots5.style.display = 'none';
        shortText5.style.display = 'none';
        moreBtn5.innerHTML = 'Czytaj mniej';
        more5.style.display = 'inline';
    }
});

const more6 = document.querySelector('.more6');
const moreBtn6 = document.querySelector('.more-btn6');
const dots6 = document.querySelector('.dots6');
const shortText6 = document.querySelector('.short-text6');


moreBtn6.addEventListener('click', (e) =>{
    if (dots6.style.display === 'none'){
        dots6.style.display = 'inline';
        shortText6.style.display = 'inline';
        moreBtn6.innerHTML = 'Czytaj więcej';
        more6.style.display = 'none';
    }else{
        dots6.style.display = 'none';
        shortText6.style.display = 'none';
        moreBtn6.innerHTML = 'Czytaj mniej';
        more6.style.display = 'inline';
    }
});

