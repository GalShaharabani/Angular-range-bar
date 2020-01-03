import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfectSquareComponent } from './perfect-square.component';

describe('PerfectSquareComponent', () => {
  let component: PerfectSquareComponent;
  let fixture: ComponentFixture<PerfectSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfectSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfectSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
