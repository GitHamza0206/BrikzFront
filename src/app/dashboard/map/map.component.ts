import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import * as olProj from 'ol/proj';
import Feature from 'ol/Feature';

import { Map, View } from 'ol';
import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
import { XYZ, Vector as VectorSource } from 'ol/source';
import { Style, Fill, Stroke, Circle } from 'ol/style';
import { GeoJSON } from 'ol/format';
import { click, singleClick } from 'ol/events/condition';
import Select from 'ol/interaction/Select';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }
  
  
  map: Map;
  vectorSource: VectorSource = new VectorSource();

  circleFeature : Feature;
  
  
 

  ngOnInit() {
    
    
    this.map = new Map({
      target: 'map',
      layers: [
        
        new TileLayer({
          source: new XYZ({ url: 'https://{a-c}.tile.osm.org/{z}/{x}/{y}.png' })
        }),
        new VectorLayer({
          url: 'https://openlayers.org/en/latest/examples/data/geojson/countries.geojson',
          format: new GeoJSON(),
          
        })
      ],
      view: new View({
        center: olProj.fromLonLat([ -7.619132,33.578785]),
        zoom: 15
      })
    });

   

  }
  

}
