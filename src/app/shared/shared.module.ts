import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [UserInfoComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [UserInfoComponent]
})
export class SharedModule { }
