import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NswitchComponent } from './nswitch.component';

describe('NswitchComponent', () => {
  let component: NswitchComponent;
  let fixture: ComponentFixture<NswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
