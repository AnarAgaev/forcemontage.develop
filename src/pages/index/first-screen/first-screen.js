$(document).ready(() => {
    setTimeout(
        () => $('#firstScreen').addClass('loaded'),
        500
    );

    if ($(window).width() > 767) {
        const video = $('#firstScreen video'),
            source = video.find('source'),
            src = video[0].dataset.startSrc;

        video[0].src = src;
        source[0].src = src;
    }

});