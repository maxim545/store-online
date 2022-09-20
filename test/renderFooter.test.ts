import Footer from '../src/components/render/renderFooter'

describe('Draw footer', () => {
    const footer = new Footer();

    it('draw method return footer html element', () => {
        expect(footer.draw().nodeName).toEqual("FOOTER");
      });

    
  });
  