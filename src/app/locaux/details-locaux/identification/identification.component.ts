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
  dataSource: GenericDataSource<any> = { data: _dataCaracteristiquePhysique, count: 0 };
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
        this.dataSource.data = _dataCaracteristiquePhysique;
        break;
      case 1:
        this.columns = surface;
        this.dataSource.data = _dataSurface;
        break;
      case 2:
        this.columns = dimensions;
        this.dataSource.data = _dataDimension;
        break;
      case 3:
        this.columns = fusionabilite;
        this.dataSource.data = _dataFusionabilite;
        //this.dataSource.count = 1;
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
    columnDef: 'chargeUtileDalle',
    header: 'Charge utile dalle',
    selected: true,
    cell: (e) => e.chargeUtileDalle,
  },

  {
    columnDef: 'chargeUtileDalleR1',
    header: 'Charge utile dalle R+1',
    selected: true,
    cell: (e) => e.chargeUtileDalleR1,
  },
  {
    columnDef: 'puissanceDispo',
    header: 'Puissance disponible (Kva)',
    selected: true,
    cell: (e) => e.puissanceDispo,
  },
  {
    columnDef: 'destinationImmeuble',
    header: "Destination de l'immeuble",
    selected: true,
    cell: (e) => e.destinationImmeuble,
  },
  {
    columnDef: 'gaineToiture',
    header: 'Gaine vers toiture',
    selected: true,
    cell: (e) => e.gaineToiture,
  },
  {
    columnDef: 'reservationGrosOeuvre',
    header: 'Réservation gros œuvres',
    selected: true,
    cell: (e) => e.reservationGrosOeuvre,
  },
  {
    columnDef: 'equipementConduit',
    header: 'RGO Equipement en conduits',
    selected: true,
    cell: (e) => e.equipementConduit,
  },
  {
    columnDef: 'disponibilite',
    header: 'RGO Disponibilité',
    selected: true,
    cell: (e) => e.disponibilite,
  },
  {
    columnDef: 'dimensions',
    header: 'RGO Dimensions',
    selected: true,
    cell: (e) => e.dimensions,
  },
  {
    columnDef: 'eenDisponibilite',
    header: 'EEN Disponibilite',
    selected: true,
    cell: (e) => e.eenDisponibilite,
  },{
    columnDef: 'eenDimensions',
    header: 'EEN Dimensions',
    selected: true,
    cell: (e) => e.eenDimensions,
  },
];



const _dataCaracteristiquePhysique = [
  {
    "chargeUtileDalle" : "Voir Attestation BET" ,
    "chargeUtileDalleR1" : "NC",
    "puissanceDispo" : "Voir développeur",
    "destinationImmeuble" : "Habitat",
    "gaineToiture" : "NC",
    "reservationGrosOeuvre" : "NC",
    "equipementConduit" : "NC" ,
    "disponibilite" : "NC" ,
    "dimensions" : "NC",
    "eenDisponibilite" : "NC",
    "eenDimensions" : "NC"
  },

  
];



const surface = [
  {
    columnDef: 'surfaceCadastraleRDC',
    header: 'Surface cadastrale RDC',
    selected: true,
    cell: (e) => e.surfaceCadastraleRDC,
  },

  {
    columnDef: 'surfaceCadastraleR1',
    header: 'Surface cadastrale R+1',
    selected: true,
    cell: (e) => e.surfaceCadastraleR1,
  },
  {
    columnDef: 'surfaceCadastraleRRDC',
    header: 'Surface cadastrale réserve RDC',
    selected: true,
    cell: (e) => e.surfaceCadastraleRRDC,
  },
  {
    columnDef: 'surfaceCadastraleRSS',
    header: 'Surface cadastrale réserve Sous Sol',
    selected: true,
    cell: (e) => e.surfaceCadastraleRSS,
  },
  {
    columnDef: 'surfaceCadastraleParking',
    header: '	Surface cadastrale Parking',
    selected: true,
    cell: (e) => e.surfaceCadastraleParking,
  },
  {
    columnDef: 'surfaceCadastraleTerrasse',
    header: 'Surface cadastrale Terrasse',
    selected: true,
    cell: (e) => e.surfaceCadastraleTerrasse,
  },
  {
    columnDef: 'accesParking',
    header: 'Accès direct au parking',
    selected: true,
    cell: (e) => e.accesParking,
  },
  {
    columnDef: 'nbPlaceParking',
    header: 'Nombre de places de parking',
    selected: true,
    cell: (e) => e.nbPlaceParking,
  },
  {
    columnDef: 'situationPlaceParking',
    header: 'Situation place parking dans les sous sols',
    selected: true,
    cell: (e) => e.situationPlaceParking,
  },

  {
    columnDef: 'numPlaceParking',
    header: 'Numéro des places de parking',
    selected: true,
    cell: (e) => e.numPlaceParking,
  },

  
];

const _dataSurface = [
  {
    "surfaceCadastraleRDC" : "168",
    "surfaceCadastraleR1" : "NC",
    "surfaceCadastraleRRDC" :"NC",
    "surfaceCadastraleRSS" : "NC ",
    "surfaceCadastraleParking" : "28",
    "surfaceCadastraleTerrasse" : "NC ",
    "accesParking" : "NC",
    "nbPlaceParking" : "manque plan",
    "situationPlaceParking" : "SS-1",
    "numPlaceParking" : "	PP7A"
  }
]

								


const dimensions = [
  {
    columnDef: 'hauteurSousDalle',
    header: 'Hauteur sous dalle',
    selected: true,
    cell: (e) => e.hauteurSousDalle,
  },

  {
    columnDef: 'profondeurMoy',
    header: 'Profondeur moyenne',
    selected: true,
    cell: (e) => e.profondeurMoy,
  },
  {
    columnDef: 'ratioDimLP',
    header: 'Ratio dimension L/P',
    selected: true,
    cell: (e) => e.ratioDimLP,
  },
  {
    columnDef: 'nbFacade',
    header: 'Nombre de façades',
    selected: true,
    cell: (e) => e.nbFacade,
  },
  {
    columnDef: 'totalLineaireFacade',
    header: 'Total linéaire de façade',
    selected: true,
    cell: (e) => e.totalLineaireFacade,
  },
  {
    columnDef: 'f1Loca',
    header: 'F1 Localisation',
    selected: true,
    cell: (e) => e.f1Loca,
  },
  {
    columnDef: 'f1Longeur',
    header: 'F1 Longueur',
    selected: true,
    cell: (e) => e.f1Longeur,
  },
  {
    columnDef: 'f1Hauteur',
    header: 'F1 Hauteur',
    selected: true,
    cell: (e) => e.f1Hauteur,
  },
  {
    columnDef: 'f1LargeurVoie',
    header: 'F1 Largeur voie',
    selected: true,
    cell: (e) => e.f1LargeurVoie,
  },
  {
    columnDef: 'f2Loca',
    header: 'F2 Localisation',
    selected: true,
    cell: (e) => e.f2Loca,
  },
  {
    columnDef: 'f2Longueur',
    header: 'F2 Longueur',
    selected: true,
    cell: (e) => e.f2Longueur,
  },
  {
    columnDef: 'f2Hauteur',
    header: 'F2 Hauteur',
    selected: true,
    cell: (e) => e.f2Hauteur,
  },
  {
    columnDef: 'f2LargeurVoie',
    header: 'F2 Largeur voie',
    selected: true,
    cell: (e) => e.f2LargeurVoie,
  },
  {
    columnDef: 'f3Loca',
    header: 'F3 Localisation',
    selected: true,
    cell: (e) => e.f3Loca,
  },
  {
    columnDef: 'f3Longueur',
    header: 'F3 Longueur',
    selected: true,
    cell: (e) => e.f3Longueur,
  },
  {
    columnDef: 'f3Hauteur',
    header: 'F3 Hauteur',
    selected: true,
    cell: (e) => e.f3Hauteur,
  },
  {
    columnDef: 'f3LargeurVoie',
    header: 'F3 Largeur voie',
    selected: true,
    cell: (e) => e.f3LargeurVoie,
  },

  {
    columnDef: 'longeurTerasse',
    header: 'Longeur terasse',
    selected: true,
    cell: (e) => e.longeurTerasse,
  },

  {
    columnDef: 'profondeurTerasse',
    header: 'Profondeur terasse',
    selected: true,
    cell: (e) => e.profondeurTerasse,
  }

  
];

const _dataDimension = [
  {
  
    "hauteurSousDalle" : "besoin visite" , 
    "profondeurMoy" : "16,5",
    "ratioDimLP" : "0,6",
    "nbFacade" : "1",
    "totalLineaireFacade" : "10,4",
    "f1Loca" : "Rue Anfa Club Sud",
    "f1Longeur" : "10,4",
    "f1Hauteur" : "besoin visite",
    "f1LargeurVoie" :"20",
    "f2Loca" : "NC",
    "f2Longueur" : "NC" ,
    "f2Hauteur" : "NC",
    "f2LargeurVoie" : "NC" ,
    "f3Loca" : "NC" ,
    "f3Longueur" : "NC" ,
    "f3Hauteur" : "NC" ,
    "f3LargeurVoie" : "NC" ,
    "longeurTerasse" : "NC" ,
    "profondeurTerasse" : "NC"
  }

];

const fusionabilite = [

  {
    columnDef: 'localGauche',
    header: 'Local à gauche (vu depuis la rue)',
    selected: true,
    cell: (e) => e.localGauche,
  },

  {
    columnDef: 'localConcerne',
    header: 'Local concerné',
    selected: true,
    cell: (e) => e.localConcerne,
  },
  {
    columnDef: 'localDroite',
    header: 'Local à droite (vu depuis la rue)',
    selected: true,
    cell: (e) => e.localDroite,
  },
];


const _dataFusionabilite = [
  {
    "localGauche" : "132-C05 ",
    "localConcerne" : "	132-C04",
    "localDroite" : "NC "
  },

  
];