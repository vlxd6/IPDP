import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExkitComponent } from './exkit.component';

describe('ExkitComponent', () => {
  let component: ExkitComponent;
  let fixture: ComponentFixture<ExkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExkitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
