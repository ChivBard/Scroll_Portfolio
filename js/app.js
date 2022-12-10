document.querySelectorAll('.slider').forEach((n, i)=> {
window[`slider${i+1}`] = new Swiper(n, {
	freeMode: true,
	centeredSlide: true,
	direction: 'vertical',
	mousewheel: true,
	sliderPerView: 1.75,
	})
})
bindSwipers(slider1, slider2, slider3, slider4)