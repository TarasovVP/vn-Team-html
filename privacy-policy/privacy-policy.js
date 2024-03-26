
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
    let currenTheme = localStorage.getItem('theme') || 'light-theme'
    body.classList.add(currenTheme);
    button.src =  currenTheme === 'dark-theme' ? '/public/external/ic-dark-theme.svg' : '/public/external/ic-light-theme.svg';

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
    currentLanguage = localStorage.getItem('currentLanguage');
    currentLanguage = currentLanguage === 'ua' ? 'en' : 'ua';
    button.onclick = function() {
        currentLanguage = currentLanguage === 'ua' ? 'en' : 'ua';
        localStorage.setItem('currentLanguage', currentLanguage);
        button.src = currentLanguage === 'ua' ? '/public/external/ic-en-lang.svg' : '/public/external/ic-ua-lang.svg';
        setTextContent();
    };
}

function setTextContent() {
    fetch(`privacy-policy-${currentLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    element.innerHTML = data[key];
                }
            });
        })
        .catch(error => console.error('Error loading language:', error));
}