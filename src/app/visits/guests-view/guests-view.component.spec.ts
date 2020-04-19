import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsViewComponent } from './guests-view.component';

describe('GuestsViewComponent', () => {
  let component: GuestsViewComponent;
  let fixture: ComponentFixture<GuestsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
