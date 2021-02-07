import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardEditorComponent } from './product-card-editor.component';

describe('ProductCardEditorComponent', () => {
  let component: ProductCardEditorComponent;
  let fixture: ComponentFixture<ProductCardEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductCardEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
