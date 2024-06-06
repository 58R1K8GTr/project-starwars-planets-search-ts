import { useContext } from 'react';
import DataContext from '../context/DataContext';
import FilterTag from './FilterTag';

function FilterTagList() {
  const { filters, setFilters } = useContext(DataContext);

  const handleClick = (id: number) => {
    setFilters((prevState) => prevState.filter((filter) => filter.id !== id));
  };

  return (
    filters.map((filter) => {
      return (
        <FilterTag
          filter={ filter }
          handleClick={ handleClick }
          key={ Object.values(filter).join(' ') }
        />
      );
    })
  );
}

export default FilterTagList;
