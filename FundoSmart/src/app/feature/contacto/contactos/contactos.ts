import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelMercado } from "../../../shared/model-mercado/model-mercado/model-mercado";

@Component({
  selector: 'app-contactos',
  imports: [CommonModule, ModelMercado],  // <--- agregar aquí
  templateUrl: './contactos.html',
  styleUrls: ['./contactos.scss']
})
export class Contactos {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
