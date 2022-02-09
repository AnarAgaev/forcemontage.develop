const animationLine = $('#line'),
    animationPointsCount = $('.animation-line-point').length,
    animationLineDelimiter = 100 / animationPointsCount;


console.log(animationLineDelimiter)

const showAnimationLine = () => {
    const scrollTop = window.pageYOffset,
        windowHeight = $(window).height(),
        windowScrollTop = scrollTop + windowHeight,
        point = $('.animation-line-point');

    point.each((idx, el) => {
        const elScrollTop = $(el).offset().top,
            elIdx = $(el).index();

        if (windowScrollTop > elScrollTop) {
            $(el).removeClass('animation-line-point');
            animationLine.css('height', animationLineDelimiter * elIdx + '%');
        }
    });
};

$(document).ready(() => {
    $(window).scroll(() => {
        // Показываем анимированную линию по мере
        // продвижения пользователя по экрану
        showAnimationLine();
    });
});