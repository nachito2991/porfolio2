const imagenes = 
document.querySelectorAll('tarjetas-ruta');

new simpleParallax (imagenes, {scale:1500} );

var image = document.getElementsByClassName('tarjetas-ruta');
new simpleParallax(image, {
	orientation: 'right'
});