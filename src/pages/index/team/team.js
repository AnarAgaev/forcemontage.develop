const toggleDesc = evt => {
    const container = $(evt.target).closest('.team__item');



    if ($(window).width() < 1200) {


    } else {
        toggleFoolScreenDescs(container);
        $(evt.target).toggleClass('rotated');
    }
},

toggleFoolScreenDescs = container => {
    const active = $(container).find('.team__element.active'),
        hidden = $(container).find('.team__element.hidden');

    active.addClass('hide');

    setTimeout(() => {
        active.addClass('hidden').removeClass('active');
        hidden.removeClass('hidden');
    }, 500);

    setTimeout(
        () => hidden.removeClass('hide').addClass('active'),
        550
    );
}

$(document).ready(() => {

    $('.team__position button')
        .toArray()
        .forEach(
            el => $(el).click(toggleDesc)
        );




});