import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  initials;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.initials= this.authService.currentUserValue.name.charAt(0) +
      this.authService.currentUserValue.lastname.charAt(0);
  }

}
