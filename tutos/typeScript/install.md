## TypeScript

TypeScript es un superset de JavaScript que añade tipos a nuestras variables ayudando así a la detección de errores de forma temprana y mejorando el autocompletado.

Los navegadores no entienden TypeScript así que lo vamos a transpilar a JavaScript usando Parcel.


```
npm install -D parcel-bundler
```

## Parcel
***

Es un servidor 


- Script para iniciar parcel server

```
"start": "parcel index.html ejercicios/index.html ejercicios/**/*.html"
```


- Config: para que funcione con la ultima version de chrome
- -  para que transpile con la ultima versión de chrome se pueden incluir otras versiones o navegadores

```
"browserlist": [
    "last 1 Chrome version
]
```

- Eb caso de que no funcione podemos borrar estos archivos de cache y reiniciar el servidor
- Borrar archivos:
- -  rm -rf .cache dist