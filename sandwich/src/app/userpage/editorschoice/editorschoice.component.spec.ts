import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorschoiceComponent } from './editorschoice.component';

describe('EditorschoiceComponent', () => {
  let component: EditorschoiceComponent;
  let fixture: ComponentFixture<EditorschoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorschoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorschoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
