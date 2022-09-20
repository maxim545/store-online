import Notification from '../elements/notification';
import { ICards } from '../../../../types/types';

class CardsRemove {
  private notification: Notification;

  constructor() {
    this.notification = new Notification();
  }

  remove(e: Event, cardsBlock: HTMLElement, container: HTMLElement, currentItem: HTMLElement): void {
    const curTarget = e.currentTarget as HTMLElement;
    const currentNum = curTarget.dataset.name as string;
    if (localStorage.getItem('cart')) {
      const cartItems = <ICards<string, boolean>[]>JSON.parse(localStorage.getItem('cart') || '');
      const cartIndex: number = cartItems.findIndex((val) => val.id === currentNum);
      cartItems.splice(cartIndex, 1);
      currentItem.remove();
      if (!cartItems.length) {
        cardsBlock.remove();
        container.append(this.notification.draw());
      }
      localStorage.setItem('cart', JSON.stringify(cartItems));
      const cartLink = document.querySelector('.nav__link-number') as HTMLElement;
      cartLink.innerHTML = String(cartItems.length);
    }
  }
  
  
}

export default CardsRemove;
