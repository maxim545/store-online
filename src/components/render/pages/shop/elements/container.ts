import CreateElement from '../../../../common/createElement';

class Container {
  private createEl: CreateElement;

  constructor() {
    this.createEl = new CreateElement();
  }

  draw(): [HTMLElement, HTMLElement, HTMLElement] {
    const container: HTMLElement = this.createEl.create('div', '', 'container container_main', null);
    const sidebar: HTMLElement = this.createEl.create('div', '', 'sidebar', null);
    const toolBar: HTMLElement = this.createEl.create('div', '', 'toolbar', null);
    return [container, sidebar, toolBar];
  }
}

export default Container;
