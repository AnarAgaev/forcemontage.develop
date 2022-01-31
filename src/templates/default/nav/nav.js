$(document).ready(() => {
    const toggleNav = () => {
        $('#nav').toggleClass('hide');
    };

    $('.navToggler').on(
        'click',
        toggleNav
    );
});