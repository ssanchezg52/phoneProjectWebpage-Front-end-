import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCardsPhonesComponent } from './body-cards-phones.component';

describe('BodyCardsPhonesComponent', () => {
  let component: BodyCardsPhonesComponent;
  let fixture: ComponentFixture<BodyCardsPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCardsPhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCardsPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
