import TrendsPage from './draw/draw';
import { ICards } from '../../../types/types';

class Trends {
  private trendsPage: TrendsPage;

  constructor() {
    this.trendsPage = new TrendsPage();
  }

  render(main: HTMLElement, products: ICards<string, boolean>[]): void{
    const trendsPage: HTMLElement = this.trendsPage.drawWrapper();
    const cards: HTMLElement = this.trendsPage.drawCards(products);
    const tendsBtn: HTMLElement = this.trendsPage.drawButton();
    trendsPage.append(cards, tendsBtn);
    main.append(trendsPage);
  }
}

export default Trends;
