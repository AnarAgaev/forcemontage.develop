const scrollToPlace = e => {
    e.preventDefault();

    const _this = e.target,
        targetId = $(_this).attr('href'),
        top = $(targetId).offset().top;

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