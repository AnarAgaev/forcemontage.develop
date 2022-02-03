$(document).ready(() => {
    const  formSubmitHandler = evt => {
        evt.preventDefault();

        const form = evt.target,
            isPolicyChecked = $(form).find('[name="policy"]').prop('checked'),
            checker = $(form).find('.checker');

        if (isPolicyChecked) {
            showLoader();

            const request = $.ajax({
                method: 'post',
                url: 'https://quiz24.ru/portfolio/forcemontage/forms-handler.php',
                data: $(form).serialize(),
                dataType: 'json'
            });

            request.done(response => {
                if (IS_DEBUGGING) console.log(response);

                hideLoader();

                if (response.error) {
                    setTimeout(
                        () => showModal($(form).find('[type="submit"]')[0]),
                        300
                    );

                } else {
                    console.log('Ошибка отправки сообщения в обработчике формы!')
                }
            });

            request.fail(function( jqXHR, textStatus ) {
                hideLoader();
                console.log("Request failed: " + jqXHR + " --- " + textStatus);
            });
        } else {
            $(checker).addClass('checker_error');
        }
    };

    $('form').on('submit', formSubmitHandler);

    $('[name="policy"]').on(
        'input',
        evt => $(evt.target)
            .next('.checker')
            .removeClass('checker_error')
    );
});