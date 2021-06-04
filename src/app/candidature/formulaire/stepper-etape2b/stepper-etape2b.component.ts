import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { saveAs } from 'file-saver';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
 interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: '132-C04',
    children: [
      {name: 'Apple'},
      
    ]
  }, {
    name: '132-C03',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
        ]
      },
    ]
  },
];

export interface PeriodicElement {
  position: number;
  nom_local: string;
  num_titre_foncier: string;
  surface_cadastrale_RDC : string;


}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1,  nom_local: "ryad anfa", num_titre_foncier: '56228/64' , surface_cadastrale_RDC : "100"},
  
];


/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-stepper-etape2b',
  templateUrl: './stepper-etape2b.component.html',
  styleUrls: ['./stepper-etape2b.component.scss']
})
export class StepperEtape2bComponent implements OnInit {
  
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }
  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'nom_local', 'num_titre_foncier', 'surface_cadastrale_RDC'];
  dataSource2 = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource2.sort = this.sort;
  }

  downloadged() {
    
      const pdfUrl = './assets/files/file1.pdf';
      const pdfName = 'plan cadastral';
      saveAs(pdfUrl, pdfName);
    
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  
}
