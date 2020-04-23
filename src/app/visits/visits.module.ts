import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestsTableComponent } from './guests-table/guests-table.component';
import { VisitsRoutingModule } from './visits-routing.module';
import { GuestsViewComponent } from './guests-view/guests-view.component';
import { VisitsContainerComponent } from './visits-container/visits-container.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
  imports: [
    CommonModule,
    VisitsRoutingModule,
    MatTableModule,
    MatSortModule
  ],
  declarations: [GuestsTableComponent, GuestsViewComponent, VisitsContainerComponent]
})
export class VisitsModule { }
