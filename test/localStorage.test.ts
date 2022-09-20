import LocalStorage from '../src/components/render/pages/localStorage'

describe('LocalStorage get data', () => {

    it('method getFilters must return truthy', () => {
        expect(LocalStorage.getFilters()).toBeTruthy();
    });

    it('method getFilters must return object', () => {
        expect(LocalStorage.getFilters()).toBeInstanceOf(Object);
    });

  });
  