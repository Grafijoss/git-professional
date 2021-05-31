## visibilityChange 
***

El visibilityChange forma parte del API del DOM llamado Page Visibility y nos deja saber si el elemento es visible, pude ser usado para ejecutar una acción cuando cambiamos de pestaña. Así podemos ahorrar batería y mejorar la UX.

nos permite tomar una acción si el usuario no esta en la pestaña de la aplicación


```javascript

document.addEventListener('visibilitychange', this.handleVisibilityChange);

handleVisibilityChange() {
  const isVisible = document.visibilityState === 'visible';
  if (isVisible) {
    this.player.play();
  } else {
    this.player.pause();
  }
}

```