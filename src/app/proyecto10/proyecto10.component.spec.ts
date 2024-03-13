import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto10Component } from './proyecto10.component';

describe('Proyecto10Component', () => {
  let component: Proyecto10Component;
  let fixture: ComponentFixture<Proyecto10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyecto10Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Proyecto10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
