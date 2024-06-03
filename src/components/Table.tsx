import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import Loading from './Loading';

function Table() {
  const { dataPlanets } = useContext(DataContext);

  if (!dataPlanets.length) {
    return (
      <Loading />
    );
  }

  return (
    <table>
      <thead>
        <tr>
          {
            dataPlanets.length > 0 && Object.keys(dataPlanets[0]).map((key) => (
              <th key={ key }>{key}</th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          dataPlanets.length > 0 && dataPlanets.map((planet, index) => (
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
