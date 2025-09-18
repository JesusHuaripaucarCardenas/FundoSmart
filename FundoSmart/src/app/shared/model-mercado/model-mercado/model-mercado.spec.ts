import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMercado } from './model-mercado';

describe('ModelMercado', () => {
  let component: ModelMercado;
  let fixture: ComponentFixture<ModelMercado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelMercado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelMercado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
