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
    $('#loader').addClass('show');
};

window.hideLoader = () => {
    $('#loader').removeClass('show');
};

const showAnimationElements = () => {
    const offset = $(window).width() < 769
        ? 100
        : 200;

    const scrollTop = window.pageYOffset,
        windowHeight = $(window).height(),
        windowScrollTop = scrollTop + windowHeight - offset,
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
        showFooterElements();
    });
});