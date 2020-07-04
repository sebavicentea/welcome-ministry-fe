import { Component, OnInit, Output, EventEmitter, ViewChild, Input } from '@angular/core';
import { GuestsService } from '../services/guests.service';
import { MatSort, Sort } from '@angular/material/sort';
import { switchMap, startWith, tap } from 'rxjs/operators';
import { Pagination } from 'src/app/models/pagination';
import { SortFilter } from 'src/app/models/sortFilter';
import { ColumnOrder } from 'src/app/models/column-order.enum';
import { PageEvent } from '@angular/material/paginator';
import { BehaviorSubject, of, combineLatest, Observable } from 'rxjs';

@Component({
  selector: 'guests-table',
  templateUrl: './guests-table.component.html',
  styleUrls: ['./guests-table.component.scss']
})
export class GuestsTableComponent implements OnInit {

  @Input()  refreshTable: Observable<void>;
  @Output() openDetail= new EventEmitter<number>();

  displayedColumns: string[] = ['name', 'lastname', 'visit-date', 'status'];

  data;
  @ViewChild(MatSort) sort: MatSort;
  initPageInfo: Pagination;
  private pageTrigger$: BehaviorSubject<Pagination>

  count: number

  constructor(private guestsService: GuestsService) { }

  ngOnInit(): void {
    this.initPageInfo= {
      pageNumber: 0,
      pageSize: 10
    };

    this.count= this.initPageInfo.pageSize;

    this.pageTrigger$= new BehaviorSubject(this.initPageInfo);
  }

  ngAfterViewInit():void {
    const sortChange$= this.sort.sortChange.pipe(startWith({
      active: 'visit_date',
      direction: 'desc'
    }));

    combineLatest(sortChange$, this.pageTrigger$, this.refreshTable)
    .pipe(
      switchMap(([sort,page])=> {
        const params= {...sort, ...page}
        return this.guestsService.getAllGuests(params);
      })
    ).subscribe((resp)=> {
      this.data= resp.data;
      this.count= resp.total;
    })


  }

  openView(id: number) {
    this.openDetail.emit(id);
  }

  getPage(e: PageEvent) {
    console.log(e)
    this.pageTrigger$.next({
      pageNumber: e.pageIndex,
      pageSize: e.pageSize
    })
  }

}
