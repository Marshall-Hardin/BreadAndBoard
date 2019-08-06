import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TriprowComponent } from './triprow.component';

describe('TriprowComponent', () => {
  let component: TriprowComponent;
  let fixture: ComponentFixture<TriprowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TriprowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TriprowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
