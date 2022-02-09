$(document).ready(() => {
    const firstScreenVideoLoaded = () => {
        setTimeout(
            () => $('#firstScreen').addClass('loaded'),
            500
        );
    };

    const video = $('#firstScreen video')[0],
        source = $(video).find('source')[0],
        src = video.dataset.startSrc;

    video.src = src;
    source.src = src;

    video.load(firstScreenVideoLoaded());
});