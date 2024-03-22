
let currentLanguage = 'en';

document.addEventListener('DOMContentLoaded', function() {

    //theme
    setThemeButton(document.querySelector('.home-theme'))

    //lang
    setLangButton( document.querySelector('.home-lang'))
    setTextToElements()

    //contact us button
    setHomeButton(document.querySelector('.home-btn'), document.querySelector('.home-text06'), document.querySelector('.home-form'))

    //what we do
    addWhatWeDoHover(document.querySelector('.lottie-container'), document.querySelector('.home-item'))
    addWhatWeDoHover(document.querySelector('.lottie-container-01'), document.querySelector('.home-item01'))
    addWhatWeDoHover(document.querySelector('.lottie-container-02'), document.querySelector('.home-item02'))
    addWhatWeDoHover(document.querySelector('.lottie-container-03'), document.querySelector('.home-item03'))

    //why us
    whyUsHover(document.querySelector('.home-item04'), document.querySelector('.home-text28'), document.querySelector('.home-text33'))
    whyUsHover(document.querySelector('.home-item05'), document.querySelector('.home-text35'), document.querySelector('.home-text39'))
    whyUsHover(document.querySelector('.home-item06'), document.querySelector('.home-text41'), document.querySelector('.home-text45'))
    whyUsHover(document.querySelector('.home-item07'), document.querySelector('.home-text47'), document.querySelector('.home-text52'))
    whyUsHover(document.querySelector('.home-item08'), document.querySelector('.home-text54'), document.querySelector('.home-text58'))
    whyUsHover(document.querySelector('.home-item09'), document.querySelector('.home-text60'), document.querySelector('.home-text64'))

    //our blog
    setOurBlog(document.querySelector('.home-itemblog'), document.querySelector('.home-iconarrow img'))

    //contact us
    const buttonSend = document.querySelector('.home-btn-send')
    setSendButton(buttonSend, document.querySelector('.home-text65'))

    const inputName = document.querySelector('.home-input-name');
    const inputEmail = document.querySelector('.home-input-email');
    const inputMessage = document.querySelector('.home-input-message');

    const inputNameError = document.querySelector('.input-name-error');
    const inputEmailError = document.querySelector('.input-email-error');
    const inputMessageError = document.querySelector('.input-message-error');

    addInputListeners([inputName, inputEmail, inputMessage], [inputNameError, inputEmailError, inputMessageError])
    buttonSend.onclick = function() {
        if (validateInputs([inputName, inputEmail, inputMessage], [inputNameError, inputEmailError, inputMessageError])) {
            fetchContactUs(inputName, inputEmail, inputMessage)
        }

    };
});

function setTextToElements() {
    fetch(`${currentLanguage}.json`)
        .then(response => response.json())
        .then(data => {
            Object.keys(data).forEach(key => {
                const element = document.getElementById(key);
                if (element) {
                    element.textContent = data[key];
                }
            });
        })
        .catch(error => console.error('Error loading language:', error));
}

function setThemeButton(button) {
    const body = document.body;
    let currenTheme = localStorage.getItem('theme') || 'light-theme'
    body.classList.add(currenTheme);
    button.src =  currenTheme === 'dark-theme' ? 'public/external/ic-dark-theme.svg' : 'public/external/ic-light-theme.svg';

    button.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light-theme');
        } else {
            body.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark-theme');
        }
        button.src =  body.classList.contains('dark-theme') ? 'public/external/ic-dark-theme.svg' : 'public/external/ic-light-theme.svg';
    });
}

function setLangButton(button) {
    button.onclick = function() {
        currentLanguage = currentLanguage === 'ua' ? 'en' : 'ua';
        button.src = currentLanguage === 'ua' ? 'public/external/ic-en-lang.svg' : 'public/external/ic-ua-lang.svg';
        setTextToElements();
    };
}

function setHomeButton(button, text, destination) {
    button.addEventListener('mouseover', function() {
        text.style.color = 'rgba(91, 128, 92, 1)';
    });


    button.addEventListener('mouseout', function() {
        text.style.color = '';
    });

    button.onclick = function() {
        destination.scrollIntoView({ behavior: 'smooth' });
    };
}

function addWhatWeDoHover(animationContainer, itemContainer) {
    const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'lottie.json'
    });

    itemContainer.addEventListener('mouseenter', function() {
        animation.play();
    });

    itemContainer.addEventListener('mouseleave', function() {
        animation.stop();
    });
}

function whyUsHover(item, itemHeaderText, itemDescriptionText) {
    item.addEventListener('mouseover', function() {
        itemHeaderText.style.color = 'rgba(255, 255, 255, 1)';
        itemDescriptionText.style.color = 'rgba(255, 255, 255, 1)';
    });


    item.addEventListener('mouseout', function() {
        itemHeaderText.style.color = 'rgba(91, 128, 92, 1)';
        itemDescriptionText.style.color = 'rgba(91, 128, 92, 1)';
    });
}

function setOurBlog(blockBlog, iconArrow) {
    if (blockBlog && iconArrow) {
        const originalSrc = iconArrow.src;
        const newSrc = 'public/external/iconi441-2ud.svg';

        blockBlog.addEventListener('mouseover', function() {
            iconArrow.src = newSrc;
        });

        blockBlog.addEventListener('mouseout', function() {
            iconArrow.src = originalSrc;
        });
    }
}

function setSendButton(buttonSend, textSend) {
    buttonSend.addEventListener('mouseover', function() {
        textSend.style.color = 'rgba(91, 128, 92, 1)';
    });

    buttonSend.addEventListener('mouseout', function() {
        textSend.style.color = '';
    });
}

function validateInputs(inputs, errorMessages) {
    let isValid = true;

    inputs.forEach((input, index) => {
        const errorMessage = errorMessages[index];
        const isEmpty = input.value.trim() === '';

        if (isEmpty) {
            errorMessage.style.visibility = 'visible';
            isValid = false;
        } else {
            errorMessage.style.visibility = 'hidden';
        }
    });

    return isValid;
}

function addInputListeners(inputs, errorMessages) {

    inputs.forEach((input, index) => {
        input.addEventListener('input', function() {
            const errorMessage = errorMessages[index];
            errorMessage.style.visibility = 'hidden';
        })
    });
}

function fetchContactUs(inputName, inputEmail, inputMessage) {
    const currentDateTime = new Date();
    const formattedDate = currentDateTime.getDate() + ":" +
        (currentDateTime.getMonth() + 1) + ":" + // Месяцы начинаются с 0
        currentDateTime.getFullYear() + " " +
        currentDateTime.getHours() + ":" +
        currentDateTime.getMinutes() + ":" +
        currentDateTime.getSeconds();
    const contactUs = {
        date: formattedDate,
        name: inputName.value,
        email: inputEmail.value,
        message: inputMessage.value
    };
    fetch('https://europe-central2-vn-team-website.cloudfunctions.net/function-contact-us', {
        method: 'POST',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify(contactUs)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
}