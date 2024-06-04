import useFilter from '../hooks/useFilter';

function Filter() {
  const { handleChange } = useFilter();

  return (
    <form>
      <label htmlFor="filter-name-input">
        Nome:
        {' '}
        <input
          type="text"
          name="filter-name"
          onChange={ ({ target: { value } }) => handleChange(value) }
          id="filter-name-input"
          data-testid="name-filter"
        />
      </label>
    </form>
  );
}

export default Filter;
