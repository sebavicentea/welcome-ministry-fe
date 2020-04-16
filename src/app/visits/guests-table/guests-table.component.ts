import { Component, OnInit } from '@angular/core';
import { GuestsService } from '../services/guests.service';

@Component({
  selector: 'app-guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.scss']
})
export class GuestsTableComponent implements OnInit {

  constructor(private guestsService: GuestsService) { }

  ngOnInit(): void {
    console.log("Loading GuestsTableComponent")
    this.guestsService.getAllGuests().subscribe((data) => {
      console.log(data);
    })
  }

}
