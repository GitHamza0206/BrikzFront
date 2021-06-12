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
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ViewPdfDialogComponent } from 'src/app/shared/_components/view-pdf-dialog/view-pdf-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent  {
  @ViewChild('sideNav') sidenav: MatSidenav;
  constructor( 
    private router: Router,
    private dialog: MatDialog) { }
  marker = true;
  
  lat =33.566453;
  lng = -7.658458;
  zoom = 16;

  marker_table : any[] = [{
    id : "1",
    name :  "18-1-C01",
    lat : 33.566453,
    lng : -7.658458
  },
  {
    id : "2",
    name :  "18-1-C02",
    lat : 33.566342,
    lng : -7.658612
  },
  {
    id : "3",
    name :  "18-1-C03",
    lat : 33.566275,
    lng : -7.658730
  },
  {
    id : "4",
    name :  "18-1-C04",
    lat : 33.566679,
    lng : -7.660880
  },
  {
    id : "5",
    name :  "18-1-C05",
    lat : 33.566653735961,
    lng : -7.6610322851397
  },
  
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

  toggleSide(event){
      this.sidenav.toggle();

  }

  

  showDocument(){
    this.dialog
      .open(ViewPdfDialogComponent, { data: "assets/files/fiche-commerce.pdf" , width:"80vw", height : "80vh" })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
        }
      });

  }

  goToDetails(){
    console.log("cicked");
    this.router.navigateByUrl(`/shell/locaux/details/1`);

  }
  
  
  
  
}
