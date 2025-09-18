import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSupermercado } from './model-supermercado';

describe('ModelSupermercado', () => {
  let component: ModelSupermercado;
  let fixture: ComponentFixture<ModelSupermercado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelSupermercado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelSupermercado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
