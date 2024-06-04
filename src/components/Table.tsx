import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import Loading from './Loading';

function Table() {
  const { filteredPlanets } = useContext(DataContext);

  if (!filteredPlanets.length) {
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
