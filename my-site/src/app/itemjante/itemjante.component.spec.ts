import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemJanteComponent } from './itemjante.component';

describe('ItemjanteComponent', () => {
  let component: ItemJanteComponent;
  let fixture: ComponentFixture<ItemJanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemJanteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ItemJanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
