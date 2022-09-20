import Trends from '../src/components/render/pages/trends/trends'

describe('Render trends', () => {
    const trend = new Trends();

    it('method render should not return anything', () => {
        const div = document.createElement('div');
        expect(trend.render(div, [])).toBeUndefined();
      });

    
  });
  