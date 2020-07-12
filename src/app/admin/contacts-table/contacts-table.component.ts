import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'contacts-table',
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

  @Input()  refreshTable: Observable<void>;
  @Output() openDetail= new EventEmitter<number>();

  displayedColumns: string[] = ['name', 'lastname', 'status'];
  data;

  constructor() { }

  ngOnInit(): void {
  }

  openView(id: number) {
    this.openDetail.emit(id);
  }


}
