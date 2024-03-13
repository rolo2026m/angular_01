import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto11Component } from './proyecto11.component';

describe('Proyecto11Component', () => {
  let component: Proyecto11Component;
  let fixture: ComponentFixture<Proyecto11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyecto11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Proyecto11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
