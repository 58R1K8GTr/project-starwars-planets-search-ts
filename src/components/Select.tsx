import { SelectionProp } from '../types';

function Select(
  { properties, values, texts, handleChange }: SelectionProp,
) {
  const [dataTestId, name, id, selectedOption] = properties;

  return (
    <select
      name={ name }
      id={ id }
      data-testid={ dataTestId }
      onChange={ handleChange }
      value={ selectedOption }
    >
      {
        values.map((value, index) => {
          return (
            <option key={ value } value={ value }>
              { texts[index] }
            </option>
          );
        })
      }
    </select>
  );
}

export default Select;
