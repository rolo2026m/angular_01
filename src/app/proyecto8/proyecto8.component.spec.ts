import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyecto8Component } from './proyecto8.component';

describe('Proyecto8Component', () => {
  let component: Proyecto8Component;
  let fixture: ComponentFixture<Proyecto8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Proyecto8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Proyecto8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
