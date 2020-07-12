import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})

export class AppLayoutComponent implements OnInit {

  @Input() showPanel: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
