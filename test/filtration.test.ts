import CardsFilter from '../src/components/render/pages/shop/filters/filtration'


describe('Sorting array', () => {
    const data = new CardsFilter();

    it('sort method return truthy', () => {
      expect(data.sort([], '')).toBeTruthy();
    });

    it('sort method return array', () => {
        expect(data.sort([], '')).toBeInstanceOf(Array);
      });

  });
