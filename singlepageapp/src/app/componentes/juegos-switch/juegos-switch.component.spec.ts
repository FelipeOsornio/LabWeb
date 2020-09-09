import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosSwitchComponent } from './juegos-switch.component';

describe('JuegosSwitchComponent', () => {
  let component: JuegosSwitchComponent;
  let fixture: ComponentFixture<JuegosSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
