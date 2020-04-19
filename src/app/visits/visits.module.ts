import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestsTableComponent } from './guests-table/guests-table.component';
import { VisitsRoutingModule } from './visits-routing.module';
import { GuestsViewComponent } from './guests-view/guests-view.component';
import { VisitsContainerComponent } from './visits-container/visits-container.component';


@NgModule({
  imports: [
    CommonModule,
    VisitsRoutingModule
  ],
  declarations: [GuestsTableComponent, GuestsViewComponent, VisitsContainerComponent]
})
export class VisitsModule { }
