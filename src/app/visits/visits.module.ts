import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestsTableComponent } from './guests-table/guests-table.component';
import { VisitsRoutingModule } from './visits-routing.module';


@NgModule({
  imports: [
    CommonModule,
    VisitsRoutingModule
  ],
  declarations: [GuestsTableComponent]
})
export class VisitsModule { }
