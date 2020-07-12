import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/utils/auth.guard';
import { LoginComponent } from './core/login/login.component';
import { VisitsModule } from './visits/visits.module';
import { AdminModule } from './admin/admin.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => VisitsModule },
  { path: 'admin', canActivate: [AuthGuard], loadChildren: () => AdminModule },
  // otherwise redirect to home
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
