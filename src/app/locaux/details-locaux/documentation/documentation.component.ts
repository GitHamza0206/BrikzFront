import { ViewChild, OnDestroy, AfterViewInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Subject, merge, of } from 'rxjs';
import { startWith, takeUntil, tap, switchMap, catchError } from 'rxjs/operators';
import { addGedFilesComponent } from 'src/app/shared/_components/add-ged-files/add-ged-files.component';
import { Column, GenericDataSource } from 'src/app/shared/_components/generic-table/generic-table.model';
import { ViewPdfDialogComponent } from 'src/app/shared/_components/view-pdf-dialog/view-pdf-dialog.component';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit, OnDestroy, AfterViewInit {


  unSubscribe$ = new Subject();
  search$ = new Subject<void>();

  @ViewChild(MatPaginator, { static: false })
  paginator!: MatPaginator;

  isLoading = false;
  error: string | null = '';



   _dataDocumentation = [
    {
      "certificatPropriete" : false,
      "planCadastralRDC" : "Dispo",
      "planCadastralR1" : "NC ",
      "planCadastralSSOL" : "Dispo"
    },
    
    
  ];

  addged() {
    this.dialog
      .open(addGedFilesComponent, {})
      .afterClosed()
      .subscribe((res) => {
        if (res) {
        }
      });
  }

  downloadged() {
    console.log("downloading");
  }

  
  showDocument(){
    this.dialog
      .open(ViewPdfDialogComponent, { data: "https://www.usherbrooke.ca/biblio/fileadmin/sites/biblio/documents/pdf/protocoles_redaction/guide_redaction_gerontologie.pdf" , width:"80vw", height : "80vh" })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
        }
      });

  }


  


  dataSource: GenericDataSource<any> = { data: this._dataDocumentation, count: 1 };
  displayedColumns: string[] = [
    
    'planCadastralRDC',
    'planCadastralR1',
    'planCadastralSSOL',
    'certificatPropriete',
  
  ];

  goToDetails(row) {
    // ${row.id}
    this.router.navigateByUrl(`/shell/locaux/details/1`);
  }

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    merge(this.paginator.page, this.search$)
      .pipe(
        startWith([{ pageIndex: 0, pageSize: 100 }, {}]),
        takeUntil(this.unSubscribe$),
        tap(() => {
          this.isLoading = true;
          this.error = null;
          this.dataSource = { ...this.dataSource, data: this._dataDocumentation };
        }),
        switchMap(() =>
          of({ data: this._dataDocumentation, count: 1 }).pipe(
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




				
							




			


const documentation = [
  {
    columnDef: 'certificatPropriete',
    header: 'Certificat de propriété',
    selected: true,
    cell: (e) => e.certificatPropriete,
  },

  {
    columnDef: 'planCadastralRDC',
    header: 'Plan cadastral RDC',
    selected: true,
    cell: (e) => e.planCadastralRDC,
  },
  {
    columnDef: 'planCadastralR1',
    header: 'Plan cadastral R+1',
    selected: true,
    cell: (e) => e.planCadastralR1,
  },
  {
    columnDef: 'planCadastralSSOL',
    header: 'Plan cadastral SSOL',
    selected: true,
    cell: (e) => e.planCadastralSSOL,
  },

  
];



