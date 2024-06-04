import { useContext } from 'react';
import DataContext from '../context/DataContext';

function useFilter() {
  const { setFilteredPlanets, dataPlanets } = useContext(DataContext);

  function handleChange(text: string) {
    if (!text.length) {
      setFilteredPlanets(dataPlanets);
    } else {
      const filteredPlanets = dataPlanets.filter((planet) => planet.name.includes(text));
      setFilteredPlanets(filteredPlanets);
    }
  }

  return { handleChange };
}

export default useFilter;
