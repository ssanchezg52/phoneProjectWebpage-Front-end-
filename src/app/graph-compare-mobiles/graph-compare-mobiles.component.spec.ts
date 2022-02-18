import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCompareMobilesComponent } from './graph-compare-mobiles.component';

describe('GraphCompareMobilesComponent', () => {
  let component: GraphCompareMobilesComponent;
  let fixture: ComponentFixture<GraphCompareMobilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphCompareMobilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCompareMobilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
