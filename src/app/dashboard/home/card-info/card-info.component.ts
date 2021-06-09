import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss']
})
export class CardInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nav_position: string = 'start';

  onTogglePosition(position: string) {
    this.nav_position = position === 'start' ? 'end' : 'start';
    
  }

}
