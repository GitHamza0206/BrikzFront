import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-details-locaux',
  templateUrl: './details-locaux.component.html',
  styleUrls: ['./details-locaux.component.scss']
})
export class DetailsLocauxComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

}
