const togglePosVisibleGoToNextPageBtn = direction => {
    direction
        ? $('#goToNextPageBtn').addClass('pos-relative')
        : $('#goToNextPageBtn').removeClass('pos-relative');

},

toggleStickyGoToNextPageBtn = direction => {
    const show = () => {
            $('#goToNextPageBtn')
                .addClass('sticky show');
        };

    const hide = () => {
        if ($('#goToNextPageBtn').hasClass('show')) {
            $('#goToNextPageBtn').removeClass('show');

            setTimeout(
                () => $('#goToNextPageBtn')
                    .removeClass('sticky'),
                500);
        }
    };

    direction ? show() : hide();
},

checkPosVisibleGoToNextPageBtn = () => {
    const scrollTop = $(window).scrollTop(),

        placeOffset = $('#nextPageBtnRelativePlace')
            .offset().top,

        showPlace = $(window).height() - 100,

        placeTop = placeOffset - scrollTop;

    placeTop < showPlace
        ? togglePosVisibleGoToNextPageBtn(true)
        : togglePosVisibleGoToNextPageBtn(false);
},

checkStickyGoToNextPageBtn = () => {
    const scrollTop = $(window).scrollTop(),

        placeOffset = $('#nextPageBtnShowPlace')
            .offset().top,

        showPlace = $(window).height(),

        placeTop = placeOffset - scrollTop;

    placeTop < showPlace
        ? toggleStickyGoToNextPageBtn(true)
        : toggleStickyGoToNextPageBtn(false);
};

$(document).ready(() => {
    $(window).scroll(() => {
        checkPosVisibleGoToNextPageBtn();
        checkStickyGoToNextPageBtn();
    });
});