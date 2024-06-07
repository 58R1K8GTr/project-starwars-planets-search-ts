import { FilterTagProp } from '../types';

function FilterTag({ filter, handleClick }: FilterTagProp) {
  const { column, relationalOperator, value, id } = filter;
  const tagName = `${column} ${relationalOperator} ${value}`;
  return (
    <div
      className="horizontal"
      data-testid="filter"
    >
      <span>{ tagName }</span>
      <button
        onClick={ () => handleClick(id) }
      >
        Remover
      </button>
    </div>
  );
}

export default FilterTag;
