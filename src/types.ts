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

export type DataContextType = {
  dataPlanets: Planet[];
  setFilteredPlanets: (
    React.Dispatch<React.SetStateAction<Planet[]>>
  );
  filteredPlanets: Planet[];
};
