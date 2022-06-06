


/*===========================Бургер меню=========================================*/

$(document).ready(function () {
	$('.header__burger').click(function (event) {
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

	$(".mainblock__input").mask("+7(999) 999-9999");
});

/*=============Бургер при нажатии меняет цвет============================*/
/*
$('.header__burger').on('click', function (e) {
	e.preventDefault();
	$(this).toggleClass('burger__active');
});

/*==========Слайдер с появдением на нужном разрешении===================================================*/



function responsive_slider(selector, size, options) {
	if ($(window).width() < size) {
		if (!$(selector).hasClass('slick-slider')) {
			$(selector).slick(options)
		}
	} else {
		if ($(selector).hasClass('slick-slider')) {
			$(selector).slick('destroy');
		}
	}
}

responsive_slider('.stages__slider', 839.98, {
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	dots: true,
	infinite: false,
});

$(window).resize(function () {
	responsive_slider('.stages__slider', 839.98, {
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		infinite: false
	});
})


/*-----------------------reviews__slider-------------------------------*/

$(document).ready(function () {
	$('.reviews__slider').slick({
		arrows: false,
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		speed: 900,
		centerPadding: '0',
		responsive: [
			{
				breakpoint: 991.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					centerMode: false,
				}
			}
		]
	});
});




/*==================Адаптация слайдера=============================================*/

/*
		responsive: [
			{
				breakpoint: 1100,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: false,
					centerMode: true,
					centerPadding: '0px',
					slidesToShow: 1
				}
			}
		]
	});
	
	*/

/*====================Спойлер==============================================*/
/*
		$('.testblock__title').click(function (event) {
			$(this).toggleClass('active').next().slideToggle(300);
		});*/
/*==========================================================================*/


/*==================================Выпадающее меню======================================*/

/*let isMobile = {
	Android: function () { return navigator.userAgent.match(/Android/i); },
	BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
	iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
	Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
	Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
	any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};
let body = document.querySelector('body');
if (isMobile.any()) {
	body.classList.add('touch');
	let arrow = document.querySelectorAll('.arrow');
	for (i = 0; i < arrow.length; i++) {
		let thisLink = arrow[i].previousElementSibling;
		let subMenu = arrow[i].nextElementSibling;
		let thisArrow = arrow[i];

		thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function () {
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
} else {
	body.classList.add('mouse');
}*/

/*===========================================================================================*/
