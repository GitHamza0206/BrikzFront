import { Circle } from 'ol/style';
import Map from 'ol/Map';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import View from 'ol/View';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import XyzSource from 'ol/source/XYZ';
import TileLayer from 'ol/layer/Tile';
    
import { fromLonLat } from 'ol/proj';
import { Component, OnInit } from '@angular/core';
import { ViewPdfDialogComponent } from 'src/app/shared/_components/view-pdf-dialog/view-pdf-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  {

  constructor(private dialog: MatDialog , private location: Location) { }
  marker = true;
  
  lat = 33.563407;
  lng = -7.653586;
  zoom = 14;

  marker_table : any[] = [{
    id : "1",
    name :  "local 1",
    lat : 33.563407,
    lng : -7.653586
  },
  {
    id : "2",
    name :  "local 2",
    lat : 33.581874,
    lng : -7.619337
  }
];

  position_data : any = {
    id : null,
    name :  null,
    lat : null,
    lng : null
  };


  getData(event){
    this.position_data = event;
    console.log(event);
  }

  goToDetails(){
    this.location.replace("/home");
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
  
  
  
  
}
