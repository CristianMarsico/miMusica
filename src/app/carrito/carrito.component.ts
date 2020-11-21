import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Cds } from '../lista-cds/Variables';
import { ServicioCarritoService } from '../servicio-carrito.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  arregloCds: Cds[] = [];
  arregloCds$: Observable<Cds[]>;
  total$: Observable<number>;

  constructor(private cart: ServicioCarritoService) {

    this.arregloCds$ = cart.arregloCds.asObservable();
    cart.arregloCds.subscribe(c => this.arregloCds = c);
    this.total$ = cart.total.asObservable();

  }

  ngOnInit(): void {
  }

}
