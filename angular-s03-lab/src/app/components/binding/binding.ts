import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  imports: [],
  templateUrl: './binding.html',
})
export class Binding {
  productoNombre = 'Laptop';
  seleccionado = true;

  selecciona():void {
    this.seleccionado = true;
  }
}
