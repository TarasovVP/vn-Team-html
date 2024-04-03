
let currentLanguage = 'en'

document.addEventListener('DOMContentLoaded', function() {
    //theme
    setPPThemeButton(document.querySelector('.privacy-policy-theme'))

    //lang
    setPPLangButton( document.querySelector('.privacy-policy-lang'))
    setTextContent()

    decodeEmails()
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
                decodeEmails(element)
            }
        })
        .catch(error => console.error('Error loading language:', error));
}

function decodeEmails(container) {
    let encodedAddresses = container.querySelectorAll('.__cf_email__');
    for (let i = 0; i < encodedAddresses.length; i++) {
        let encodedString = encodedAddresses[i].getAttribute('data-cfemail');
        encodedAddresses[i].innerHTML = decodeCfEmail(encodedString);
    }
}

function decodeCfEmail(encodedString) {
    let email = '';
    const key = parseInt(encodedString.substring(0, 2), 16);

    for (let i = 2; i < encodedString.length; i += 2) {
        let nextChar = parseInt(encodedString.substring(i, i + 2), 16);
        email += String.fromCharCode(nextChar ^ key);
    }

    return email;
}