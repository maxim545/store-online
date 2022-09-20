import CreateElement from '../../../../common/createElement';

class Notification {
  private createEl: CreateElement;

  constructor() {
    this.createEl = new CreateElement();
  }

  draw(): HTMLElement {
    const cardsBlock: HTMLElement = this.createEl.create('div', '', 'cart', null);
    this.createEl.create('div', 'You did not add anything', 'cart__notification', cardsBlock);
    return cardsBlock;
  }
}

export default Notification;
