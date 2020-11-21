import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicioCarritoService } from '../servicio-carrito.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {

  lista: any = {};

  constructor( private activatedRoute: ActivatedRoute, private _detallesServicio: ServicioCarritoService) { 
   
    this.activatedRoute.params.subscribe( params =>{   
      this.lista = this._detallesServicio.obtenerID(params ['id']);
      return console.log(this.lista);
    })
  }

  ngOnInit(): void {
  }

}
