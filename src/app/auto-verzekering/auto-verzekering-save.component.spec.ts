import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoVerzekeringSaveComponent } from './auto-verzekering-save.component';

describe('AutoVerzekeringSaveComponent', () => {
  let component: AutoVerzekeringSaveComponent;
  let fixture: ComponentFixture<AutoVerzekeringSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoVerzekeringSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoVerzekeringSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
