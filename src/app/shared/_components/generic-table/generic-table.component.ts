import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { Subject } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import {
  Column,
  GenericTableAction,
  GenericTableActionEvent,
  GenericDataSource
} from './generic-table.model';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>();
  @Input()
  columns: Column<any>[] = [];
  @Input()
  displayedColumns: string[] = [];
  @Input()
  primaryColumn: string;
  @Input()
  dataSource: GenericDataSource<any>;
  @Input()
  isLoading: boolean;
  @Input()
  error: any;
  selection = new SelectionModel<string>(true);
  @Output()
  selectionChange = new EventEmitter<string[]>();
  @Output()
  rowclick = new EventEmitter<any>();
  @Input()
  cursorPointer: boolean;
  @Input()
  actions: GenericTableAction[] = [];
  @Output()
  actionClicked = new EventEmitter<GenericTableActionEvent>();
  @Input()
  emptyMessage = "Pas d'élément.";

  // hasFooter = () => this.columns.some(c => typeof c.footer === 'function');

  constructor() {
    this.selection.changed
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(_ => this.selectionChange.emit(this.selection.selected));
  }

  ngOnInit() {}

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row =>
          this.selection.select(row[this.primaryColumn])
        );
  }

  onRowclick(row: any) {
    this.rowclick.emit(row);
  }

  actionClick(event: MouseEvent, row: any, actionDef: string) {
    event.stopPropagation();
    event.preventDefault();
    this.actionClicked.emit({ actionDef, row });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
