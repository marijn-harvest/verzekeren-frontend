import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoVerzekeringCreateComponent } from './auto-verzekering-create.component';

describe('AutoVerzekeringCreateComponent', () => {
  let component: AutoVerzekeringCreateComponent;
  let fixture: ComponentFixture<AutoVerzekeringCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoVerzekeringCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoVerzekeringCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
