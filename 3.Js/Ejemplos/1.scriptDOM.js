    // Obtener el botón y la lista del DOM
    const botonAgregar = document.getElementById('agregar');
    const lista = document.getElementById('miLista');

    // Definir un contador para los elementos de la lista
    let contador = 1;

    // Añadir un listener al botón para manejar el evento click
    botonAgregar.addEventListener('click', () => {
      // Crear un nuevo elemento de lista
      const nuevoElemento = document.createElement('li');
      // Asignar texto al nuevo elemento
      nuevoElemento.textContent = `Elemento ${contador}`;
      // Agregar el nuevo elemento a la lista
      lista.appendChild(nuevoElemento);
      // Incrementar el contador
      contador++;
    });

