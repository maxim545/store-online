import CartsPage from './cards/cardsDraw';
import Wrapper from './elements/wrapper';
import Notification from './elements/notification';
import { ICards } from '../../../types/types';

class Cart {
  private cartsPage: CartsPage;

  private wrapper: Wrapper;

  private notification: Notification;

  constructor() {
    this.cartsPage = new CartsPage();
    this.wrapper = new Wrapper();
    this.notification = new Notification();
  }

  render(main: HTMLElement): void {
    let data;
    if (localStorage.getItem('cart')) {
      data = <ICards<string, boolean>[]>JSON.parse(localStorage.getItem('cart') || '');
    }
    let cards: HTMLElement = this.notification.draw();
    const container = this.wrapper.draw();
    if (data && data.length) {
      cards = this.cartsPage.drawCards(data, container);
    }
    container.append(cards);
    main.append(container);
  }
}

export default Cart;
