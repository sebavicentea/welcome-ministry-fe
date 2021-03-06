import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitsContainerComponent } from './visits-container/visits-container.component';

const routes: Routes = [
  { path: '',
    component: VisitsContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitsRoutingModule { }
