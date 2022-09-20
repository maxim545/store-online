import ModalDraw from '../src/components/render/pages/shop/modal/modalDraw'

describe('Draw modal', () => {
    const modal = new ModalDraw();

    it('draw method must return div html element', () => {
        expect(modal.draw().nodeName).toEqual("DIV");
      });

    
  });
  