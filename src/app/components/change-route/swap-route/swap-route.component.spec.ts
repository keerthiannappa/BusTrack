import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapRouteComponent } from './swap-route.component';

describe('SwapRouteComponent', () => {
  let component: SwapRouteComponent;
  let fixture: ComponentFixture<SwapRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
