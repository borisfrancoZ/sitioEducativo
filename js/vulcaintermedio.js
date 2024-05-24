var swipermobile = new Swiper(".mySwiperMobile", {
	effect: "cards",
	grabCursor: true,
	slidesPerView: 1, // Asegura que solo se muestre una slide a la vez
	spaceBetween: 10, // Espacio entre slides (puedes ajustar este valor según sea necesario)
	loop: true, // Permite deslizar de forma infinita
  });
  


  var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
