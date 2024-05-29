import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanteComponent } from './jante.component';

describe('JanteComponent', () => {
  let component: JanteComponent;
  let fixture: ComponentFixture<JanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
