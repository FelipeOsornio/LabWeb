import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodbourneComponent } from './bloodbourne.component';

describe('BloodbourneComponent', () => {
  let component: BloodbourneComponent;
  let fixture: ComponentFixture<BloodbourneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloodbourneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodbourneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
