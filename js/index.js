 
   document.addEventListener('DOMContentLoaded', function() {
    const openFormButton = document.getElementById('openFormButton');
    const closeFormButton = document.getElementById('closeFormButton');
    const popupForm = document.getElementById('popupForm');

    openFormButton.addEventListener('click', function() {
        popupForm.classList.add('show');
    });

    closeFormButton.addEventListener('click', function() {
        popupForm.classList.remove('show');
    });
});


 
 
 
 
 
 
 
// CODIGO HAMBURGUESA
  const body = document.querySelector('body');
  const toggle = body.querySelector(".toggle"); // Se cambió "body.querySelector('.hamburger')" a "body.querySelector('.toggle')"
  const searchBtn = body.querySelector(".search-box");
  const modeSwitch = body.querySelector(".toggle-switch");
  const modeText = body.querySelector(".mode-text");
  // CODIGO SLIDER DESKTOP
   // Se corrigió la declaración de la variable 'sidebar' para que no sea 'var'
 

  const sidebar = body.querySelector('.sidebar');


  const btnLeft = document.querySelector(".btn-left"),
      btnRight = document.querySelector(".btn-right"),
      slider = document.querySelector("#slider"),
      sliderSection = document.querySelectorAll(".slider-section");


btnLeft.addEventListener("click", e => moveToLeft())
btnRight.addEventListener("click", e => moveToRight())

setInterval(() => {
    moveToRight()
}, 5000);


let operacion = 0,
    counter = 0,
    widthImg = 100 / sliderSection.length;

function moveToRight() {
    if (counter >= sliderSection.length-1) {
        counter = 0;
        operacion = 0;
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    counter++;
    operacion = operacion + widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
}  

function moveToLeft() {
    counter--;
    if (counter < 0 ) {
        counter = sliderSection.length-1;
        operacion = widthImg * (sliderSection.length-1)
        slider.style.transform = `translate(-${operacion}%)`;
        slider.style.transition = "none";
        return;
    } 
    operacion = operacion - widthImg;
    slider.style.transform = `translate(-${operacion}%)`;
    slider.style.transition = "all ease .6s"
    
    
}   




  // Función para alternar el sidebar cuando se hace clic en el botón hamburguesa
  function toggleSidebar() {
    sidebar.classList.toggle("close");
  }

  toggle.addEventListener("click", toggleSidebar);
  toggle.addEventListener("touchstart", toggleSidebar);

  searchBtn.addEventListener("click", () => {
    sidebar.classList.remove("close");
  });

  searchBtn.addEventListener("touchstart", () => {
    sidebar.classList.remove("close");
  });

  
  



