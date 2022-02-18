import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogInfoMobileComponent } from './dialog-info-mobile.component';

describe('DialogInfoMobileComponent', () => {
  let component: DialogInfoMobileComponent;
  let fixture: ComponentFixture<DialogInfoMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogInfoMobileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogInfoMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
