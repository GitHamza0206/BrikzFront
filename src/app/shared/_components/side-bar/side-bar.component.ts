import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  pages: Page[] = [
    {
      icon: 'dashboard',
      name: 'Dashboard',
      route: 'dashboard',
      children: [],
    },
    {
      icon: 'maps_home_work',
      name: 'Locaux',
      route: '',
      children: [
        {
          icon: 'list',
          name: `Liste`,
          route: 'locaux/list',
          children: [],
        },
        {
          icon: 'search',
          name: 'Recherche',
          route: 'locaux/recherche',
          children: [],
        },
      ],
    },

    {
      icon: 'recent_actors',
      name: 'Candidature',
      route: 'Candidature',
      children: [],
    },

    {
      icon: 'room',
      name: 'Cartographie',
      route: 'Cartographie',
      children: [],
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
