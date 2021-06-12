import { Column, GenericDataSource } from './../../shared/_components/generic-table/generic-table.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-candidat',
  templateUrl: './gestion-candidat.component.html',
  styleUrls: ['./gestion-candidat.component.scss']
})
export class GestionCandidatComponent implements OnInit {

  constructor() { }

  

  isLoading = false;
  error: string;
  dataSource: GenericDataSource<any> = { data: _dataCandidat, count: 0 };
  columns: Column<any>[] = candidat;
  displayedColumns = [];

  ngOnInit(): void {
    this.buildColumns();
  }
  tabChangedHandler(event) {
    console.log(event);
    

    this.buildColumns();
  }
  private buildColumns() {
    this.displayedColumns = this.columns
      .filter((c) => c.selected)
      .map((e) => e.columnDef);
  }
}
const _dataCandidat = [
  {
    "nomCandidat" : " Omar",
    "tel" : "+212661000000",
    "email" : "omar@gmail.com",
    "ville" : "casablanca",
    "adresse" : "boulevard ghandi "

  },
  {
    "nomCandidat" : " othmane",
    "tel" : "+21266111111",
    "email" : "othmane@gmail.com",
    "ville" : "casablanca",
    "adresse" : "boulevard sidi abdrehmane "

  },
 
  
];

			


const candidat = [
  {
    columnDef: 'nomCandidat',
    header: 'Candidat',
    selected: true,
    cell: (e) => e.nomCandidat,
  },

  {
    columnDef: 'tel',
    header: 'tel',
    selected: true,
    cell: (e) => e.tel,
  },
  {
    columnDef: 'email',
    header: 'email',
    selected: true,
    cell: (e) => e.email,
  },
  {
    columnDef: 'ville',
    header: 'ville',
    selected: true,
    cell: (e) => e.ville,
  },
  
  {
    columnDef: 'adresse',
    header: 'adresse',
    selected: true,
    cell: (e) => e.adresse,
  },

  
];


