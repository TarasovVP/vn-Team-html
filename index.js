
document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('.home-btn');
    const text = document.querySelector('.home-text06');

    button.addEventListener('mouseover', function() {
        text.style.color = 'rgba(91, 128, 92, 1)';
    });


    button.addEventListener('mouseout', function() {
        text.style.color = '';
    });

    button.onclick = function() {
        document.querySelector('.home-form').scrollIntoView({ behavior: 'smooth' });
    };

    //our blog
    const blockBlog = document.querySelector('.home-itemblog');
    const iconArrow = document.querySelector('.home-iconarrow img');

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

    //why us
    const firstItem = document.querySelector('.home-item04');
    const firstItemHeaderText = document.querySelector('.home-text28');
    const firstItemDescriptionText = document.querySelector('.home-text33');
    firstItem.addEventListener('mouseover', function() {
        firstItemHeaderText.style.color = 'rgba(255, 255, 255, 1)';
        firstItemDescriptionText.style.color = 'rgba(255, 255, 255, 1)';
    });


    firstItem.addEventListener('mouseout', function() {
        firstItemHeaderText.style.color = 'rgba(91, 128, 92, 1)';
        firstItemDescriptionText.style.color = 'rgba(91, 128, 92, 1)';
    });

    const secondItem = document.querySelector('.home-item05');
    const secondItemHeaderText = document.querySelector('.home-text35');
    const secondItemDescriptionText = document.querySelector('.home-text39');
    secondItem.addEventListener('mouseover', function() {
        secondItemHeaderText.style.color = 'rgba(255, 255, 255, 1)';
        secondItemDescriptionText.style.color = 'rgba(255, 255, 255, 1)';
    });


    secondItem.addEventListener('mouseout', function() {
        secondItemHeaderText.style.color = 'rgba(91, 128, 92, 1)';
        secondItemDescriptionText.style.color = 'rgba(91, 128, 92, 1)';
    });

    const thirdItem = document.querySelector('.home-item06');
    const thirdItemHeaderText = document.querySelector('.home-text41');
    const thirdItemDescriptionText = document.querySelector('.home-text45');
    thirdItem.addEventListener('mouseover', function() {
        thirdItemHeaderText.style.color = 'rgba(255, 255, 255, 1)';
        thirdItemDescriptionText.style.color = 'rgba(255, 255, 255, 1)';
    });


    thirdItem.addEventListener('mouseout', function() {
        thirdItemHeaderText.style.color = 'rgba(91, 128, 92, 1)';
        thirdItemDescriptionText.style.color = 'rgba(91, 128, 92, 1)';
    });

    const forthItem = document.querySelector('.home-item07');
    const forthItemHeaderText = document.querySelector('.home-text47');
    const forthItemDescriptionText = document.querySelector('.home-text52');
    forthItem.addEventListener('mouseover', function() {
        forthItemHeaderText.style.color = 'rgba(255, 255, 255, 1)';
        forthItemDescriptionText.style.color = 'rgba(255, 255, 255, 1)';
    });


    forthItem.addEventListener('mouseout', function() {
        forthItemHeaderText.style.color = 'rgba(91, 128, 92, 1)';
        forthItemDescriptionText.style.color = 'rgba(91, 128, 92, 1)';
    });

    const fifthItem = document.querySelector('.home-item08');
    const fifthItemHeaderText = document.querySelector('.home-text54');
    const fifthItemDescriptionText = document.querySelector('.home-text58');
    fifthItem.addEventListener('mouseover', function() {
        fifthItemHeaderText.style.color = 'rgba(255, 255, 255, 1)';
        fifthItemDescriptionText.style.color = 'rgba(255, 255, 255, 1)';
    });


    fifthItem.addEventListener('mouseout', function() {
        fifthItemHeaderText.style.color = 'rgba(91, 128, 92, 1)';
        fifthItemDescriptionText.style.color = 'rgba(91, 128, 92, 1)';
    });

    const sixthItem = document.querySelector('.home-item09');
    const sixthItemHeaderText = document.querySelector('.home-text60');
    const sixthItemDescriptionText = document.querySelector('.home-text64');
    sixthItem.addEventListener('mouseover', function() {
        sixthItemHeaderText.style.color = 'rgba(255, 255, 255, 1)';
        sixthItemDescriptionText.style.color = 'rgba(255, 255, 255, 1)';
    });


    sixthItem.addEventListener('mouseout', function() {
        sixthItemHeaderText.style.color = 'rgba(91, 128, 92, 1)';
        sixthItemDescriptionText.style.color = 'rgba(91, 128, 92, 1)';
    });

    const buttonSend = document.querySelector('.home-btn-send');
    const textSend = document.querySelector('.home-text65');

    buttonSend.addEventListener('mouseover', function() {
        textSend.style.color = 'rgba(91, 128, 92, 1)';
    });


    buttonSend.addEventListener('mouseout', function() {
        textSend.style.color = '';
    });

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

    const animationContainer = document.querySelector('.lottie-container');

    const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'lottie.json'
    });
    const itemContainer = document.querySelector('.home-item');
    itemContainer.addEventListener('mouseenter', function() {
        animation.play();
    });

    itemContainer.addEventListener('mouseleave', function() {
        animation.stop();
    });
});

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