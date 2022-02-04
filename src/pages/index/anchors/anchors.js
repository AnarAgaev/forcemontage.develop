const scrollToPlace = e => {
    e.preventDefault();

    const delta = $(window).width() > 768 ? 100 : 50;

    const _this = e.target,
        targetId = $(_this).attr('href'),
        top = $(targetId).offset().top - delta;

    $('body,html').animate(
    { scrollTop: top },
    1000
    );
};

$(document).ready(() => {
    $('.anchors__link').on(
        'click',
        scrollToPlace
    );
});