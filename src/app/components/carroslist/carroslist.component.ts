import { Component, inject } from '@angular/core';
import { Carro } from '../../models/carro';

@Component({
  selector: 'app-carroslist',
  imports: [],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.scss',
})
export class CarroslistComponent {

  lista: Carro[] = [];
  pesquisa: string ="";
  carroEdit: Carro;

  carroService = inject(CarroService);

  constructor(){
    
    let carro: Carro = new Carro();
    carro.id = 1;
    Carro.nome = 'fiesta';
    
  }

}
