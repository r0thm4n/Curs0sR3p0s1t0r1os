  // Array para almacenar las tareas
  let tasks = [];

  // Seleccionamos el botón y el input del DOM
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskListDiv = document.getElementById('taskList');

  // Función flecha para agregar una tarea
  const addTask = () => 
        {
            const taskText = taskInput.value; // Obtenemos el valor del input
            
            alert(taskText);
            // Verificamos que el input no esté vacío
            if (taskText) {

                tasks.push(taskText); // Añadimos la tarea al array
                taskInput.value = ''; // Limpiamos el input
                updateTaskList(); // Actualizamos la lista visible y consola

            }else{

                alert("ingresa un valor");
            }
        };

  // Función flecha para eliminar una tarea por índice
  const removeTask = (index) => {

      tasks.splice(index, 1); // Eliminamos la tarea del array

      //definir la funcion para mandarla a llamar 
      updateTaskList(); // Actualizamos la lista visible y consola

  };



 
  // Función para actualizar la lista de tareas en el DOM y en la consola
  const updateTaskList = () => {

      taskListDiv.innerHTML = ''; // Limpiamos la lista de tareas en el DOM

      tasks.forEach((task, index) => {
          // Creamos un div por cada tarea
          const taskItem = document.createElement('div');
          taskItem.textContent = task;

          // Creamos un botón para eliminar la tarea
          const deleteBtn = document.createElement('button');
          deleteBtn.textContent = 'Eliminar';
          deleteBtn.onclick = () => removeTask(index); // Asociamos el evento de eliminar tarea

          // Añadimos la tarea y el botón al div
          taskItem.appendChild(deleteBtn);
          taskListDiv.appendChild(taskItem);
      });
      
      // Mostramos la lista actualizada en la consola
      console.log('Lista de tareas:', tasks);
  };

  // Asociamos el botón de agregar con la función de agregar tarea

  addTaskBtn.onclick = addTask;