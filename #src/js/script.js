@@include('jquery.magnific-popup.min.js');
@@include('jquery.mask.min.js');

$('.icon-menu').on('click', function () {
    $('.icon-menu').toggleClass('active');
    $('.header__mobile').slideToggle();
});
$('.header-lang__link').on('click', function (e) {
    e.preventDefault()
    $('.header-lang__link').removeClass('active')
    $(this).addClass('active')
})
function equalWH(group) {
    var tallest = 0;
    group.each(function () {
        thisWidth = $(this).width();
        tallest = thisWidth;
    });
    group.height(tallest);
}
$(document).ready(function () {
    equalWH($(".section-info__item-img"));
});

function equalHeight(group) {
    var tallest = 0;
    group.each(function () {
        thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.height(tallest);
}
$(document).ready(function () {
    equalHeight($(".help-link__content"));
});

function equalMarg(group) {
    var tallest = 0;
    group.each(function () {
        thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    $(".work__btn").css({
        marginTop: tallest + 60,
    });
}
if (jQuery(window).width() > 750) {
    $(document).ready(function () {
        equalMarg($(".work-item__text"));
    });
}
$('.questions-search__clear').on('click', function () {
    $('#search').val('');
})
$('.accordion-quest').on('click', function () {
    $(this).toggleClass('active').siblings().removeClass('active');
    $(this).siblings().children('.accordion-quest__content').slideUp();
    $(this).children('.accordion-quest__content').slideToggle();
})

function equalHeightTitle(group) {
    var tallest = 0;
    group.find('.form-content__title_height').each(function () {
        thisHeight = $(this).height();
        if (thisHeight > tallest) {
            tallest = thisHeight;
        }
    });
    group.find('.form-content__title_height').height(tallest);
}


function ifHeight($content) {
    if (jQuery(window).width() > 650) {
        equalHeightTitle($content);
    }
}

$('.form-accordion__name').on('click', function () {
    $(this).toggleClass('active');
    var $content = $(this).next('.form-accordion__content');
    $content.slideToggle();
    return ifHeight($content)
})

$('.form-file__inp').on('change', function () {
    $(this).children('.select-file').css('display', 'none');
    $(this).children('.downloaded-file').css('display', 'inline-block');
})

$(function () {
    $('.popup-modal').magnificPopup({
        type: 'inline',
        preloader: false,
        focus: '#username',
        closeOnBgClick: true,
        enableEscapeKey: true,
        closeBtnInside: false
    });
    $(document).on('click', '.popup__exit', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });
});
function openPopup() {
    jQuery.magnificPopup.open({
        items: { src: '#popup_sucsess-2' },
        type: 'inline',
        closeBtnInside: false
    });
}
// validate

$('#validForm').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        email: {
            required: true,
            minlength: 5
        },
    },
    messages: {
        name: {
            required: "Пожалуйста введите имя",
            minlength: "В имени миниму 2 символа"
        },
        email: {
            required: "Пожалуйста введите email",
            email: "Ваш email введен неправильно",
            minlength: "В email миниму 5 символов"
        },
    }
});

$('.page-form').validate({
    rules: {
        surname: {
            required: true,
            minlength: 2
        },
        patronymic: {
            required: true,
            minlength: 2
        },
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true,
            minlength: 12,
            maxlength: 12,
        },
        email: {
            required: true,
            minlength: 5,
            email: true,
        },
        agree: {
            required: true,
        }
    },
    messages: {
        surname: {
            required: "Пожалуйста введите Прізвище",
            minlength: "В имени миниму 2 символа"
        },
        patronymic: {
            required: "Пожалуйста введите По батькові",
            minlength: "В имени миниму 2 символа"
        },
        name: {
            required: "Пожалуйста введите имя",
            minlength: "В имени миниму 2 символа"
        },
        phone: {
            required: "Пожалуйста введите телефон",
            minlength: "Неверно введен номер",
            maxlength: "Неверно введен номер",
        },
        email: {
            required: "Пожалуйста введите email",
            email: "Ваш email введен неправильно",
            minlength: "В email миниму 5 символов"
        },
        agree: {
            required: "Подтвердите соглашение",
        }
    }
});
$('#popup-form').validate({
    rules: {
        name: {
            required: true,
            minlength: 2
        },
        phone: {
            required: true,
            minlength: 12,
            maxlength: 12,
        },
        email: {
            required: true,
            minlength: 5,
            email: true,
        },

    },
    messages: {

        name: {
            required: "Пожалуйста введите имя",
            minlength: "В имени миниму 2 символа"
        },
        phone: {
            required: "Пожалуйста введите телефон",
            minlength: "Неверно введен номер",
            maxlength: "Неверно введен номер",
        },
        email: {
            required: "Пожалуйста введите email",
            email: "Ваш email введен неправильно",
            minlength: "В email миниму 5 символов"
        },
    }
});
$('#form-enter').validate({
    rules: {
        email: {
            required: true,
            minlength: 5,
            email: true,
        },
        password: {
            required: true,
        }

    },
    messages: {
        email: {
            required: "Пожалуйста введите email",
            email: "Ваш email введен неправильно",
            minlength: "В email миниму 5 символов"
        },
        password: { required: "Неверный пароль", }
    },

});

$('#form-reg').validate({
    rules: {
        email: {
            required: true,
            minlength: 5,
            email: true,
        },
        password: {
            required: true,
        },
        passwordAgain: {
            required: true, equalTo: '#password'
        },

    },
    messages: {
        email: {
            required: "Пожалуйста введите email",
            email: "Ваш email введен неправильно",
            minlength: "В email миниму 5 символов"
        },
        password: {
            required: "Неверный пароль",
        },
        passwordAgain: {
            required: "Неверный пароль",
            equalTo: 'пароли не совпадают'
        },
    },
    success: function (error) {
        openPopup()
    },
});
$('.input__phone').mask('000000000000');

$('#forgotPassword').on('click', function () {
    $('.newPassword-info').addClass('visible');
    return false;
})

//news
$('.news__header-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: `<button type='button' class='slick-prev pull-left slick-arrow btn-reset news__header-slider-arrow'><svg width="7" height="10" viewBox="0 0 7 10" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M1.375 1.20825L5.16667 4.99992L1.375 8.79158" stroke="#1e1e1e"
        stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
</svg></button>`,
    nextArrow: `<button type='button' class='slick-next pull-left slick-arrow btn-reset news__header-slider-arrow'><svg width="7" height="10" viewBox="0 0 7 10" fill="none"
    xmlns="http://www.w3.org/2000/svg"><path d="M1.375 1.20825L5.16667 4.99992L1.375 8.79158" stroke="#1e1e1e" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
</svg></button>`,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                autoplay: true,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
            }
        },
    ]
})

const favoriteNewsLabel = document.querySelectorAll('.favourites-news__label');
favoriteNewsLabel.forEach(el => {
    el.addEventListener('click', e => {
        if (el.parentElement.classList.contains('active')) {
            el.parentElement.classList.remove('active')
            el.nextElementSibling.style.height = 0
        } else {
            el.parentElement.classList.add('active');
            console.log(el.nextElementSibling.style.height);
            el.nextElementSibling.style.height = el.nextElementSibling.scrollHeight + 'px'
        }
    })
})
$('.input-date').mask('00.00.000');
// $('#anketa-reg').validate({
//     rules: {

//     },
//     messages: {

//     },
// });