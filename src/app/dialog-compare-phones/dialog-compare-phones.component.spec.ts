import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogComparePhonesComponent } from './dialog-compare-phones.component';

describe('DialogComparePhonesComponent', () => {
  let component: DialogComparePhonesComponent;
  let fixture: ComponentFixture<DialogComparePhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogComparePhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComparePhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
