import MediaPlayer from '../../../../MediaPlayer';
import Ads, { Ad } from './Ads';


class AdsPlugin {

    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private adsContainer: HTMLElement;

    constructor() {
        this.ads = Ads.getInstance()
        // handleTimeUpdate lo llama media no AdsPlugin
        // bindemos el this
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)

        this.adsContainer = document.createElement('div')

    }
    // todos los plugins tienen un metodo publico que se llama run
    // recibe un player
    run(player: MediaPlayer) {
        this.player = player
        this.player.container.appendChild(this.adsContainer)
        this.media = this.player.media
        // el metodo timeupdate es propio de la API de player 
        this.media.addEventListener('timeupdate', this.handleTimeUpdate)
    }

    private handleTimeUpdate() {
        // currentTime regresa en decimales lo pasamos a entero
        const currentTime = Math.floor(this.media.currentTime);
        // si currentTime se dic¿vide con 30 perfectamente
        if (currentTime % 30 === 0) {
          this.renderAd();
        }
      }

      private renderAd() {
        if (this.currentAd) {
          return;
        }
    
        const ad = this.ads.getAd();
        this.currentAd = ad;
        this.adsContainer.innerHTML = `
        <div class="ads">
          <a class="ads__link" href="${this.currentAd.url}" target="_blank">
            <img class="ads__img" src="${this.currentAd.imageUrl}" />
            <div class="ads__info">
              <h5 class="ads__title">${this.currentAd.title}</h5>
              <p class="ads__body">${this.currentAd.body}</p>
            </div>
          </a>
        </div>
      `;

        setTimeout(() => {
          this.currentAd = null
          this.adsContainer.innerHTML = ''
        }, 10000)
      }

}

export default AdsPlugin;