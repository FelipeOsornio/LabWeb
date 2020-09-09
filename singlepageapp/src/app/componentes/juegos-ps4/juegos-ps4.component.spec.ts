import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosPs4Component } from './juegos-ps4.component';

describe('JuegosPs4Component', () => {
  let component: JuegosPs4Component;
  let fixture: ComponentFixture<JuegosPs4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosPs4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosPs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
