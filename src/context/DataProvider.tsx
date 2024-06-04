import { useState, useEffect } from 'react';
import fetchApi from '../services/fetchApi';
import { ChildrenProp, Planet } from '../types';
import DataContext from './DataContext';

function DataProvider({ children }: ChildrenProp) {
  const [dataPlanets, setDataPlanets] = useState<Planet[]>([]);
  const [filteredPlanets, setFilteredPlanets] = useState<Planet[]>([]);

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
  };

  return (
    <DataContext.Provider value={ returnValue }>
      { children }
    </DataContext.Provider>
  );
}

export default DataProvider;
