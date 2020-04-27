import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GuestsService } from '../services/guests.service';
import { FormGroup, FormControl, Validators, FormsModule, FormArray } from '@angular/forms';

@Component({
  selector: 'guests-view',
  templateUrl: './guests-view.component.html',
  styleUrls: ['./guests-view.component.scss']
})
export class GuestsViewComponent implements OnInit {

  @Input() set guestId(value) {
    this.existingGuest= !!value;
    this.getData(value)
  }
  @Output() closePanel= new EventEmitter();
  guestForm;
  guestData;

  today= new Date()
  existingGuest:boolean ;

  constructor(public guestsService:GuestsService) { }

  ngOnInit(): void {
  }

  private getData(guestId) {
    console.log('Open with',guestId);
    this.guestForm= null;
    if (guestId) {
      this.guestsService.getGuestsById(guestId).subscribe((data) => {
        this.guestData= data
        this.setForm(data);
        this.guestForm.disable();
      });
    }else {
      const initData= {
        name: '',
        lastname: '',
        age: null,
        phone_number: null,
        visit_date: new Date(),
        prayers: []
      }
      this.setForm(initData);
    }

  }

  private setForm(initData) {
    console.log(initData)
    const initPrayers= [];
    initData.prayers.forEach((prayer)=> {
      initPrayers.push(this.createPrayer(prayer));
    })
    initPrayers.push(this.createPrayer());

    this.guestForm = new FormGroup({
      name: new FormControl(initData.name, [Validators.required, Validators.maxLength(60)]),
      lastname: new FormControl(initData.lastname, [Validators.required, Validators.maxLength(60)]),
      phoneNumber: new FormControl(initData.phone_number, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      age: new FormControl(initData.age, [Validators.required, Validators.maxLength(3)]),
      dateOfVisit: new FormControl(new Date(initData.visit_date)),
      prayers: new FormArray(initPrayers)
    });
  }

  addNewPrayer() {
    this.guestForm.get('prayers').push(this.createPrayer())
  }

  private createPrayer(prayer?) {
    return new FormGroup({
      prayer_id: new FormControl(prayer ? prayer.id : null),
      description: new FormControl(prayer ? prayer.description : '')
    })
  }

  editForm() {
    this.guestForm.enable();
  }

  loadGuest() {
    if (this.guestForm.valid) {
      this.executeGuestCreation(this.guestForm.value);
    }
  }

  cancel(){
    this.closePanel.emit();
  }

  hasError = (controlName: string, errorName: string) =>{
    return this.guestForm.controls[controlName].hasError(errorName);
  }

  private executeGuestCreation(guest) {
    //Prevent empty prayers to be addedd
    guest.prayers= guest.prayers.filter((prayer)=> prayer.prayer_id || prayer.description.trim().length);
    console.log(guest);
    if (this.existingGuest) {

    }else {
      this.guestsService.addGuest(guest).subscribe(()=> {

      });
    }
  }

}
