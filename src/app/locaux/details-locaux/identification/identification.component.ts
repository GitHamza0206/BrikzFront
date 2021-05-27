import { Component, OnInit } from '@angular/core';
import {
  Column,
  GenericDataSource,
} from 'src/app/shared/_components/generic-table/generic-table.model';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss'],
})
export class IdentificationComponent implements OnInit {
  isLoading = false;
  error: string;
  dataSource: GenericDataSource<any> = { data: [], count: 0 };
  columns: Column<any>[] = CarateristiquePhysique;
  displayedColumns = [];
  constructor() {}

  ngOnInit(): void {
    this.buildColumns();
  }
  tabChangedHandler(event) {
    console.log(event);
    switch (event.index) {
      case 0:
        this.columns = CarateristiquePhysique;
        break;
      case 1:
        this.columns = surface;
        break;
      case 2:
        break;
      case 3:
        break;
    }

    this.buildColumns();
  }
  private buildColumns() {
    this.displayedColumns = this.columns
      .filter((c) => c.selected)
      .map((e) => e.columnDef);
  }
}

const CarateristiquePhysique = [
  {
    columnDef: 'typeMisssion',
    header: 'Type Misssion',
    selected: true,
    cell: (e) => e.typeMisssion,
  },

  {
    columnDef: 'intermediaire',
    header: 'Intermediaire',
    selected: true,
    cell: (e) => e.intermediaire,
  },
  {
    columnDef: 'assuré',
    header: 'Assuré',
    selected: true,
    cell: (e) => e.assuré,
  },
  {
    columnDef: 'nPolice',
    header: 'N Police',
    selected: true,
    cell: (e) => e.nPolice,
  },
  {
    columnDef: 'nSinistre',
    header: 'N Sinistre',
    selected: true,
    cell: (e) => e.nSinistre,
  },
  {
    columnDef: 'garantieTouchee',
    header: 'Garantie Touchee',
    selected: true,
    cell: (e) => e.garantieTouchee,
  },
  {
    columnDef: 'motifRejet',
    header: 'Motif Rejet',
    selected: true,
    cell: (e) => e.motifRejet,
  },
  {
    columnDef: 'modeDeReglement',
    header: 'Mode De Reglement',
    selected: true,
    cell: (e) => e.modeDeReglement,
  },
  {
    columnDef: 'noteHonorairePublié',
    header: 'Note Honoraire Publié',
    selected: true,
    cell: (e) => e.noteHonorairePublié,
  },
];

const surface = [
  {
    columnDef: 'typeMisssion',
    header: 'Type Misssion',
    selected: true,
    cell: (e) => e.typeMisssion,
  },

  {
    columnDef: 'intermediaire',
    header: 'Intermediaire',
    selected: true,
    cell: (e) => e.intermediaire,
  },
  {
    columnDef: 'assuré',
    header: 'Assuré',
    selected: true,
    cell: (e) => e.assuré,
  },
  {
    columnDef: 'nPolice',
    header: 'N Police',
    selected: true,
    cell: (e) => e.nPolice,
  },
  {
    columnDef: 'nSinistre',
    header: 'N Sinistre',
    selected: true,
    cell: (e) => e.nSinistre,
  },
  {
    columnDef: 'garantieTouchee',
    header: 'Garantie Touchee',
    selected: true,
    cell: (e) => e.garantieTouchee,
  },
  {
    columnDef: 'motifRejet',
    header: 'Motif Rejet',
    selected: true,
    cell: (e) => e.motifRejet,
  },
  {
    columnDef: 'modeDeReglement',
    header: 'Mode De Reglement',
    selected: true,
    cell: (e) => e.modeDeReglement,
  },
  {
    columnDef: 'noteHonorairePublié',
    header: 'Note Honoraire Publié',
    selected: true,
    cell: (e) => e.noteHonorairePublié,
  },
];
