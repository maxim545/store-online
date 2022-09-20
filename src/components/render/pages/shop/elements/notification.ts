import CreateElement from '../../../../common/createElement';

class Notification {
  private createEl: CreateElement;

  constructor() {
    this.createEl = new CreateElement();
  }

  draw(): HTMLElement {
    const notification: HTMLElement = this.createEl.create('div', '', 'notification', null);
    this.createEl.create('div', 'Sorry, no matches found', 'notification__inner', notification); 
    return notification;
}
}

export default Notification;
