import Header from '../src/components/render/renderHeader'

describe('Draw header', () => {
    const header = new Header();

    it('draw method return header html element', () => {
        expect(header.draw().nodeName).toEqual("HEADER");
      });

    
  });
  