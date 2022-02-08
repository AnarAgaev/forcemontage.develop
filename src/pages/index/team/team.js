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
        wrap = _this.closest('.team'),
        arrow = wrap.find('button');

    arrow.toggleClass('rotated');

    $(window).width() < 1200
        ? toggleMobScreenDescs(wrap)
        : toggleFoolScreenDescs(wrap);
},

showTeamGallery = (evt) => {
    evt.stopPropagation();

    const _this = evt.target;

    let galleryId = $(_this).data('gallery-id');

    if (!galleryId) {
        galleryId = $(_this).closest('[data-gallery-id]').data('gallery-id')
    }

    $(galleryId).find('a:first-child img').click();
};

$(document).ready(() => {
    $('.team__item')
        .toArray()
        .forEach(
            el => $(el).click(toggleDesc)
        );

    // Показываем галерея одного из членов команды
    $('.team__pics')
        .toArray()
        .forEach(
            el => $(el).click(showTeamGallery)
        );
});

Fancybox.bind('[data-fancybox="gallery-design"]', {
    Thumbs: false,
    Toolbar: false,
    Image: {
        wheel: false, // Disable zoom on scroll event
        click: false, // Disable zoom on image click
    }
});

Fancybox.bind('[data-fancybox="gallery-equipment"]', {
    Thumbs: false,
    Toolbar: false,
    Image: {
        wheel: false, // Disable zoom on scroll event
        click: false, // Disable zoom on image click
    }
});

Fancybox.bind('[data-fancybox="gallery-realization"]', {
    Thumbs: false,
    Toolbar: false,
    Image: {
        wheel: false, // Disable zoom on scroll event
        click: false, // Disable zoom on image click
    }
});