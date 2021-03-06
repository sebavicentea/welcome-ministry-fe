import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestsTableComponent } from './guests-table/guests-table.component';
import { VisitsRoutingModule } from './visits-routing.module';
import { GuestsViewComponent } from './guests-view/guests-view.component';
import { VisitsContainerComponent } from './visits-container/visits-container.component';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { GuestsStatsComponent } from './guests-stats/guests-stats.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SharedModule } from '../shared/shared.module';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VisitsRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatPaginatorModule
  ],
  declarations: [GuestsTableComponent, GuestsViewComponent, VisitsContainerComponent, GuestsStatsComponent]
})
export class VisitsModule { }
