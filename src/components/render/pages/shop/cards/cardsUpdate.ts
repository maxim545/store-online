import { IActiveFilters, ICards } from '../../../../types/types';
import CardsFilter from '../filters/filtration';
import Notification from '../elements/notification'

class CardsUpdate {
  private cardsFilter: CardsFilter;

  private notification: Notification;

  constructor() {
    this.cardsFilter = new CardsFilter();
    this.notification = new Notification();
  }

  update(activeFilters: IActiveFilters, products: ICards<string, boolean>[]): void {
    const container: HTMLElement | null = document.querySelector('.container_main');
    let cards: HTMLElement | null = document.querySelector('.cards');
    if (cards && container) { container.removeChild(cards); }
    cards = this.cardsFilter.filter(products, activeFilters);
    if (!cards.firstChild) { cards.append(this.notification.draw()); }
    if (cards && container) { container.append(cards); }
    localStorage.setItem('filter', JSON.stringify(activeFilters));
  }
}

export default CardsUpdate;
