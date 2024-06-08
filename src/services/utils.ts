import { ColumnSort, Planet } from '../types';

export function sortData(data: Planet[], sort: ColumnSort) {
  const { column, sort: sortOrder } = sort.order;

  return data.sort((first, second) => {
    const firstValue = Number(first[column as keyof Planet]);
    const secondValue = Number(second[column as keyof Planet]);

    if (sortOrder === 'ASC') {
      return firstValue - secondValue;
    }
    return secondValue - firstValue;
  });
}
