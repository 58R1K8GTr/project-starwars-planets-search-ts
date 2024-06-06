import { useContext, useEffect, useState } from 'react';
import DataContext from '../context/DataContext';
import Loading from './Loading';
import { Planet, RelationalOperatorsType } from '../types';

function Table() {
  const [loading, setLoading] = useState(true);
  const {
    dataPlanets,
    setFilteredPlanets,
    filteredPlanets,
    filters,
  } = useContext(DataContext);

  useEffect(() => {
    if (dataPlanets.length === 0) return;
    const relationalOperators: RelationalOperatorsType = {
      'maior que': (value1: number, value2: number) => value1 > value2,
      'menor que': (value1: number, value2: number) => value1 < value2,
      'igual a': (value1: number, value2: number) => value1 === value2,
    };
    const newPlanets = filters.reduce<Planet[]>((acc, curr) => {
      const { column, relationalOperator, value } = curr;
      return acc.filter(
        (planet) => relationalOperators[
          relationalOperator
        ](Number(planet[column as keyof Planet]), Number(value)),
      );
    }, dataPlanets);
    setFilteredPlanets(newPlanets);
    setLoading(false);
  }, [filters, dataPlanets, setFilteredPlanets]);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <table>
      <thead>
        <tr>
          {
            filteredPlanets.length > 0 && Object.keys(filteredPlanets[0]).map((key) => (
              <th key={ key }>{key}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          filteredPlanets.length > 0 && filteredPlanets.map((planet, index) => (
            <tr key={ index }>
              {Object.values(planet).map((value, i) => (
                <td key={ i }>{value}</td>
              ))}
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
