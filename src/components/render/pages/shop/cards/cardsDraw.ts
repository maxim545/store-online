import CreateElement from '../../../../common/createElement';
import { ICards } from '../../../../types/types';
import CardsAdd from './cardsAdd';

class CardsDraw {
  private createEl: CreateElement;

  private cardsAdd: CardsAdd;

  constructor() {
    this.createEl = new CreateElement();
    this.cardsAdd = new CardsAdd();
  }

  draw(data: ICards<string, boolean>[]): HTMLElement {
    const cardsBlock: HTMLElement = this.createEl.create('div', '', 'cards', null);
    data.forEach((card) => {
      const cardItem: HTMLElement = this.createEl.create('div', '', 'cards__item', cardsBlock, card.id);
      const cardImg = `<img class="card__img" src="images/cards/${card.id}.png" alt="${card.name}">`;
      const cardImgWrap = this.createEl.create('div', cardImg, 'cards__img-wrapper', cardItem);
      if (card.popular) {
        const flameIcon = this.createEl.create('img', '', 'cards__img-flame', cardImgWrap) as HTMLImageElement;
        flameIcon.src = 'images/icons/flame.png';
        flameIcon.title = 'This item is popular';
      }
      const cardInfo: HTMLElement = this.createEl.create('div', '', 'cards__info', cardItem);
      this.createEl.create('h2', card.name, 'cards__title', cardInfo);
      const cardDescr: HTMLElement = this.createEl.create('ul', '', 'cards__descr', cardInfo);
      const cardBottom: HTMLElement = this.createEl.create('div', '', 'cards__bottom', cardInfo);
      const cardValues: string[] = Object.keys(card);
      const displayValues: string[] = ['year', 'brand', 'count', 'color'];
      cardValues.slice(2).forEach((value) => {
        if (value === 'price') {
          this.createEl.create('div', `$${card[value]}`, 'cards__price', cardBottom);
          this.createEl.create('button', 'Add to cart', 'cards__button', cardBottom);
        } else if (displayValues.includes(value)) {
          const currentValue = `${value[0].toUpperCase()}${value.slice(1)}: `;
          const descrItemTitle = `
                  <span class="cards__descr-title">${currentValue}</span>
                  <span class="cards__descr-value">${String(card[value as keyof ICards<string, boolean>])}</span>
                  `;
          this.createEl.create('li', descrItemTitle, 'cards__descr-item', cardDescr);
        }
      });
      if (localStorage.getItem('cart')) {
        const itemsData = <ICards<string, boolean>[]>JSON.parse(localStorage.getItem('cart') || '');
        const itemIndex: number = itemsData.findIndex((val) => val.id === card.id);
        if (itemIndex !== -1) {
          cardItem.classList.add('active');
        }
      }
    });
    cardsBlock.childNodes.forEach((el) => el.addEventListener('click', (e) => { this.cardsAdd.add(data, e); }));
    return cardsBlock;
  }
}

export default CardsDraw;
