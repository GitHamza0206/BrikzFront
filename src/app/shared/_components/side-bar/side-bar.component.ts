import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  pages: Page[] = [
    {
      icon: 'view-dashboard-outline',
      name: 'Dashboard',
      route: 'dashboard',
      children: [],
    },
    {
      icon: 'car-electric',
      name: 'Locaux',
      route: '',
      children: [
        {
          icon: 'plus',
          name: `Liste`,
          route: 'locaux/liste',
          children: [],
        },
        {
          icon: 'car-electric',
          name: 'Recherche',
          route: 'locaux/recherche',
          children: [],
        },
      ],
    },

    {
      icon: 'car-electric',
      name: 'Candidature',
      route: '',
      children: [
        {
          icon: 'plus',
          name: `First child`,
          route: 'dashboard',
          children: [],
        },
        {
          icon: 'car-electric',
          name: 'secend child',
          route: 'dashboard',
          children: [],
        },
      ],
    },

    {
      icon: 'car-electric',
      name: 'Cartographie',
      route: '',
      children: [
        {
          icon: 'plus',
          name: `First child`,
          route: 'dashboard',
          children: [],
        },
        {
          icon: 'car-electric',
          name: 'secend child',
          route: 'dashboard',
          children: [],
        },
      ],
    },

  ];
  constructor() {}
  ngOnInit(): void {}
}
export interface Page {
  icon: string;
  name: string;
  route: string;
  disabled?: boolean;
  children?: Page[];
}
