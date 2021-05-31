## async await

> assets\ejercicios\promises.html 

Async nos sirve para crear promesas mas expresivas y mas faciles de leer

- Debemos declarar que la funcion es del tipo async
- Esto nos permite usar el keyword await
- -  Con await podemos guardar el valor que responde la promesa cuando se resuelve en una variable
- es buena practica usar el await dentro de un try catch que nos permita capturar el error si llega a ocurrir


- Para llamar una promesa de forma secuencial podemos usar un loop
- Para obtener el resultado de la spromesas en paralelo
- -  Para esto necesitamos un arreglo de promesas
- -  Promise.all([arregloDePromesas])
- - nos devuelve una arreglo con los valores resueltos representados como objetos
- -  si una promesa falla todas las promesas fallan
- Para obtener la primera promesa que termina
- -  Promise.race([arregloDePromesas])
- - Regresa como respuesta un solo elemento con el valor de la promesa que termino primero


***

### Fetch

> assets\ejercicios\abort-fetch.html


La peticiones AJAX permitieron en su tiempo hacer peticiones asíncronas al servidor sin tener que detener la carga de la página. Hoy en día se utiliza la función fetch para esto.

Con fetch tenemos algo llamado AbortController que nos permite enviar una señal a una petición en plena ejecución para detenerla.

- Fetch regresa una promesa que resulevre a una promesa
- la respuesta de fetch no es le gible lo convertimos a .json()
- .json() tambien es una promesa
- regresamos lo quhe tiene data
``` javascript
async function getPopularMovies() {
    const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
}
```

