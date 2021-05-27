export class Column<T> {
  header: string;
  columnDef: string;
  cell: (element: T) => string;
  footer?: (element: T) => string;
  selected?: boolean;
}

export interface GenericTableAction {
  actionDef: string;
  title: string;
  icon?: string;
  color?: string;
  tooltip?: string;
}

export interface GenericTableActionEvent {
  actionDef: string;
  row: any;
}

export interface GenericDataSource<T> {
  data: T[];
  count: number;
}
