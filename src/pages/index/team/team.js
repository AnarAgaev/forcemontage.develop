const toggleFoolScreenDescs = (wrap) => {
    const active = $(wrap)
        .find('.team__element')
        .filter('.active'),

        hidden = $(wrap)
            .find('.team__element')
            .not('.active');

        active.removeClass('active');
        hidden.addClass('active');
},

toggleMobScreenDescs = (wrap) => {
    const items = $(wrap)
        .find('.team__text-list li'),

        activeIdx = $(wrap)
            .find('.team__text-list li.active')
            .index();

    if (activeIdx === -1) {
        startActiveItem(wrap);
        return;
    }

    if (activeIdx === items.length - 1) {
        resetActiveItem(wrap);
        return;
    }

    plusActiveItem(wrap);
},

startActiveItem = (wrap) => {
    const card = $(wrap).find('.team__card'),
        item = $(wrap).find('.team__text-list li')[0];

    card.addClass('open');
    $(item).addClass('active');
},

resetActiveItem = (wrap) => {
    const card = $(wrap).find('.team__card'),
        itemActive = $(wrap).find('.team__text-list .active');

    card.removeClass('open');
    itemActive.removeClass('active');
},

plusActiveItem = (wrap) => {
    const items = $(wrap).find('.team__text-list li'),
        itemActiveIdx = items.filter('.active').index();

    $(items[itemActiveIdx]).removeClass('active');
    $(items[itemActiveIdx + 1]).addClass('active');
},

toggleDesc = evt => {
    const _this = $(evt.target),
        wrap = _this.closest('.team');

    if ($(window).width() < 1200) {
        toggleMobScreenDescs(wrap);
    } else {
        _this.toggleClass('rotated');
        toggleFoolScreenDescs(wrap);
    }
};

$(document).ready(() => {
    $('.team__position button')
        .toArray()
        .forEach(
            el => $(el).click(toggleDesc)
        );
});