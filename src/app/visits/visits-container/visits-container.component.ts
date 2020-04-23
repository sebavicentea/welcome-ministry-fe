import { Component, OnInit } from '@angular/core';
import { GuestsService } from '../services/guests.service';

@Component({
  selector: 'app-visits-container',
  templateUrl: './visits-container.component.html',
  styleUrls: ['./visits-container.component.scss']
})
export class VisitsContainerComponent implements OnInit {


  constructor(public guestsService: GuestsService) { }

  ngOnInit(): void {
  }

  addNewGuest() {
    this.guestsService.openNewGuestForm();
  }


}
