import { IActiveFilters } from '../../types/types';

class LocalStorage {
  static getFilters(): IActiveFilters {
    let activeFilters;
    if (!localStorage.getItem('filter')) {
      activeFilters = {
        filters: {
          name: '',
        },
        sort: 'UpName',
        rangeYear: {
          start: [2010, 2022], connect: true, step: 1, range: { min: 2010, max: 2022 },
        },
        rangeCount: {
          start: [1, 10], connect: true, step: 1, range: { min: 1, max: 10 },
        },
      };
    } else {
      activeFilters = <IActiveFilters>JSON.parse(localStorage.getItem('filter') || '');
    }
    return activeFilters;
  }
}

export default LocalStorage;
