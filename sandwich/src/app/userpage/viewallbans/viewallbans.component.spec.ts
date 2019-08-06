import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallbansComponent } from './viewallbans.component';

describe('ViewallbansComponent', () => {
  let component: ViewallbansComponent;
  let fixture: ComponentFixture<ViewallbansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallbansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallbansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
