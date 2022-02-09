$(document).ready(() => {
    $('[data-toggle="modal"]').click(e => {
        e.stopPropagation();
        showModal(e.target);
    });

    const showYoutubeIframe = el => {
        hideLoader();

        setTimeout(
            () => $(el)
                .closest('.modal__dialog')
                .removeClass('modal__dialog_hide'),
            500
        );
    }

    window.showModal = function (el) {
        let modal = $(el).data('target');

        if (!modal) {
            modal = $(el)
                .closest('[data-toggle="modal"]')
                .data('target');
        }

        $(modal).addClass('show');
        fixScrollModalOpen();

        const video = $(modal).find('video')[0];
        if (video) video.play();

        const iframe = $(modal).find('iframe')[0];
        if (iframe) {

            setTimeout(showLoader, 100);

            let src = $(el).data('youtubeSrc');

            if (!src) {
                src = $(el)
                    .closest('[data-toggle="modal"]')
                    .data('youtubeSrc');
            }
            iframe.src = src;

            iframe.onload = () => showYoutubeIframe(iframe);
        }
    };

    $('.modal').click(e => {
       if (isActionNode(e.target)) {
           hideModal(e.target);
       }
    });

    const hideModal = function (el) {
        let modal = $(el).closest('.modal'),
            video = $(modal).find('video')[0],
            iframe = $(modal).find('iframe')[0],
            dialogs = $(modal).find('.modal__dialog');

        if (video) {
            video.pause();
            video.currentTime = 0;
        }

        if (iframe) {
            iframe.src = '';

            setTimeout(
                () => $(dialogs).addClass('modal__dialog_hide'),
                1000
            )
        }

        modal.removeClass('show');
        fixScrollModalClose();

        // Если в модальном окне несколько диалоговых окно,
        // оставляем видимым только первое
        if (dialogs.length > 1) {

            setTimeout(e => {
                $(dialogs[0])
                    .removeClass('modal__dialog_hide hidden');

                dialogs
                    .filter(idx => idx > 0)
                    .addClass('modal__dialog_hide hidden');
            }, 500);
        }
    };

    const isActionNode = function (el) {
        return $(el).hasClass('modal') || $(el).hasClass('modalCloseBtn');
    };
});