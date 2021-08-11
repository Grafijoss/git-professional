1. ¿Cuál event disponible en los service workers usas para pre-cache de assets de una página y prepararla para funcionar offline?

***install***

2. ¿Qué valor le tenemos que asignar a para que el archivo no añada valores al ámbito global?

```javascript
<script src="index.js" type="...">
```

***module***

3. ¿Qué ámbito tiene la variable person en el siguiente código?


```javascript
fullName(person) {
return `${person.firstName} ${person.lastName}`;
}
```
***Bloque*** WRONG
***Funcion*** ***OK***
>https://platzi.com/clases/1642-javascript-profesional/22159-scope/

4. ¿Cómo se define mejor qué es un patrón de diseño?

***Una lista de pasos a seguir para resolver problemas comunes en diseño de software.*** **WRONG**
***Un algoritmo eficiente para resolver un tipo de problema.*** **WRONG**
***Una solución para un problema.*** **WRONG**
***Una solución para un problema dentro de un contexto.*** **OK**

> https://platzi.com/clases/1642-javascript-profesional/22184-que-es-un-patron-de-diseno/

5. Tienes un estado global y varios objetos que quieren enterarse de cambios al estado. ¿Qué patrón usarías?

***Observer***

6. ¿Qué "clase" usamos para crear un signal que sirva para detener un fetch?

***AbortController***

7. ¿Cómo pasamos los argumentos a una función utilizando bind?

***Con un objeto donde cada key es el nombre del argumento, y el valor es el valor que queremos pasar.*** **WRONG**
***Separando cada argumento con una coma..*** **OK**

>https://platzi.com/clases/1642-javascript-profesional/22163-los-metodos-call-apply-y-bind/


8. ¿Cuál de estas operaciones puede ser interceptada por un Proxy?

***Lectura de propiedades de un objeto***

9. ¿Qué pasa cuando una de las promesas en Promise.all es rechazada?

***Promise.all se rechaza con el error de la promesa que fue rechazada.***

10. ¿Cómo se llama la estructura de datos que representa un versión del código que el interpretador puede procesar?

***Abstract Syntax Tree***

11. ¿Qué queue tiene mayor prioridad?

***Tasks*** **WRONG**
***MicroTasks*** **OK**
>https://platzi.com/clases/1642-javascript-profesional/22169-event-loop/

12. ¿Qué nuevo API del DOM nos ayuda a saber, de forma eficiente, si un elemento se encuentra dentro del viewport?

***IntersectionObserver***

13. ¿Cómo se llama el motor de JavaScript que usa Node y Chrome?

***V8***

14. ¿Cuál es la sintaxis correcta para definir un getter?

```javascript
{ get answer = 42 } // WRONG
{ answer = get() { return 42 } } // WRONG
{ get answer = () => 42 } // WRONG
```
> https://platzi.com/clases/1642-javascript-profesional/22171-getters-y-setters/

15. ¿Cuál de estos es el objeto que heredaran las "instancias" de un objeto?
***__proto__*** WRONG
***prototype*** OK

> https://platzi.com/clases/1642-javascript-profesional/22165-herencia-prototipal/



16. ¿En qué categoría encontramos al patrón de diseño Observer?

***Patrones de Comportamiento***

17. ¿Cuál es la diferencia entre var y let al ser declaradas en una función?

***var tiene global scope y let tiene block scope.*** **WRONG**
***var tiene global scope y let tiene function scope.*** **WRONG**
***var tiene function scope y let tiene block scope.*** **OK**
> https://platzi.com/clases/1642-javascript-profesional/22159-scope/

18.¿Con qué keyword un generator puede detener su ejecución?

***yield***

19. Eres el desarrollador de un e-commerce. En la página hay un carrusel que muestra los artículos con descuento y automáticamente cambia de slide. Cuando el usuario cambia de tab, tienes que asegurarte que el carrusel se detiene. ¿Qué API del DOM usarías para detectar si el tab del e-commerce sigue activo?

***Page Visibility***

20. Quieres extender el comportamiento de una clase sin modificar su implementación. ¿Qué patrón de diseño te puede ayudar?

***Decorator***
bo
21. Considera el código

```javascript
import MediaPlayer from '@sparragus/platzimediaplayer'
```
> https://platzi.com/clases/1642-javascript-profesional/22194-publicar-en-npm/

¿Cuál propiedad del package.json define el archivo de la biblioteca que sería importado?

***dependencies*** **WRONG**
***name*** **WRONG**
***main*** **OK**
> https://platzi.com/clases/1642-javascript-profesional/22194-publicar-en-npm/

22. ¿Qué atributo usamos cuando queremos que la petición de un script sea asíncrona pero que tan pronto termine de cargar, el script se ejecute?

***async***

23. ¿Qué es un closure?

***Cuando una función llama otra función.*** ***WRONG***
***Cuando regresamos el valor de una variables que fue declarada en una función..*** ***WRONG***
***Cuando una función mantiene las variables que fueron declaras fuera de su scope.*** ***OK***
> https://platzi.com/clases/1642-javascript-profesional/22160-closures/

24. Necesitas una clase de la cual solo exista una instancia. ¿Qué patrón usarías?

***Singleton***

25. ¿Qué hace la keyword new?

***Crea un nuevo objeto que "hereda" del prototype de otro objeto.***

26. ¿Cómo pasamos los argumentos a una función utilizando call?

***Separando cada argumento con una coma.***

27. ¿Cómo pasamos los argumentos a una función utilizando apply?

***Con un objeto donde cada key es el nombre del argumento, y el valor es el valor que queremos pasar.*** **WRONG**
***Con un arreglo donde cada argumento es un elemento.*** **OK**

28. ¿Qué pasa cuando tres de las promesas en Promise.race se resuelven?

***Se regresa el valor de la promesa que se resolvió primero.***