import Wrapper from '../src/components/render/pages/cart/elements/wrapper'


describe('Draw cart wrapper', () => {
    const wrapper = new Wrapper();

    it('draw method return truthy', () => {
        expect(wrapper.draw()).toBeTruthy();
      });

    it('draw method return div element', () => {
     expect(wrapper.draw().nodeName).toEqual("DIV");
    });
    
});