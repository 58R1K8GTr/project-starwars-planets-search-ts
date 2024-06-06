import { FilterTagProp } from '../types';

function FilterTag({ filter, handleClick }: FilterTagProp) {
  const { column, relationalOperator, value, id } = filter;
  const tagName = `${column} ${relationalOperator} ${value}`;
  return (
    <div className="horizontal">
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
