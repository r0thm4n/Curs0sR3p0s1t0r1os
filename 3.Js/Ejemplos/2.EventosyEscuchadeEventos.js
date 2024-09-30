
// Obtener el botón del DOM
const botonColor = document.getElementById('cambiarColor');

// Añadir un listener al botón para manejar el evento click
botonColor.addEventListener('click', () => {
  // Generar un color aleatorio
  const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // Cambiar el color de fondo del body
  document.body.style.backgroundColor = colorAleatorio;
});


/*
botonColor.addEventListener('click', () => {
*** descripcion 
    botonColor: Es una variable que hace referencia a un elemento del DOM, probablemente obtenido previamente con document.getElementById() 
    o algún otro método para seleccionar elementos en la página.
    Este elemento debería ser un botón o cualquier otro elemento interactivo en el documento HTML. 
    
    Explicación:

  Obtiene el botón con el ID cambiarColor.
  Añade un evento de clic que genera un color aleatorio usando Math.random().
  Cambia el color de fondo del body usando style.backgroundColor.
  Resultado: Al hacer clic en el botón, el color de fondo de la página cambia a un color aleatorio.

*/