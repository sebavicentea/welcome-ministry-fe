import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ContactsTableComponent } from './contacts-table/contacts-table.component';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [AdminContainerComponent, ContactsTableComponent, ContactsViewComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    MatCardModule
  ]
})
export class AdminModule { }
