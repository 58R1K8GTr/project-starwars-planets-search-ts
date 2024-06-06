import { useContext, useState } from 'react';
import DataContext from '../context/DataContext';
import Input from './Input';

function NameFilter() {
  const { setFilteredPlanets, dataPlanets } = useContext(DataContext);
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    if (!value.length) {
      setFilteredPlanets(dataPlanets);
    } else {
      const filteredPlanets = dataPlanets.filter((planet) => planet.name.includes(value));
      setFilteredPlanets(filteredPlanets);
    }
    setInputValue(value);
  };

  return (
    <div>
      <Input
        labelText="Nome:"
        proprieties={ [
          'filter-name-input',
          'text',
          'filter-name',
          'name-filter',
        ] }
        inputValue={ inputValue }
        handleChange={ handleChange }
      />
    </div>
  );
}

export default NameFilter;
