/*function hello (){

    return 'Hola Clase';
}

const result = hello();
console.log(result);*/

//Shorthand property names
const name = 'Mi nombre8';
const edad = 20;


/*
const usuario = {
    name,
    edad
}

console.log(usuario.name)
*/
/*
const usuario = {
    name,
    edad
}

console.log(usuario["name"])
*/

/*
const usuario = {
    name:"Mi nombre",
    edad:20
}
//usuario["name"]
console.log(usuario.name)
*/

//Nombres de propiedades abreviados

// Modificar el título del documento desde JavaScript


// Crear la etiqueta h1
//const h1 = document.createElement("h1");

// Asignar el texto que deseas visualizar
/*h1.textContent = "¡Bienvenido al Curso Básico de DOM!";
console.log(h1.textContent)
document.body.appendChild(h1);*/
// Añadir la etiqueta h1 al cuerpo del documento
//document.body.appendChild(h1);
/*
class Auto {
    constructor(marca, color) {
        this.marca = marca;
        this.color = color;
    }
//declaramos el método 
    acelerar() {
        console.log(`${this.marca} está acelerando.`);
    }
}


// Crear una instancia (objeto) de Auto
const miAuto = new Auto('Toyota', 'rojo');

// Llamar al método acelerar para ver el mensaje en la consola
miAuto.acelerar();
*/

/*
// Crear un nuevo h1
const h1 = document.createElement("h1");
h1.textContent = "Manipulando Atributos";

// Asignar una clase usando className
h1.className = "titulo";

// Asignar un id usando setAttribute
h1.setAttribute("id", "titulo-principal");

// Agregar el h1 al documento
document.body.appendChild(h1);
*/
/*
// Crear el contenedor principal para el formulario
const container = document.createElement('div'); // Crea un nuevo elemento div
container.style.margin = '20px'; // Establece un margen alrededor del contenedor

// Crear el título
const title = document.createElement('h2'); // Crea un nuevo elemento h2 para el título
title.textContent = 'Iniciar Sesión'; // Establece el texto del título
container.appendChild(title); // Agrega el título al contenedor

// Crear el formulario
const form = document.createElement('form'); // Crea un nuevo formulario

// Crear campo de Nombre de Usuario
const usernameLabel = document.createElement('label'); // Crea una etiqueta para el nombre de usuario
usernameLabel.textContent = 'Nombre de Usuario:'; // Establece el texto de la etiqueta
const usernameInput = document.createElement('input'); // Crea un nuevo campo de entrada
usernameInput.type = 'text'; // Establece el tipo del campo como texto
usernameInput.required = true; // Establece que el campo es obligatorio
form.appendChild(usernameLabel); // Agrega la etiqueta al formulario
form.appendChild(usernameInput); // Agrega el campo de entrada al formulario

// Crear campo de Contraseña
const passwordLabel = document.createElement('label'); // Crea una etiqueta para la contraseña
passwordLabel.textContent = 'Contraseña:'; // Establece el texto de la etiqueta
const passwordInput = document.createElement('input'); // Crea un nuevo campo de entrada para la contraseña
passwordInput.type = 'password'; // Establece el tipo del campo como contraseña (oculta el texto)
passwordInput.required = true; // Establece que el campo es obligatorio
form.appendChild(passwordLabel); // Agrega la etiqueta al formulario
form.appendChild(passwordInput); // Agrega el campo de entrada al formulario

// Crear botón de envío
const submitButton = document.createElement('button'); // Crea un nuevo botón
submitButton.textContent = 'Iniciar Sesión'; // Establece el texto del botón
form.appendChild(submitButton); // Agrega el botón al formulario

// Mensaje de respuesta
const message = document.createElement('p'); // Crea un nuevo párrafo para mostrar mensajes
container.appendChild(form); // Agrega el formulario al contenedor
container.appendChild(message); // Agrega el mensaje al contenedor

// Agregar el contenedor al cuerpo del documento
document.body.appendChild(container); // Agrega el contenedor al cuerpo de la página

// Datos de inicio de sesión predefinidos (ejemplo)
const validUsername = 'usuario'; // Nombre de usuario correcto
const validPassword = 'contraseña'; // Contraseña correcta

// Manejar el envío del formulario
form.addEventListener('submit', (event) => { // Agrega un evento para manejar el envío del formulario
  event.preventDefault(); // Previene el comportamiento por defecto del formulario (no recarga la página)

  // Validar el nombre de usuario y la contraseña
  if (usernameInput.value === validUsername && passwordInput.value === validPassword) { // Verifica si las credenciales son correctas
    message.textContent = '¡Bienvenido!'; // Establece el mensaje de éxito
    message.style.color = 'green'; // Cambia el color del mensaje a verde
  } else {
    message.textContent = 'Nombre de usuario o contraseña incorrectos.'; // Establece el mensaje de error
    message.style.color = 'red'; // Cambia el color del mensaje a rojo
  }

  // Limpiar campos después de intentar iniciar sesión
  usernameInput.value = ''; // Limpia el campo de nombre de usuario
  passwordInput.value = ''; // Limpia el campo de contraseña
});
*/

/*
document.title = 'Iniciar sesion ';

const h1 = document.createElement("h1");

h1.textContent = "Mi texto desde Js";
document.body.appendChild(h1)

const parrafo = document.createElement("p");
parrafo.textContent = "Mi parrafo desde Js";
document.body.appendChild(parrafo);

*/


document.title = 'Iniciar Sesión';
//--------------------------------
//Crear el contenedor principal para el formulaio
const container = document.createElement('div');
container.style.margin = '20px';
//crear titulo
const title = document.createElement('h2');
title.textContent = 'Iniciar Sesión';
container.appendChild(title);

//Crear el formulario

const form = document.createElement('form');

//Crear campo de nombre del usuario

const usernamelabel = document.createElement('label');
usernamelabel.textContent = 'Nombre de usuari@';

const usernameInput = document.createElement('input');
usernameInput.type = 'text';
usernameInput.required = true;
form.appendChild(usernamelabel);
form.appendChild(usernameInput);


//Contraseña
const passwordlabel = document.createElement('label');
passwordlabel.textContent = 'Contraseña';

const paswordInput = document.createElement('input');
passwordlabel.type = 'password';
paswordInput.required = true;

form.appendChild(passwordlabel);
form.appendChild(paswordInput);


//Boton de envio
const submitButton = document.createElement('button');
submitButton.type= 'submit';
submitButton.textContent= 'Iniciar sesión';
form.appendChild(submitButton);

//Mensaje de respuesta
const  message = document.createElement('p');
container. appendChild(form);
container.appendChild(message);

//Añadir el contenedor al cuerpo del documento (se muestran los datos jijij)
document.body.appendChild(container);

//DATOS DE INICIO DE SESION PREDEFINIDA

const validaUSER = 'juanito';
const validaPassword = '2589';
 

//validar el user y el pass
form.addEventListener('submit',(event) =>{
    event.preventDefault.apply();

    //validar el nombre y el pass

    if (usernameInput.value === validaUSER && paswordInput.value === validaPassword ) {
        message.textContent = 'Bienvenido!';
        message.style.color = 'green';
    }else{
        message.textContent = 'Nombre de usuario o contraseña incorrecto'
        message.style.color = 'red';
    }
})