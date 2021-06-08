class MediaPlayer {

  // a etiqueta video de HTML representa una etiqueta HTMLvideoElement
  // el HTMLvideoElement ereda de HTMLMediaElement
  // este tipo es nativo ya esta disponible no hay necesidad de importarlol
  media: HTMLMediaElement
  plugins: Array<any>


  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    // cuando usamos el _ guion al piso queriamos indicar que era private
    // con typescript ya lo podemos usar el keyword prievate
    // this._initPlugins();
    this.initPlugins();
  }
  private initPlugins() {
    // const player = {
    //   play: () => this.play(),
    //   pause: () => this.pause(),
    //   media: this.media,
    //   get muted() {
    //     return this.media.muted;
    //   },
    //   set muted(value) {
    //     this.media.muted = value;
    //   },
    // };

    this.plugins.forEach(plugin => {
      // plugin.run(player);
      plugin.run(this);
    });
  }
  
  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }
  
}







export default MediaPlayer;
