import { createContext } from 'react';
import { DataContextType } from '../types';

const DataContext = createContext<DataContextType>({
  dataPlanets: [],
});

export default DataContext;
