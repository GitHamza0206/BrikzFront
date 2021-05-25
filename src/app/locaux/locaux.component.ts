import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locaux',
  templateUrl: './locaux.component.html',
  styleUrls: ['./locaux.component.scss']
})
export class LocauxComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = [];

  constructor() { }

  ngOnInit(): void {
  }

}
