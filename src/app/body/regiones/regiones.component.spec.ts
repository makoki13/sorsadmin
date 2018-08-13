import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionesComponent } from './regiones.component';

describe('RegionesComponent', () => {
  let component: RegionesComponent;
  let fixture: ComponentFixture<RegionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
