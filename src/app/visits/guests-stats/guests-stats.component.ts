import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'guests-stats',
  templateUrl: './guests-stats.component.html',
  styleUrls: ['./guests-stats.component.scss']
})
export class GuestsStatsComponent implements OnInit {

  data= []


  constructor() { }

  ngOnInit(): void {
    this.data = [
      {
        description: 'Semana',
        value: 10
      },
      {
        description: 'Este año',
        value: 50
      },
      {
        description: 'Últimos 365 dias',
        value: 70
      }
    ]
  }

}
