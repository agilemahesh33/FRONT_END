import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentDropDownComponent } from './dependent-drop-down.component';

describe('DependentDropDownComponent', () => {
  let component: DependentDropDownComponent;
  let fixture: ComponentFixture<DependentDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DependentDropDownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DependentDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
