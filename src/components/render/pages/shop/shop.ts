import { API } from 'nouislider';
import { IActiveFilters, IRange, ICards } from '../../../types/types';
import FiltersDraw from './filters/filtersDraw';
import CardsFilter from './filters/filtration';
import LocalStorage from '../localStorage';
import ModalDraw from './modal/modalDraw';
import ContainerDraw from './elements/container';
import CardsUpdate from './cards/cardsUpdate';
import Notification from './elements/notification';

class Shop {
  private filtersDraw: FiltersDraw;

  private cardsFilter: CardsFilter;

  private activeFilters: IActiveFilters;

  private modalDraw: ModalDraw;

  private containerDraw: ContainerDraw;

  private cardsUpdate: CardsUpdate;

  private notification: Notification;

  private products: ICards<string, boolean>[];

  constructor() {
    this.filtersDraw = new FiltersDraw();
    this.cardsFilter = new CardsFilter();
    this.activeFilters = LocalStorage.getFilters();
    this.modalDraw = new ModalDraw();
    this.containerDraw = new ContainerDraw();
    this.cardsUpdate = new CardsUpdate();
    this.notification = new Notification();
    this.products = [];
  }

  render(main: HTMLElement, data: ICards<string, boolean>[]): void {
    if (data.length) { this.products = data;}
    const modalElement = this.modalDraw.draw();
    const [container, sidebar, toolBar] = this.containerDraw.draw();
    const [sortElement, selectELement] = this.filtersDraw.sortDraw(this.activeFilters);
    const [searchElement, searchInput, clearSearch] = this.filtersDraw.searchDraw(this.activeFilters);
    const filterColorBlock = this.filtersDraw.filterColorDraw(this.activeFilters, this.products);
    const [rangeYearBlock, rangeYear, yearLeftEl, yearRightEl] = this.filtersDraw.rangeDraw(this.activeFilters.rangeYear, 'year');
    const rangeYearElement = rangeYear.noUiSlider as API;
    const [rangeCountBlock, rangeCount, countLeftEL, countRightEl] = this.filtersDraw.rangeDraw(this.activeFilters.rangeCount, 'count')
    const rangeCountElement = rangeCount.noUiSlider as API;
    const filters: string[] = ['type', 'brand', 'size'];
    const filterPopularBlock = this.filtersDraw.filterPopularDraw(this.activeFilters);
    const resetBtn = this.filtersDraw.buttonDraw('reset filters', 'reset__filters');
    const clearBtn = this.filtersDraw.buttonDraw('reset settings', 'reset__setting');
    const showBtn = this.filtersDraw.buttonDraw('show filters', 'show__filters');
    const cardsBlock = this.cardsFilter.filter(this.products, this.activeFilters);

    // Insert filters in sidebar
    sidebar.append(searchElement, filterColorBlock, rangeYearBlock, rangeCountBlock, filterPopularBlock, resetBtn, clearBtn);
    toolBar.append(sortElement, showBtn);
    filters.forEach((filter) => sidebar.insertBefore(this.filtersDraw.filterDraw(filter, this.activeFilters, this.products), filterPopularBlock));
    // Insert data in container
    if (!cardsBlock.firstChild) { cardsBlock.append(this.notification.draw()); }
    container.append(toolBar, modalElement, sidebar, cardsBlock);

    // Sort data when select sort parametr
    selectELement.addEventListener('change', (e) => {
      const selectTarget = e.target as HTMLSelectElement;
      this.activeFilters.sort = selectTarget.value;
      this.cardsUpdate.update(this.activeFilters, this.products);
    });

    // Search data when write letter in field
    const updateSearch = (inputValue: string) => {
      this.activeFilters.filters.name = inputValue;
      if(searchInput.value) {
        clearSearch.classList.add('active');
      } else {
        clearSearch.classList.remove('active');
      }
      this.cardsUpdate.update(this.activeFilters, this.products);
    }

    searchInput.addEventListener('input', () => {
      updateSearch(searchInput.value);
    });

    clearSearch.addEventListener('click', () => {
      searchInput.value = '';
      updateSearch(searchInput.value);
    });

    sidebar.addEventListener('click', (e) => { 
      const filterTarget = e.target as HTMLElement;
      const dataSetName = filterTarget.dataset.name as string;
      if (dataSetName) {
        const currentFilter = this.activeFilters.filters[dataSetName] as string[];
        const dataValue = filterTarget.dataset.type as string;
        filterTarget.classList.toggle('active');
        if (currentFilter && currentFilter.includes(dataValue)) {
          currentFilter.splice(currentFilter.indexOf(dataValue), 1);
        } else if (currentFilter && !currentFilter.includes(dataValue)) {
          currentFilter.push(dataValue);
        } else {
          const filterValue = [];
          filterValue.push(dataValue);
          this.activeFilters.filters[dataSetName] = [...filterValue];
        }
        this.cardsUpdate.update(this.activeFilters, this.products);
      }
    });

    rangeYearElement.on('update', () => {
      const [firstValue, secondValue] = rangeYearElement.get() as [string, string];
      yearLeftEl.innerHTML = String(Math.floor(+firstValue));
      yearRightEl.innerHTML = String(Math.floor(+secondValue));
      const yearValues = [];
      for (let i = Number(firstValue); i <= Number(secondValue); i += 1) {
        yearValues.push(String(i));
      }
      this.activeFilters.filters.year = [...yearValues];
      const rangeYearData: IRange = this.activeFilters.rangeYear;
      rangeYearData.start[0] = Math.floor(+firstValue);
      rangeYearData.start[1] = Math.floor(+secondValue);
      this.cardsUpdate.update(this.activeFilters, this.products);
    });

    rangeCountElement.on('update', () => {
      const rangeCountData: IRange = this.activeFilters.rangeCount;
      const [firstValue, secondValue] = rangeCountElement.get() as [string, string];
      countLeftEL.innerHTML = String(Math.floor(+firstValue));
      countRightEl.innerHTML = String(Math.floor(+secondValue));
      const countValues = [];
      for (let i = Number(firstValue); i <= Number(secondValue); i += 1) {
        countValues.push(String(i));
      }
      this.activeFilters.filters.count = [...countValues];
      rangeCountData.start[0] = Math.floor(+firstValue);
      rangeCountData.start[1] = Math.floor(+secondValue);
      this.cardsUpdate.update(this.activeFilters, this.products);
    });

    // reset only filters if btn pressed
    resetBtn.addEventListener('click', () => {
      this.activeFilters.filters = {name: ''};
      rangeYearElement.set([2010, 2022]);
      rangeCountElement.set([1, 10]);
      main.removeChild(container);
      this.render(main, []);
    });

    // reset filters and all setings, sort, serach, cart
    clearBtn.addEventListener('click', () => {
      localStorage.clear();
      this.activeFilters = LocalStorage.getFilters();
      const cartLink = document.querySelector('.nav__link-number') as HTMLElement;
      cartLink.innerHTML = '0';
      main.removeChild(container);
      this.render(main, []);
    });

    showBtn.addEventListener('click', () => {
      sidebar.classList.toggle('active-filters');
      showBtn.classList.toggle('active-filters');
    });

    main.append(container);
  }
}

export default Shop;
