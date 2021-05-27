import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Subject, merge, of } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


import {
  startWith,
  takeUntil,
  tap,
  switchMap,
  catchError,
} from 'rxjs/operators';
import { GenericDataSource } from 'src/app/shared/helpers/shared-helpers';

@Component({
  selector: 'app-list-locaux',
  templateUrl: './list-locaux.component.html',
  styleUrls: ['./list-locaux.component.scss'],
})
export class ListLocauxComponent implements OnInit, AfterViewInit, OnDestroy {
  unSubscribe$ = new Subject();
  search$ = new Subject<void>();

  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;

  isLoading = false;
  error: string | null = '';

  _data = [
    {
    'codeRef' : "2",
    'nomLocal' : "3",
    'numTitreFoncierLocal' : "4",
    'numTitreFoncierMere' : "5",
    'tentiemeImmeuble' : "5",
    'tentiemeResidence' : "4",
    }
  ]

  dataSource: GenericDataSource<any> = { data: this._data, count: 1 };
  displayedColumns: string[] = [
    'codeRef',
    'nomLocal',
    'numTitreFoncierLocal',
    'numTitreFoncierMere',
    'tentiemeImmeuble',
    'tentiemeResidence',
  ];

  hey(){
    this.router.navigateByUrl('/shell/locaux/details/1');

  }

  constructor(private router: Router, private _snackBar: MatSnackBar, private dialog: MatDialog) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    merge(this.paginator.page, this.search$)
      .pipe(
        startWith([{ pageIndex: 0, pageSize: 100 }, {}]),
        takeUntil(this.unSubscribe$),
        tap(() => {
          this.isLoading = true;
          this.error = null;
          this.dataSource = { ...this.dataSource, data: this._data };
        }),
        switchMap(() =>
          of({ data: this._data, count: 1 }).pipe(
            catchError((err) => {
              this.isLoading = false;
              this.error = err?.error.message;
              return of(this.dataSource);
            })
          )
        )
      )
      .subscribe((res: GenericDataSource<any>) => {
        this.isLoading = false;
        this.dataSource.data = res?.data || [];
        this.dataSource.count = res?.count || 0;
      });
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
