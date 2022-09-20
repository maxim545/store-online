import CreateElement from '../src/components/common/createElement'

describe('Create element', () => {
    const element = new CreateElement();

    it('create method return truthy', () => {
        expect(element.create('div', '', '', null)).toBeTruthy();
      });

    it('class CreateElement exists', () => {
      expect(CreateElement).toBeInstanceOf(Function);
    });
    
  });
  