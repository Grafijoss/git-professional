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

```
"browserlist": [
    "last 1 Chrome version
]
```

- Borrar archivos:
- -  rm -rf .cache dist