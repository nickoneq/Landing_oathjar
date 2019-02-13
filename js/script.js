$(document).ready(function () {

//Табы
	$('.about__toggle').click(function (e) {
		e.preventDefault()
		$('.about-content__box').hide()
		var href = $(this).attr('href')
		$(href).fadeIn()
	})

//Следим за скролом и показываем.скрываем кнопку
	$(window).scroll(function () {
		if ($(this).scrollTop() > $(window).height()) {
			$('.scrollToTop-wrapper').fadeIn()
		} else {
			$('.scrollToTop-wrapper').fadeOut()
		}
	})

//Прокрутка страницы вверх по клику кнопки
$('.scrollToTop-wrapper').click(function (e) {
	e.preventDefault()
	$('html').animate({scrollTop: 0}, 800)
})

})