$(document).ready(() => {

    const toggleStageCardText = evt => {
        $(evt.target)
            .closest('.stages__card')
            .toggleClass('open');
    },

    showStageCard = () => {

        const scrollTop = window.pageYOffset,
            windowHeight = $(window).height(),
            windowScrollTop = scrollTop + windowHeight,
            stageCards = $('.stages__card.hide');


        if (stageCards.length > 0) {
            stageCards.each((idx, el) => {
                const elScrollTop = $(el).offset().top;

                if (windowScrollTop > elScrollTop) {
                    const arrHeight = $(el).data('arr-height');
                    $(el).removeClass('hide');
                    $('#stagesArr').css('height', arrHeight);
                }
            });
        }
    };

    $('.stages__card').on(
        'click',
        toggleStageCardText
    );

    $(window).scroll(() => {
        // Показываем анимируемые карточки,
        // этапов работ над проектом
        showStageCard();
    });
});