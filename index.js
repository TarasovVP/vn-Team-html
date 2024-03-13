
document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('.home-btn');
    const text = document.querySelector('.home-text06');

    button.addEventListener('mouseover', function() {
        text.style.color = 'rgba(91, 128, 92, 1)';
    });


    button.addEventListener('mouseout', function() {
        text.style.color = '';
    });

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
});