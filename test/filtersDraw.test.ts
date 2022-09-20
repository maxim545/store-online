import FiltersRender from '../src/components/render/pages/shop/filters/filtersDraw'

describe('Draw range slider', () => {
    const range = new FiltersRender();

    it('rangeDraw method must return truthy', () => {
        expect(range.rangeDraw({ start: [1],connect: true, step: 1, range: { min: 1, max: 1 }}, '')).toBeTruthy();
      });
    
});

describe('Draw button', () => {
    const btn = new FiltersRender();

    it('buttonDraw method must return button HTML element', () => {
        expect(btn.buttonDraw('', '').nodeName).toEqual("BUTTON");
      });
    
});