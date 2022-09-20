import CardsDraw from '../src/components/render/pages/shop/cards/cardsDraw'

describe('Draw cards', () => {
    const card = new CardsDraw();

    it('draw method must return truthy', () => {
        expect(card.draw([])).toBeTruthy();
      });

    it('draw return div element', () => {
     expect(card.draw([]).nodeName).toEqual("DIV");
    });
    
});
