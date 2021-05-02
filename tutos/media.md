# Media

> https://developer.mozilla.org/es/docs/Web/HTML/Element/video

- Todos los elementos HTML tienen un api
- clases: Las clases en javascript no existen
- las clases en javascript son objetos que se instancian de otros objetos
- Cuando estamos trabajando con clases los metodos se agregan a las clases por medio de prototype

    ```javascript
    function MediaPlayer(config) {
        this.media = config.el;
    }
    
    MediaPlayer.prototype.play = function() {
        this.media.play();
    };
    ```

