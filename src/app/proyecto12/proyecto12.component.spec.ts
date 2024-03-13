import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto12Component } from './proyecto12.component';

describe('Proyecto12Component', () => {
  let component: Proyecto12Component;
  let fixture: ComponentFixture<Proyecto12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyecto12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Proyecto12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
