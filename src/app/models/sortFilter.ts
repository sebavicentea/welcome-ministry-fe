import { ColumnOrder } from './column-order.enum';

export interface SortFilter {
  column: string;
  order: ColumnOrder;
}
