import { Component, OnInit } from '@angular/core';
import { GuestsService } from '../services/guests.service';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-visits-container',
  templateUrl: './visits-container.component.html',
  styleUrls: ['./visits-container.component.scss']
})
export class VisitsContainerComponent implements OnInit {

  showGuestPanel: boolean;
  panelGuestId: number;
  private update: BehaviorSubject<void> = new BehaviorSubject(null)
  update$= this.update.asObservable();

  constructor(public guestsService: GuestsService) { }

  ngOnInit(): void {
  }

  addNewGuest() {
    this.openGuestPanel(null);
  }

  openGuestPanel(id: number) {
    this.showGuestPanel = true;
    this.panelGuestId= id;
  }

  closeGuestPanel() {
    this.showGuestPanel = false;
    this.panelGuestId= null;
  }

  guestUpdate() {
    this.update.next()
  }


}
