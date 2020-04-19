import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GuestsService } from '../services/guests.service';

@Component({
  selector: 'guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.scss']
})
export class GuestsTableComponent implements OnInit {


  data;



  constructor(private guestsService: GuestsService) { }

  ngOnInit(): void {
    console.log("Loading GuestsTableComponent")
    this.guestsService.getAllGuests().subscribe((data) => {
      this.data= data;
    })
  }

  openView(id: number) {
    this.guestsService.openDetailView(id);
  }

}
