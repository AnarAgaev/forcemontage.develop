$(document).ready(function () {
    let lastScrollTop = 0;

    $(window).scroll(() => {
        let scrollTop = $(window).scrollTop();

        scrollTop > 100 && scrollTop > lastScrollTop
            ? $('#header').addClass('hide')
            : $('#header').removeClass('hide');

        lastScrollTop = $(window).scrollTop();
    });
});