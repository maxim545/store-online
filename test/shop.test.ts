import Shop from '../src/components/render/pages/shop/shop'

describe('Create body', () => {
    const shop = new Shop();

    it('method render should not return anything', () => {
        const div = document.createElement('div');
        expect(shop.render(div, [])).toBeUndefined();
      });

    
  });
  