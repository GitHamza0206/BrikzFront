import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";


@Component({
  selector: 'app-details-locaux',
  templateUrl: './details-locaux.component.html',
  styleUrls: ['./details-locaux.component.scss']
})
export class DetailsLocauxComponent implements OnInit {
  infoDossier = infoDossier;
  data = {
    "att1" : "attribut1 ",
    "att2" : "2021-06-08T00:00:00"
  };

  rooting: any[] = [];
  
  constructor(private location: Location) {

   }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

  
  

}


export const infoDossier: any = {
  title: "Information Dossier",
  cols: 4,
  rows: 1,
  data: [
    {
      Libelle: "Référence compagnie",
      path: "",
      attribute: "att1",
      type: "text",
    },
    { Libelle: "Date O.M", path: "", attribute: "att2", type: "date" },
    
  ],
};