import { Component, OnInit, Input} from '@angular/core';
import { GuestsService } from '../services/guests.service';

@Component({
  selector: 'guests-view',
  templateUrl: './guests-view.component.html',
  styleUrls: ['./guests-view.component.scss']
})
export class GuestsViewComponent implements OnInit {


  constructor(public guestsService:GuestsService) { }

  ngOnInit(): void {

  }

  closeView(){
    this.guestsService.closeDetailView();
  }

}
