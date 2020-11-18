import { Component, OnInit} from '@angular/core';
import { Cds } from '../lista-cds/Variables';


@Component({
  selector: 'app-input-mas-menos',
  templateUrl: './input-mas-menos.component.html',
  styleUrls: ['./input-mas-menos.component.scss']
})
export class InputMasMenosComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

 
  restar(general: Cds): void{
    if(general.cantidad > 0)
      general.cantidad--;
      
    
  }
  sumar(general: Cds): void{
    if(general.cantidad < general.stock)
      general.cantidad++;
  }
    

}



