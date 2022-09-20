import noUiSlider, { target, API } from 'nouislider';
import CreateElement from '../../../../common/createElement';
import { IRange, IActiveFilters, ICards, ISort } from '../../../../types/types';


class FiltersRender {
  private createEl: CreateElement;

  constructor() {
    this.createEl = new CreateElement();
  }

  sortDraw(activeFilters: IActiveFilters): [HTMLLabelElement, HTMLSelectElement] {
    const sortElement = this.createEl.create('div', '', 'filter sort', null) as HTMLInputElement;
    this.createEl.create('h2', 'Sort', 'filter__title', sortElement);
    const labelElement = this.createEl.create('label', '<span class="sort__title">Sort by: </span>', 'sort__label', sortElement) as HTMLLabelElement;
    const selectElement = this.createEl.create('select', '', 'sort__select', labelElement) as HTMLSelectElement;
    const sortParameters: string[] = ['UpName', 'DownName', 'UpYear', 'DownYear'];
    const sortNames: ISort = {
      DownYear: 'Year descending &uarr;',
      UpYear: 'Year ascending &darr;',
      DownName: 'Name descending [Z-A] &uarr;',
      UpName: 'Name ascending [A-Z] &darr;',
    };
    // Render selects elements
    sortParameters.forEach((parameter) => {
      const optionElement = this.createEl.create('option', sortNames[parameter as keyof ISort], 'sort__option', selectElement) as HTMLOptionElement;
      optionElement.value = parameter;
      if (parameter === activeFilters.sort) { optionElement.selected = true; }
    });
    return [labelElement, selectElement];
  }

  searchDraw(activeFilters: IActiveFilters): [HTMLInputElement, HTMLInputElement, HTMLElement] {
    const searchElement = this.createEl.create('div', '', 'filter search', null) as HTMLInputElement;
    this.createEl.create('h2', 'Search', 'filter__title', searchElement);
    const searchWrapper = this.createEl.create('div', '', 'search__wrapper', searchElement);
    const searchInput = this.createEl.create('input', '', 'search__input', searchWrapper) as HTMLInputElement;
    const clearBtn = this.createEl.create('div', '', 'clear', searchWrapper);
    if (activeFilters.filters.name) {
      clearBtn.classList.add('active');
    }
    searchInput.placeholder = 'Enter value...';
    searchInput.value = <string>activeFilters.filters.name;
    searchInput.type = 'search';
    searchInput.setAttribute( "autocomplete", "off" );
    searchInput.autofocus = true;
    return [searchElement, searchInput, clearBtn];
  }

  filterColorDraw(activeFilters: IActiveFilters, products:  ICards<string, boolean>[]): HTMLElement {
    const key = 'color';
    const filterColors = [] as string [];
    const activeFilter = activeFilters.filters[key];
    products.forEach((cart) => (filterColors.includes(cart.color) ? filterColors : filterColors.push(cart.color)));
    const filterColorBlock: HTMLElement = this.createEl.create('div', '', 'filter color', null);
    this.createEl.create('h2', 'Colors', 'filter__title', filterColorBlock);
    const filterList: HTMLElement = this.createEl.create('div', '', 'filter__list', filterColorBlock);
    filterColors.forEach((value) => {
      const colorBtn = this.createEl.create('button', '', `color__btn color__btn_${value}`, filterList, key, value) as HTMLButtonElement;
      if (activeFilter && activeFilter.includes(value)) {
        colorBtn.classList.add('active');
      }
    });
    return filterColorBlock;
  }

  rangeDraw(rangeData: IRange, type: string): [HTMLElement, target, HTMLElement, HTMLElement]  {
    const filterRangeBlock = this.createEl.create('div', '', 'filter range', null);
    this.createEl.create('h2', type, 'filter__title', filterRangeBlock);
    const range = this.createEl.create('div', '', `slider slider-${type}`, filterRangeBlock) as target;
    noUiSlider.create(range, rangeData);
    const rangeElement = range.noUiSlider as API;
    const [firstValue, secondValue] = rangeElement.get() as [string, string];
    const valueItems = this.createEl.create('div', '', 'value__items', range);
    const rangeValueLeft = this.createEl.create('div', firstValue, 'range__value range__value_left', valueItems);
    const rangeValueRight = this.createEl.create('div', secondValue, 'range__value range__value_right', valueItems);
    return [filterRangeBlock, range, rangeValueLeft, rangeValueRight];
  }

  filterDraw(key: string, activeFilters: IActiveFilters, products: ICards<string, boolean>[]): HTMLElement {
    const filterType = [] as string[];
    const activeFilter = activeFilters.filters[key];
    products.forEach((cart) => (filterType.includes(String(cart[key as keyof ICards<string, boolean>])) ? filterType : filterType.push(String(cart[key as keyof ICards<string, boolean>]))));
    const filterTypeBlock: HTMLElement = this.createEl.create('div', '', 'filter checkbox', null);
    this.createEl.create('h2', key, 'filter__title', filterTypeBlock);
    const filterList = this.createEl.create('ul', '', 'checkbox__list', filterTypeBlock);
    filterType.forEach((value, i) => {
      const typeItem: HTMLElement = this.createEl.create('li', '', 'checkbox__item', filterList);
      const typeInput = this.createEl.create('input', '', 'checkbox__input', typeItem, key, value) as HTMLInputElement;
      typeInput.type = 'checkbox';
      typeInput.id = `type-${key}-${i}`;
      if (activeFilter && activeFilter.includes(value)) {
        typeInput.checked = true;
      }
      const typeValue = `${value[0].toUpperCase()}${value.slice(1)}`;
      const typeLabel = this.createEl.create('label', typeValue, 'checkbox__label', typeItem) as HTMLLabelElement;
      typeLabel.htmlFor = `type-${key}-${i}`;
    });
    return filterTypeBlock;
  }

  filterPopularDraw(activeFilters: IActiveFilters): HTMLElement {
    const activeFilter = activeFilters.filters.popular;
    const filterPopularBlock: HTMLElement = this.createEl.create('div', '', 'filter popular', null);
    const typeInput = this.createEl.create('input', '', 'checkbox__input checkbox__input_popular', filterPopularBlock, 'popular', 'true') as HTMLInputElement;
    typeInput.type = 'checkbox';
    typeInput.id = 'type-popular';
    if (activeFilter && activeFilter.includes('true')) {
      typeInput.checked = true;
    }
    const typeLabel = this.createEl.create('label', 'Popular cards', 'checkbox__label checkbox__label_popular', filterPopularBlock) as HTMLLabelElement;
    typeLabel.htmlFor = 'type-popular';
    return filterPopularBlock;
  }

  buttonDraw(btnName: string, btnClass: string): HTMLButtonElement {
    const btn = this.createEl.create('button', btnName, `btn ${btnClass}`, null) as HTMLButtonElement;
    return btn;
  }
}

export default FiltersRender;
