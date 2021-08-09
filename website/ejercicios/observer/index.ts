interface Observer {
  update: (data: any) => void;
}

interface Subject {
  subscribe: (observer: Observer) => void;
  unsubscribe: (observer: Observer) => void;
}

class BitcoinPrice implements Subject { // subject
  observers: Observer[] = [];

  constructor() {
    const el: HTMLInputElement = document.querySelector('#value');
    el.addEventListener('input', () => {
      this.notify(el.value); // notifica a todos los usuarios
    });
  }

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.findIndex(obs => {
      return obs === observer; // regresa el indice del observer
    });

    this.observers.splice(index, 1); // elimina un observer desde el indice
  }

  notify(data: any) { // notifica a todos los observers
    this.observers.forEach(observer => observer.update(data));
  }
}

class PriceDisplay implements Observer { // observer
  private el: HTMLElement;

  constructor() {
    this.el = document.querySelector('#price');
  }

  update(data: any) {
    this.el.innerText = data;
  }
}

// creamos instancias para el object y observer para subscribirlas

const value = new BitcoinPrice(); // subject
const display = new PriceDisplay(); // observer

value.subscribe(display);

setTimeout(() => value.unsubscribe(display), 5000); // unsubscribe
