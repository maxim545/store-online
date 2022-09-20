import Notification from '../src/components/render/pages/shop/elements/notification'

describe('Create notification', () => {
    const element = new Notification();

    it('draw method must return truthy', () => {
        expect(element.draw()).toBeTruthy();
      });

    it('draw method must return div element', () => {
      expect(element.draw().nodeName).toEqual("DIV");
    });

    
  });
  