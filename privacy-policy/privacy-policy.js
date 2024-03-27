
let currentLanguage = 'en'

document.addEventListener('DOMContentLoaded', function() {
    //theme
    setPPThemeButton(document.querySelector('.privacy-policy-theme'))

    //lang
    setPPLangButton( document.querySelector('.privacy-policy-lang'))
    setTextContent()
});

function setPPThemeButton(button) {
    const body = document.body;
    let isDarkTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    let currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : isDarkTheme ? 'dark-theme' : 'light-theme'
    body.classList.add(currentTheme);
    button.src =  currentTheme === 'dark-theme' ? '/public/external/ic-dark-theme.svg' : '/public/external/ic-light-theme.svg';

    button.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
        button.src =  body.classList.contains('dark-theme') ? '/public/external/ic-dark-theme.svg' : '/public/external/ic-light-theme.svg';
    });
}

function setPPLangButton(button) {
    currentLanguage = localStorage.getItem('currentLanguage') ? localStorage.getItem('currentLanguage') : navigator.language || navigator.userLanguage;
    console.error('pp setLangButton currentLanguage ' + currentLanguage)
    currentLanguage = currentLanguage === 'ua' ? 'ua' : 'en';
    button.src = currentLanguage === 'ua' ? '/public/external/ic-en-lang.svg' : '/public/external/ic-ua-lang.svg';
    button.onclick = function() {
        currentLanguage = currentLanguage === 'ua' ? 'en' : 'ua';
        localStorage.setItem('currentLanguage', currentLanguage);
        button.src = currentLanguage === 'ua' ? '/public/external/ic-en-lang.svg' : '/public/external/ic-ua-lang.svg';
        setTextContent();
    };
}

function setTextContent() {
    const element = document.querySelector('.privacy-policy-content');
    fetch(`privacy-policy-${currentLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            if (element && data['privacy-policy-content']) {
                element.innerHTML = data['privacy-policy-content'];
            }
        })
        .catch(error => console.error('Error loading language:', error));
}