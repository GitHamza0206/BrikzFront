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
  paginator: MatPaginator;

  isLoading = false;
  error: string | null = '';

  dataSource: GenericDataSource<any> = { data: [], count: 0 };
  displayedColumns: string[] = [
    'DateCreation',
    'login',
    'raisonSocialExp',
    'numDossier',
    'numMission',
    'codeSociete',
    'raisonSocial',
    'tel',
    'adress',
    'email',
  ];

  constructor(private _snackBar: MatSnackBar, private dialog: MatDialog) {}
  ngOnInit(): void {}
  ngAfterViewInit(): void {
    merge(this.paginator.page, this.search$)
      .pipe(
        startWith([{ pageIndex: 0, pageSize: 100 }, {}]),
        takeUntil(this.unSubscribe$),
        tap(() => {
          this.isLoading = true;
          this.error = null;
          this.dataSource = { ...this.dataSource, data: [] };
        }),
        switchMap(() =>
          of({ data: [], count: 0 }).pipe(
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
