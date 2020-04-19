import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitsContainerComponent } from './visits-container.component';

describe('VisitsContainerComponent', () => {
  let component: VisitsContainerComponent;
  let fixture: ComponentFixture<VisitsContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitsContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
