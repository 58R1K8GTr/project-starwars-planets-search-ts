import { ColumnSort, Planet } from '../types';

export function sortData(data: Planet[], sort: ColumnSort) {
  const { column, sort: sortOrder } = sort.order;

  return data.sort((first, second) => {
    const firstValue = Number(first[column as keyof Planet]);
    const secondValue = Number(second[column as keyof Planet]);

    if (Number.isNaN(firstValue)) return 1;
    if (Number.isNaN(secondValue)) return -1;

    return sortOrder === 'ASC' ? firstValue - secondValue : secondValue - firstValue;
  });
}
