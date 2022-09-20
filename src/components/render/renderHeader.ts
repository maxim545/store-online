import CreateElement from '../common/createElement';
import { ICards } from '../types/types';

class Header {
  private createEl: CreateElement;

  constructor() {
    this.createEl = new CreateElement();
  }

  draw() {
    const body = document.getElementById('body') as HTMLElement;
    const header: HTMLElement = this.createEl.create('header', '', 'header', body);
    const container: HTMLElement = this.createEl.create('div', '', 'container', header);
    const headerWrap: HTMLElement = this.createEl.create('div', '', 'header__wrap', container);
    const headerLogo = this.createEl.create('a', '', 'header__logo', headerWrap) as HTMLAnchorElement;
    headerLogo.href = '#';
    this.createEl.create('h1', 'Online store', 'header__title', headerLogo);
    const headerNav: HTMLElement = this.createEl.create('nav', '', 'nav', headerWrap);
    const headerUl: HTMLElement = this.createEl.create('ul', '', 'nav__list', headerNav);
    const headerSecondItem: HTMLElement = this.createEl.create('li', '', 'nav__item', headerUl);
    const headerShopLink = this.createEl.create('a', 'Shop', 'nav__link', headerSecondItem) as HTMLAnchorElement;
    headerShopLink.href = '#';
    const headerFirstItem: HTMLElement = this.createEl.create('li', '', 'nav__item', headerUl);
    const headerStartLink = this.createEl.create('a', 'Trends', 'nav__link', headerFirstItem) as HTMLAnchorElement;
    headerStartLink.href = '#trends';
    const headerCart: HTMLElement = this.createEl.create('div', '', 'header__cart', headerWrap);
    let cardIndex = '0' as string;
    if (localStorage.getItem('cart')) {
      const cartItems = <ICards<string, boolean>[]>JSON.parse(localStorage.getItem('cart') || '');
      cardIndex = String(cartItems.length);
    }
    const headerCartLink = this.createEl.create('a', `Cart <span class="nav__link-number">${cardIndex}</>`, 'nav__link', headerCart) as HTMLAnchorElement;
    headerCartLink.href = '#cart';
    return header;
  }
}

export default Header;
