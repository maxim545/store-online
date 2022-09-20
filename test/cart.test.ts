import Cart from '../src/components/render/pages/cart/cart'

describe('Create cart', () => {
    const cart = new Cart();

    it('method render should not return anything', () => {
        const div = document.createElement('div');
        expect(cart.render(div)).toBeUndefined();
    });
    
  });
  