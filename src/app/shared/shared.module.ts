import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { MatCardModule } from '@angular/material/card';
import { AppLayoutComponent } from './app-layout/app-layout.component';

@NgModule({
  declarations: [UserInfoComponent, AppLayoutComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [UserInfoComponent, AppLayoutComponent]
})
export class SharedModule { }
