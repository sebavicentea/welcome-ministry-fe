import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestsTableComponent } from './guests-table/guests-table.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home',
    component: GuestsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
