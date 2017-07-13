import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionTypeComponent } from './position-type.component';

describe('PositionTypeComponent', () => {
  let component: PositionTypeComponent;
  let fixture: ComponentFixture<PositionTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
