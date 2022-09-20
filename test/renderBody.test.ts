import RenderBody from '../src/components/render/renderBody'

describe('Render body', () => {
    const body = new RenderBody();

      it('method switchPage should not return anything', () => {
        expect(body.switchPage()).toBeUndefined();
      });
    
  });
  