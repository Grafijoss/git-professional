
## IntersectionObserver
***


Sirve para observar elementos y si cruzan un umbral que nosotros definimos nos lo va a notificar para tomar acción.

El umbral se define por el porcentaje que tiene intersección con el viewport, con la parte visible de nuestra página.

Recibe dos argumentos:

- handler:  Es un metodo que se encargadra de avisarnos cuando el objeto entra o sale del umbral
- config:
- -  se le pasa un unbral o threshold: Deefine que porcentaje del elemento tiene que tener intersección con el contenedor para disparar el handler

```javascript
class AutoPause {
  constructor() {
    this.threshold = 0.25;
    // cambiamos la referencia del this por que por defecto
    // el this se va a definir a base del objeto que llama la función
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    // observer son todos los elementos que queremos observar

    observer.observe(this.player.media);
  }

  handleIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
      console.log('esta en la pantalla')
    } else {
      this.player.pause();
      console.log('salio de la pantalla')
    }
  }
}

export default AutoPause;
```

