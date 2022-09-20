export interface IRange {
  start: number[],
  connect: boolean,
  step: number,
  range: {
    min: number,
    max: number
  }
}

export type TFiltersOptions = {
  [prop: string]: string[] | string;
};

export interface IActiveFilters {
  filters: TFiltersOptions,
  sort: string,
  rangeYear: IRange,
  rangeCount: IRange
}

export interface ICards<T, U> {
  id: T,
  name: T,
  count: T,
  year: T,
  color: T,
  size: T,
  type: T,
  price: T,
  brand: T,
  popular: U,
}

export type TOptions = {
  [prop: string]: string;
};

export interface ISort {
  DownYear: string,
  UpYear: string,
  DownName: string,
  UpName: string
};





