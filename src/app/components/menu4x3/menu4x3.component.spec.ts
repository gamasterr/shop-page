import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menu4x3Component } from './menu4x3.component';

describe('Menu4x3Component', () => {
  let component: Menu4x3Component;
  let fixture: ComponentFixture<Menu4x3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu4x3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menu4x3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
