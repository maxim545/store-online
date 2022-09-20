import Container from '../src/components/render/pages/shop/elements/container'

describe('Create container', () => {
    const element = new Container();

    it('draw method must return truthy', () => {
        expect(element.draw()).toBeTruthy();
      });

    
  });
  