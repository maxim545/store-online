import TrendsPage from '../src/components/render/pages/trends/draw/draw'

describe('Draw wrapper', () => {
    const wrapper = new TrendsPage();

    it('drawWrapper method return truthy', () => {
        expect(wrapper.drawWrapper()).toBeTruthy();
      });

    it('drawWrapper return div element', () => {
     expect(wrapper.drawWrapper().nodeName).toEqual("DIV");
    });
    
});

describe('Draw cards', () => {
    const cards = new TrendsPage();

    it('drawCards method return truthy', () => {
        expect(cards.drawCards([])).toBeTruthy();
      });

    it('drawCards return div element', () => {
     expect(cards.drawCards([]).nodeName).toEqual("DIV");
    });
    
});

describe('Draw button', () => {
    const btn = new TrendsPage();

    it('drawWrapper method return truthy', () => {
        expect(btn.drawButton()).toBeTruthy();
      });

    it('draw method return header element', () => {
     expect(btn.drawButton().nodeName).toEqual("DIV");
    });
    
});
  