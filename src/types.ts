import { ReactNode } from 'react';

export type ChildrenProp = {
  children: ReactNode
};

export type Planet = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents?: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type ColumnSort = {
  order: {
    column: string,
    sort: string,
  }
};

export type DataContextType = {
  dataPlanets: Planet[];
  setFilteredPlanets: (
    React.Dispatch<React.SetStateAction<Planet[]>>
  );
  filteredPlanets: Planet[];
  handleClick: (newFilter: FilterType) => void;
  filters: FilterType[];
  setFilters: React.Dispatch<React.SetStateAction<FilterType[]>>;
  columnSort: ColumnSort;
  setColumnSort: React.Dispatch<React.SetStateAction<{
    order: {
      column: string;
      sort: string;
    };
  }>>;
};

export type SelectionProp = {
  properties: string[];
  values: string[];
  texts: string[];
  handleChange: (
    (event: React.ChangeEvent<HTMLSelectElement>) => void
  );
};

export type InputProp = {
  proprieties: string[];
  labelText: string;
  inputValue: (
    string | number | readonly string[] | undefined
  );
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export type FilterType = {
  column: string;
  relationalOperator: string;
  value: string;
  id: number;
};

export type RelationalOperatorsType = {
  [key: string]: (value1: number, value2: number) => boolean;
};

export type FilterTagProp = {
  filter: FilterType;
  handleClick: (id: number) => void;
};
