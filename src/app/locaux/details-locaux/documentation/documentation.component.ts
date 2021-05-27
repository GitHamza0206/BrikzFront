import { Component, OnInit } from '@angular/core';
import { Column, GenericDataSource } from 'src/app/shared/_components/generic-table/generic-table.model';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {

  isLoading = false;
  error: string;
  dataSource: GenericDataSource<any> = { data: _dataDocumentation, count: 0 };
  columns: Column<any>[] = documentation;
  displayedColumns = [];
  constructor() {}

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

				
							



const _dataDocumentation = [
  {
    "certificatPropriete" : "Dispo",
    "planCadastralRDC" : "Dispo",
    "planCadastralR1" : "NC ",
    "planCadastralSSOL" : "Dispo"
  },
  {
    "certificatPropriete" : "Dispo",
    "planCadastralRDC" : "Dispo",
    "planCadastralR1" : "NC ",
    "planCadastralSSOL" : "Dispo"
  },
  {
    "certificatPropriete" : "Dispo",
    "planCadastralRDC" : "Dispo",
    "planCadastralR1" : "NC ",
    "planCadastralSSOL" : "Dispo"
  },
  {
    "certificatPropriete" : "Dispo",
    "planCadastralRDC" : "Dispo",
    "planCadastralR1" : "NC ",
    "planCadastralSSOL" : "Dispo"
  },
  {
    "certificatPropriete" : "Dispo",
    "planCadastralRDC" : "Dispo",
    "planCadastralR1" : "NC ",
    "planCadastralSSOL" : "Dispo"
  },
  {
    "certificatPropriete" : "Dispo",
    "planCadastralRDC" : "Dispo",
    "planCadastralR1" : "NC ",
    "planCadastralSSOL" : "Dispo"
  },
  {
    "certificatPropriete" : "Dispo",
    "planCadastralRDC" : "Dispo",
    "planCadastralR1" : "NC ",
    "planCadastralSSOL" : "Dispo"
  },
  
];

			


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



