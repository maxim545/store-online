import CardsDraw from '../cards/cardsDraw';
import { ICards, IActiveFilters } from '../../../../types/types';

class CardsFilter {
  private cards: CardsDraw;

  constructor() {
    this.cards = new CardsDraw();
  }

  filter(data: ICards<string, boolean>[], activeFilters: IActiveFilters): HTMLElement {
    const filtData = { ...activeFilters.filters };
    const searchValues = filtData.name as string;
    let copyData = data.slice(0);
    const dataKeys = Object.keys(activeFilters.filters);
    dataKeys.forEach((key) => {
      if (filtData[key].length) {
        if (key === 'name') {
          copyData = copyData.filter((item) => item[key].toLowerCase().indexOf(searchValues.toLowerCase()) > -1); // Filtering by search value
        } else {
          copyData = copyData.filter((item) => filtData[key].includes(String(item[key as keyof ICards<string, boolean>]))); // Filtering by other value
        }
      }
    });
    copyData = this.sort(copyData, activeFilters.sort);
    return this.cards.draw(copyData);
  }

  sort(data:ICards<string, boolean>[], sortParameter: string): ICards<string, boolean>[] {
    if (sortParameter === 'DownYear') {
      data.sort((a, b) => (b.year < a.year ? -1 : 1));
    }
    if (sortParameter === 'UpYear') {
      data.sort((a, b) => (b.year > a.year ? -1 : 1));
    }
    if (sortParameter === 'UpName') {
      data.sort((a, b) => (b.name.toLowerCase() > a.name.toLowerCase() ? -1 : 1));
    }
    if (sortParameter === 'DownName') {
      data.sort((a, b) => (b.name.toLowerCase() < a.name.toLowerCase() ? -1 : 1));
    }
    return data;
  }
}

export default CardsFilter;
