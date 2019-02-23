import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeRouteComponent } from './merge-route.component';

describe('MergeRouteComponent', () => {
  let component: MergeRouteComponent;
  let fixture: ComponentFixture<MergeRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MergeRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MergeRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
