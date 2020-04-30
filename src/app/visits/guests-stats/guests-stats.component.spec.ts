import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestsStatsComponent } from './guests-stats.component';

describe('GuestsStatsComponent', () => {
  let component: GuestsStatsComponent;
  let fixture: ComponentFixture<GuestsStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestsStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestsStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
