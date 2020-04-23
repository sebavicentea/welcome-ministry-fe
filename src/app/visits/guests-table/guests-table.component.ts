import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { GuestsService } from '../services/guests.service';
import { MatSort } from '@angular/material/sort';
import { switchMap, startWith } from 'rxjs/operators';

@Component({
  selector: 'guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.scss']
})
export class GuestsTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastname', 'visit_date'];

  data;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private guestsService: GuestsService) { }

  ngOnInit(): void {



  }

  ngAfterViewInit():void {
    this.sort.sortChange.pipe(
      startWith({}),
      switchMap(()=> {
        console.log(this.sort.active, this.sort.direction);
        return this.guestsService.getAllGuests();
      })
    ).subscribe((data)=> {
      this.data= data;
    })


  }

  openView(id: number) {
    this.guestsService.openDetailView(id);
  }

}
