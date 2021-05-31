## Event Loop
***

El Event Loop hace que Javascript parezca ser multihilo a pesar de que corre en un solo proceso.

### Javascript se organiza usando dos estructuras de datos:
- **Stack**
- **Memory Heap**

### Javascript se organiza usando las siguientes estructuras de datos:

- Stack. Va apilando de forma organizada las diferentes instrucciones que se llaman. Lleva así un rastro de dónde está el programa, en que punto de ejecución nos encontramos.
- Memory Heap. De forma desorganizada se guarda información de las variables y del scope.
- Schedule Tasks. Aquí se agregan a la cola, las tareas programadas para su ejecución.
- Task Queue. Aquí se agregan las tares que ya están listas para pasar al stack y ser ejecutadas. El stack debe estar vacío para que esto suceda.
MicroTask Queue. Aquí se agregan las promesas. Esta Queue es la que tiene mayor prioridad.
- El Event Loop es un loop que está ejecutando todo el tiempo y pasa periódicamente revisando las queues y el stack moviendo tareas entre estas dos estructuras.


### Flujo

- **Stack**: Es una estructura de datos que lleva el rastro de donde esta el programa
- - El stack comienza vacio
- - La operación de añadir un elemento al stack se llama push 
- - Los elementos son como platos y se van apilando uno encima del otro
- - La unica forma de sacar un plato es por arriba
- - La operaci{on de retirar un plato se llama pop
- - En stack se encuentran las funciones, es el registro de como esta operando el programa
- - Apunta a variables como el scope, el guarada esas referencias que sirven para operar el programa

- **Queue**: Es una estructura de datos, peor a diferencia del stack lo primero que entra es lo primero que sale
- - **Scheduled Tasks**: Se puede pensar en un linea de tiempo donde las acciones estan esperando, por ejemplo un settimeout espera el tiempo de delay que se le paso como parametro cuando este tiempo termina sale del **Scheduled queue** y pasa al **Task queue**
- - - Las tareas salen en orden pero si un temiout termina ante spasa al task queue
- - **Cola de tareas (Task queue)**: Las tareas eventualmente pasan al stack
- - **Microtasks queue**: En el event loop guardamos las promesas

- **Event loop**: Es un script que esta entre el stack y la cola de tareas
- - Pregunta todo el tiempo si hay tareas en el task queue
- - Pregunta si el stack esta vacio
- - Si el stack esta vacio lo pasa de el task queue al stack
- - El event loop le da prioridad a laS MICRO TASKS


- **Memory Heap**: Es una estructura desorganizada
- - Se guardan las variabeles, el scope, etc...