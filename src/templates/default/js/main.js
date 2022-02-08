// Блокируем зум экрана на IOS
document.addEventListener(
    'touchmove',
    function(event) {
        event = event.originalEvent || event;

        if (event.scale !== 1) {
            event.preventDefault();
        }
    },
    false
);

window.IS_DEBUGGING = true;

window.showLoader = () => {
    $('#loader').css('display', 'flex');

    setTimeout(
        () => $('#loader').addClass('show'),
        10
    );
};

window.hideLoader = () => {
    $('#loader').removeClass('show');

    setTimeout(
        () => $('#loader').css('display', 'none'),
        500
    );
};

window.getScrollWidth = () => {
    let div = document.createElement('div');

    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';

    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;

    div.remove();

    return scrollWidth;
};

window.fixScrollModalOpen = () => {
    $('body')
        .addClass('modal-open')
        .css('padding-right', getScrollWidth() + 'px');

    $('#header')
        .css('padding-right', getScrollWidth() + 'px');
};

window.fixScrollModalClose = () =>  {
    $('body')
        .removeClass('modal-open')
        .css('padding-right', '0');

    $('#header')
        .css('padding-right', '0');
};

const showAnimationElements = () => {
    const scrollTop = window.pageYOffset,
        windowHeight = $(window).height(),
        windowScrollTop = scrollTop + windowHeight,
        animationElms = $('.animation');

    animationElms.each((idx, el) => {
        const elScrollTop = $(el).offset().top;

        if (windowScrollTop > elScrollTop) {
            $(el).removeClass('animation');
        }
    });
},

showFooterElements = () => {
    const bodyHeight = $('body').height(),
        scrollTop = window.pageYOffset,
        windowHeight = $(window).height(),
        windowScrollTop = scrollTop + windowHeight;

    if (windowScrollTop >= bodyHeight - 100) {
        $('.footer__copy').removeClass('animation');
    }
};

$(document).ready(() => {
    $(window).scroll(() => {
        // Показываем анимируемые элементы,
        // когда скролл доходит до него
        showAnimationElements();

        // Показываем скрывтые элементы
        // футера, когда проскролили
        // всю страницу,
        // showFooterElements();
    });
});