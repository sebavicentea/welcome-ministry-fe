import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-admin-container',
  templateUrl: './admin-container.component.html',
  styleUrls: ['./admin-container.component.scss']
})
export class AdminContainerComponent implements OnInit {

  showPanel: boolean;
  private update: BehaviorSubject<void> = new BehaviorSubject(null)
  update$= this.update.asObservable();

  constructor() { }

  ngOnInit(): void {
  }

  addNewContact() {

  }

  openPanel(e) {

  }
}
