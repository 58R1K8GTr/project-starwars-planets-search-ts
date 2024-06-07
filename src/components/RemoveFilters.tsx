import { useContext } from 'react';
import DataContext from '../context/DataContext';

function RemoveFilters() {
  const { setFilters } = useContext(DataContext);
  return (
    <div>
      <button
        data-testid="button-remove-filters"
        onClick={ () => setFilters([]) }
      >
        Remover todos os filtros
      </button>
    </div>
  );
}

export default RemoveFilters;
