import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ACrossingComponent } from './a-crossing.component';

describe('ACrossingComponent', () => {
  let component: ACrossingComponent;
  let fixture: ComponentFixture<ACrossingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ACrossingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ACrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
