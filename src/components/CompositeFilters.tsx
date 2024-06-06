import { useContext, useState } from 'react';
import Selection from './Selection';
import Input from './Input';
import DataContext from '../context/DataContext';

function CompositeFilters() {
  const [inputValue, setInputValue] = useState('0');
  const [columnValue, setColumnValue] = useState('population');
  const [relationalOperator, setRelationalOperator] = useState('maior que');
  const { handleClick, filters } = useContext(DataContext);

  function updateColumnValues(newValue: string | undefined = undefined) {
    const removeItensColumn = filters.map((item) => item.column);
    if (newValue) {
      removeItensColumn.push(newValue);
    }
    return [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ].filter((item) => !removeItensColumn.includes(item));
  }

  const handleInput = (
    { target: { value } }: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setInputValue(value);
  };

  const handleChangeColumn = (
    { target: { value } }: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setColumnValue(value);
  };

  const handleChangeRelationalOperator = (
    { target: { value } }: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setRelationalOperator(value);
  };

  const columnProps = [
    ['column-filter', 'column', 'column-filter', columnValue],
    updateColumnValues(),
  ];

  const relationalOperatorsProps = [
    [
      'comparison-filter',
      'comparison',
      'comparison-filter',
      relationalOperator,
    ],
    ['maior que', 'menor que', 'igual a'],
  ];

  const idNameDataTestIdInput = 'value-filter';
  const inputProps = [
    idNameDataTestIdInput,
    'number',
    idNameDataTestIdInput,
    idNameDataTestIdInput,
  ];

  const resetInputs = () => {
    setInputValue('0');
    const columnValues = updateColumnValues(columnValue);
    setColumnValue(columnValues.length > 0 ? columnValues[0] : '');
    setRelationalOperator('maior que');
  };

  return (
    <div>
      <Selection
        properties={ columnProps[0] }
        values={ columnProps[1] }
        texts={ columnProps[1] }
        handleChange={ handleChangeColumn }
      />
      <Selection
        properties={ relationalOperatorsProps[0] }
        values={ relationalOperatorsProps[1] }
        texts={ relationalOperatorsProps[1] }
        handleChange={ handleChangeRelationalOperator }
      />
      <Input
        proprieties={ inputProps }
        labelText="valor:"
        inputValue={ inputValue }
        handleChange={ handleInput }
      />
      <button
        disabled={ filters.length === 5 }
        data-testid="button-filter"
        onClick={ () => {
          handleClick({
            column: columnValue,
            relationalOperator,
            value: inputValue,
            id: filters.length > 0
              ? filters[filters.length - 1].id + 1
              : 1,
          });
          resetInputs();
        } }
      >
        adicionar filtro
      </button>
    </div>
  );
}

export default CompositeFilters;
