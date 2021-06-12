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
      route: 'home',
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
      route: 'candidature',
      children: [
        {
          icon: 'list',
          name: `Formulaire`,
          route: 'candidature/formulaire',
          children: [],
        },
        {
          icon: 'search',
          name: 'Gestion candidat',
          route: 'candidature/gerer',
          children: [
            {
              icon: 'list',
              name: `Traité`,
              route: 'gestion/traite',
              children: [],
            },

          ],
        },
      ],
    },

    {
      icon: 'recent_actors',
      name: 'Gestion candidat',
      route: 'gestion',
      children: [
        {
          icon: 'list',
          name: `Traité`,
          route: 'gestion/traite',
          children: [],
        },

        {
          icon: 'list',
          name: `Nouveau`,
          route: 'gestion/nouveau',
          children: [],
        },
      ]
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
