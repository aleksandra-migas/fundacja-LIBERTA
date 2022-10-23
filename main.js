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

//contrast changer
/*const darkMode = document.querySelector('.contrast-btn');

darkMode.onclick = function(){
    document.body.classList.toggle('dark-mode');
}*/

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

