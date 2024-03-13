import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto9Component } from './proyecto9.component';

describe('Proyecto9Component', () => {
  let component: Proyecto9Component;
  let fixture: ComponentFixture<Proyecto9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyecto9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Proyecto9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
