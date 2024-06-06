import './App.css';
import { useContext } from 'react';
import Table from './components/Table';
import NameFilter from './components/NameFilter';
import CompositeFilters from './components/CompositeFilters';
import FilterTagList from './components/FilterTagList';
import DataContext from './context/DataContext';

function App() {
  const { filters } = useContext(DataContext);
  return (
    <div>
      <NameFilter />
      <CompositeFilters />
      { filters.length > 0 && <FilterTagList /> }
      <Table />
    </div>
  );
}

export default App;
