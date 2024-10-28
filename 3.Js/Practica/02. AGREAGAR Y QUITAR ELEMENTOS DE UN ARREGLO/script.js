// Creamos un array inicial con algunas tareas
let tasks = ["Comprar leche", "Estudiar JavaScript", "Limpiar la casa"];

// Imprimir el array inicial en la consola
console.log("Lista de tareas inicial:", tasks);

// Agregamos una tarea al array usando el método push
tasks.push("Ir al gimnasio");

// Imprimimos el array después de agregar la tarea
console.log("Después de agregar 'Ir al gimnasio':", tasks);

// Eliminamos una tarea específica (por ejemplo, la tarea en la posición 1) usando splice
tasks.splice(1, 1);  // Elimina "Estudiar JavaScript" (índice 1)

// Imprimimos el array después de eliminar la tarea
console.log("Después de eliminar la tarea en el índice 1:", tasks);

// Agregar otra tarea
tasks.push("Pagar facturas");

// Imprimir la lista final
console.log("Lista de tareas final:", tasks);
