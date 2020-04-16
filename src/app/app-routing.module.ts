import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/utils/auth.guard';
import { LoginComponent } from './core/login/login.component';
import { VisitsModule } from './visits/visits.module';


const routes: Routes = [
  { path: '',
    canActivate: [AuthGuard],
    loadChildren: () => VisitsModule
  },
  { path: 'login', component: LoginComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
