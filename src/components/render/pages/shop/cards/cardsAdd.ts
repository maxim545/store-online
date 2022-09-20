import { ICards } from '../../../../types/types';

class CardsAdd {
  add(data: ICards<string, boolean>[], e: Event): void {
    const modalElement = document.querySelector('.modal') as HTMLElement;
    const curTarget = e.currentTarget as HTMLElement;
    const currentNum = curTarget.dataset.name as string;
    const currentItem = data.find((val) => val.id === currentNum) as ICards<string, boolean>;
    if (localStorage.getItem('cart')) {
      const cartItems = <ICards<string, boolean>[]>JSON.parse(localStorage.getItem('cart') || '');
      const cartIndex: number = cartItems.findIndex((val) => val.id === currentNum);
      if (cartIndex === -1) {
        if (cartItems.length < 20) {
          cartItems.push(currentItem);
          curTarget.classList.add('active');
        } else {
          modalElement.classList.add('active_item');
        }
      } else {
        cartItems.splice(cartIndex, 1);
        curTarget.classList.remove('active');
      }
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } else {
      const cartItems: ICards<string, boolean>[] = [];
      cartItems.push(currentItem);
      curTarget.classList.add('active');
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
    const cartItems = <ICards<string, boolean>[]>JSON.parse(localStorage.getItem('cart') || '');
    const cartLink = document.querySelector('.nav__link-number') as HTMLElement;
    cartLink.innerHTML = String(cartItems.length);
  }
}

export default CardsAdd;
