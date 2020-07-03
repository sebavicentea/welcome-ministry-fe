import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { GuestsService } from '../services/guests.service';
import { MatSort } from '@angular/material/sort';
import { switchMap, startWith } from 'rxjs/operators';
import { Pagination } from 'src/app/models/pagination';
import { SortFilter } from 'src/app/models/sortFilter';
import { ColumnOrder } from 'src/app/models/column-order.enum';

@Component({
  selector: 'guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.scss']
})
export class GuestsTableComponent implements OnInit {

  @Output() openDetail= new EventEmitter<number>();

  displayedColumns: string[] = ['name', 'lastname', 'visit-date', 'status'];

  data;
  @ViewChild(MatSort) sort: MatSort;
  private pageInfo: Pagination;
  private sortFilter: SortFilter;

  constructor(private guestsService: GuestsService) { }

  ngOnInit(): void {
    this.pageInfo= new Pagination(10);

  }

  ngAfterViewInit():void {
    this.sort.sortChange.pipe(
      startWith({}),
      switchMap(()=> {
        this.sortFilter= {
          column: this.sort.active,
          order: this.sort.direction === 'asc' ? ColumnOrder.ASC : ColumnOrder.DESC
        }
        const params= {...this.pageInfo.getValue(), ...this.sortFilter}

        console.log(this.sort.active, this.sort.direction);
        return this.guestsService.getAllGuests(params);
      })
    ).subscribe((data)=> {
      this.data= data;
    })


  }

  openView(id: number) {
    this.openDetail.emit(id);
  }

}
