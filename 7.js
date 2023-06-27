const botonesBajar = document.querySelectorAll('.boton-bajar');
botonesBajar.forEach(function(botonBajar) {
  botonBajar.addEventListener('click', function() {
    const contenedor = botonBajar.parentElement.parentElement;
    const posicion = contenedor.offsetTop + contenedor.clientHeight;
      window.scrollTo({
       top: posicion,
        behavior: 'smooth'
      });
   }); 
});
const subir = document.querySelectorAll('.boton-subir');
botonessubir.forEach(function(botonsubr) {
  botonessubir.addEventListener('click', function() {
    const contenedor = botonessubir.parentElement.parentElement;
    const posicion = contenedor.offsetTop + contenedor.clientHeight;
      window.scrollTo({
       top: posicion,
        behavior: 'smooth'
      });
   }); 
});