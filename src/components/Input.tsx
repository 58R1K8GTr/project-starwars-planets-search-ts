import { InputProp } from '../types';

function Input(
  { proprieties, labelText, inputValue, handleChange: handleInput }: InputProp,
) {
  const [id, type, name, dataTestId] = proprieties;
  return (
    <label htmlFor={ id }>
      { labelText }
      {' '}
      <input
        type={ type }
        name={ name }
        onChange={ handleInput }
        value={ inputValue }
        id={ id }
        data-testid={ dataTestId }
      />
    </label>
  );
}

export default Input;
