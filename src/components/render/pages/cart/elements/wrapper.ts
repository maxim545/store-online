import CreateElement from '../../../../common/createElement';

class Wrapper {
  private createEl: CreateElement;

  constructor() {
    this.createEl = new CreateElement();
  }

  draw(): HTMLElement {
    const container: HTMLElement = this.createEl.create('div', '', 'container container_main container_main-cart', null);
    return container;
  }
}

export default Wrapper;
