import CreateElement from '../../../../common/createElement';
import CardsRemove from './cardsRemove';
import { ICards } from '../../../../types/types';

class CartsPage {
  private createEl: CreateElement;

  private cardsRemove: CardsRemove;

  constructor() {
    this.createEl = new CreateElement();
    this.cardsRemove = new CardsRemove();
  }

  drawCards(data: ICards<string, boolean>[], container: HTMLElement): HTMLElement {
    const cardsBlock: HTMLElement = this.createEl.create('div', '', 'cart', null);
    data.forEach((card) => {
      const cardItem: HTMLElement = this.createEl.create('div', '', 'item', cardsBlock, card.id);
      const cardImg = `<img class="item__img" src="images/cards/${card.id}.png" alt="${card.name}">`;
      this.createEl.create('div', cardImg, 'item__img-wrapper', cardItem);
      const cardInfo: HTMLElement = this.createEl.create('div', '', 'item__info', cardItem);
      this.createEl.create('h2', card.name, 'item__title', cardInfo);
      const cardDescr: HTMLElement = this.createEl.create('ul', '', 'item__descr', cardInfo);
      const cardBottom: HTMLElement = this.createEl.create('div', '', 'item__right', cardItem);
      const cardValues: string[] = Object.keys(card);
      cardValues.slice(2).forEach((value) => {
        if (value === 'price') {
          this.createEl.create('div', `$${card[value]}`, 'item__price', cardBottom);
          this.createEl.create('button', 'Remove', 'item__button', cardBottom, card.id);
        } else if (value === 'color' || value === 'size') {
          const currentValue = `${value[0].toUpperCase()}${value.slice(1)}: `;
          const descrItemTitle = `<span class="item__descr-title">${currentValue}</span><span class="item__descr-value">${String(card[value as keyof ICards<string, boolean>])}</span>`;
          this.createEl.create('li', descrItemTitle, 'item__descr-item', cardDescr);
        }
      });
    });

    const cartList = cardsBlock.childNodes as NodeListOf<HTMLElement>;
    cartList.forEach((el) => {
      const currentButton = el.querySelector('.item__button') as HTMLElement;
      currentButton.addEventListener('click', (e) => { this.cardsRemove.remove(e, cardsBlock, container, el); }); 
    });

    return cardsBlock;
  }
}

export default CartsPage;
