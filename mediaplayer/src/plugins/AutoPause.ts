import MediaPlayer from '../MediaPlayer' 

class AutoPause {

  // las variables privadas no existen en javascript
  // en typescript las podemos usar
  // esto nos permite que otra o un objeto que importe autoPause pueda leer el valor

  private threshold: number
  // comvertimos a autoplayer en una clase
  // de esta forma typescript la puede manejar como un tipo 
  // se tiene acceso a los metodos y propiedades de MediaPlayer
  player: MediaPlayer

  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
  }

  run(player) {
    this.player = player;

    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);

    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  // cmvertimos los metodos a privados
  // solo  se necesitan dentro del plugin y no es necesario 
  // que se puedan acceder de otra función u objeto

  private handleIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;

    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  private handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';
    if (isVisible) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}

export default AutoPause;
