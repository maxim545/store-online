import CreateElement from '../../../../common/createElement';

class ModalDraw {
  private createEl: CreateElement;

  constructor() {
    this.createEl = new CreateElement();
  }

  draw(): HTMLElement {
    const modalEl: HTMLElement = this.createEl.create('div', '', 'modal', null);
    const modalInner: HTMLElement = this.createEl.create('div', '', 'modal__inner', modalEl);
    this.createEl.create('div', 'Sorry, but all slots are full', 'modal__text', modalInner);
    this.createEl.create('button', '', 'modal__btn', modalInner);
    modalEl.addEventListener('click', (e) => {
      const modalTarget = e.target as HTMLElement;
      if ((!modalInner.contains(modalTarget) && modalEl.classList.contains('active_item')) || modalTarget.classList.contains('modal__btn')) {
        modalEl.classList.remove('active_item');
      }
    });
    return modalEl;
  }
}

export default ModalDraw;
