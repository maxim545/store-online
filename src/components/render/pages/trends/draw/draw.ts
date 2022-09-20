import CreateElement from '../../../../common/createElement';
import { ICards } from '../../../../types/types';

class TrendsPage {
  private createEl: CreateElement;

  constructor() {
    this.createEl = new CreateElement();
  }

  drawWrapper(): HTMLElement {
    const container = this.createEl.create('div', '', 'container container_main container_main-start', null);
    this.createEl.create('h2', 'Trending now', 'start__title', container);
    return container;
  }

  drawCards(data: ICards<string, boolean>[]): HTMLElement {
    const trendsBlock = this.createEl.create('div', '', 'trends', null);
    const copyData = data.slice(0, 3);
    copyData.forEach((card) => {
      const trendsItem = this.createEl.create('div', '', 'trends__item', trendsBlock, card.id);
      const trendsImg = `<img class="trends__img" src="images/cards/${card.id}.png" alt="${card.name}">`;
      this.createEl.create('div', trendsImg, 'trends__img-wrapper', trendsItem);
      const trendsInfo = this.createEl.create('div', '', 'trends__info', trendsItem);
      this.createEl.create('h3', card.name, 'trends__title', trendsInfo);
      const cardValues: string[] = Object.keys(card);
      cardValues.slice(2).forEach((value) => {
        if (value === 'price') {
          this.createEl.create('div', `$${card[value]}`, 'trends__price', trendsInfo);
        }
      });
    });
    return trendsBlock;
  }

  drawButton(): HTMLElement {
    const btnContainer = this.createEl.create('div', '', 'trends__bottom', null);
    const btn = this.createEl.create('a', 'Go to shop', 'trends__btn', btnContainer) as HTMLAnchorElement;
    btn.href = '#';
    return btnContainer;
  }
}

export default TrendsPage;
