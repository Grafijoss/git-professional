# Javascript

## Scripts:

- Es una etiqueta de HTML como cualquier otra
- Hay que tener en cuenta que cuando carga una página y se encuentra un script a ejecutar toda la carga se detiene. Por eso se recomienda agregar tus scripts justo antes de cerrar el body para que todo el documento esté disponible.
- - Las etiquetas script pueden contener el código dentro de la etiqueta
- scripts externos
- - Es igual pero se le añade la direccion del la petción o fetch
- - **src**: El atributo cource indica el path desde donde queremos cargar el script de modo externo
- - async. Con async podemos hacer la petición de forma asíncrona y no vamos a detener la carga del DOM hasta que se haga la ejecución del código.
- - defer. La petición es igual asíncrona como en el async pero va a deferir la ejecución del Javascript hasta el final de que se cargue todo el documento.

 