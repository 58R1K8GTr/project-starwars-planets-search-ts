import './App.css';
import { useContext } from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import CompositeFilters from './components/CompositeFilters';
import FilterTagList from './components/FilterTagList';
import DataContext from './context/DataContext';
import RemoveFilters from './components/RemoveFilters';
import CompositeSort from './components/CompositeSort';

function App() {
  const { filters } = useContext(DataContext);
  return (
    <div>
      <NameFilter />
      <div>
        <CompositeFilters />
        <CompositeSort />
        <RemoveFilters />
      </div>
      { filters.length > 0 && <FilterTagList /> }
      <Table />
    </div>
  );
}

export default App;
