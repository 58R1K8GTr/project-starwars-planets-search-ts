import { useContext } from 'react';
import Select from './Select';
import Input from './Input';
import DataContext from '../context/DataContext';
import { sortData } from '../services/utils';

type ChangeEventSelect = React.ChangeEvent<HTMLSelectElement>;
type ChangeEventInput = React.ChangeEvent<HTMLInputElement>;

function CompositeSort() {
  const {
    columnSort,
    setColumnSort,
    setFilteredPlanets,
  } = useContext(DataContext);

  const handleChangeSelect = ({ target: { value } }: ChangeEventSelect) => {
    setColumnSort(
      (prevState) => ({ order: { ...prevState.order, column: value } }),
    );
  };

  const handleChangeInputs = ({ target: { value } }: ChangeEventInput) => {
    setColumnSort(
      (prevState) => ({ order: { ...prevState.order, sort: value } }),
    );
  };

  const handleClick = () => {
    setFilteredPlanets((prevState) => {
      const sortedData = sortData(prevState, columnSort);
      return [...sortedData];
    });
  };

  const ColumnsNames = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];

  const dataTestIdSelect = 'column-sort';

  return (
    <div>
      <Select
        texts={ ColumnsNames }
        values={ ColumnsNames }
        properties={ [
          dataTestIdSelect,
          dataTestIdSelect,
          dataTestIdSelect,
          columnSort.order.column,
        ] }
        handleChange={ handleChangeSelect }
      />
      <Input
        proprieties={ [
          'ascending',
          'radio',
          'radio-button-sort',
          'column-sort-input-asc',
        ] }
        labelText="Ascending"
        handleChange={ handleChangeInputs }
        inputValue="ASC"
      />
      <Input
        proprieties={ [
          'descending',
          'radio',
          'radio-button-sort',
          'column-sort-input-desc',
        ] }
        labelText="Descending"
        handleChange={ handleChangeInputs }
        inputValue="DESC"
      />
      <button
        data-testid="column-sort-button"
        onClick={ handleClick }
      >
        Ordenar
      </button>
    </div>
  );
}

export default CompositeSort;
