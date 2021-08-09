# NPM

## Install dependences

- npm i -D live-server: Instal dependency in develop mode
- Create script: To evoid typing the code in the terminal we can create scripts inside the *package.json*
```javascript
 "scripts": {
    "start": "live-server"
  }
```

## Publicar un paguete

- Cuenta en NPM
- Hay que reestructurar el proyecto
- - folder para el website
- - - archivos de la aplicacion HTMLs assets todos los archivos que no van en el paquete de mediaPLayer
- - folder para el mediaPlayer
- - - dentro va la carpeta de plugins
- - - añadimos un .gitignore
- - - dentro de mediaPlayer creamos un nuevo proyecto de NPM ***npm init -y***
- - - le asignamos un nombre al proyecto en el package.json
- - - los archivos deben estar en javascript
- - - ***npm i -D typescript*** compila todo lo que esta en la carpeta especificada a una carpeta de salida (lib)
- - - cremos un nuevo script para build ***"build": "tsc src/**/*.ts src/plugins/*.ts src/plugins/**/*.ts",*** 
- - - pasamos todos los archivos a javascript

### Flujo


- npm run build
- instalamos la dependencia con el nombre 
- -  ***npm install @jose/mediaplayer***
- cambiamos el path d elos plugins
```javascript
import MediaPlayer from ' @jose/mediaplayer/lib/MediaPlayer';
import AutoPlay from ' @jose/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from ' @jose/mediaplayer/lib/plugins/AutoPause';
import Ads from ' @jose/mediaplayer/lib/plugins/Ads';
```

