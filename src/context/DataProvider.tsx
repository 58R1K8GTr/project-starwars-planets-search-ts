import { useState, useEffect } from 'react';
import fetchApi from '../services/fetchApi';
import { ChildrenProp, Planet, FilterType } from '../types';
import DataContext from './DataContext';

function DataProvider({ children }: ChildrenProp) {
  const [dataPlanets, setDataPlanets] = useState<Planet[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);
  const [filters, setFilters] = useState<FilterType[]>([]);
  const [columnSort, setColumnSort] = useState(
    { order: { column: 'population', sort: 'ASC' } },
  );

  // esse handleClick não deveria ficar aqui, só percebi isso depois.
  // depois refatoro.
  const handleClick = (newFilter: FilterType) => {
    setFilters((prevState) => [...prevState, newFilter]);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchApi('https://swapi.dev/api/planets');
        const restructuredData = data.results.map((item: Planet) => {
          delete item.residents;
          return item;
        });
        setDataPlanets(restructuredData);
        setFilteredPlanets(restructuredData);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const returnValue = {
    dataPlanets,
    setFilteredPlanets,
    filteredPlanets,
    filters,
    handleClick,
    setFilters,
    columnSort,
    setColumnSort,
  };

  return (
    <DataContext.Provider value={ returnValue }>
      { children }
    </DataContext.Provider>
  );
}

export default DataProvider;
