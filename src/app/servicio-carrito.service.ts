import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cds } from './lista-cds/Variables';

@Injectable({
  providedIn: 'root'
})
export class ServicioCarritoService {

  @Injectable({
    providedIn: 'root'
  })

  general: Cds[] = [

    {
      titulo: 'dasdasdada',
      genero: 'Rock Nacional',
      autor: 'Soda Stereo',
      anio: 2020,
      descripcion: 'jajajj',
      image: 'assets/img/soda.jpg',
      disponible: true,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 0,
      cantidad: 0
    },

    {
      titulo: 'adadadad',
      genero: 'Rock I',
      autor: 'Soda Stereo',
      anio: 2020,
      descripcion: 'adadasd',
      image: 'assets/img/acdc.jpg',
      disponible: true,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 6,
      cantidad: 0
    },

    {
      titulo: 'sdadasdad',
      genero: 'Rock Nacional',
      autor: 'Soda Stereo',
      anio: 2022,
      descripcion: 'asdadad',
      image: 'assets/img/leo.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 6,
      cantidad: 0
    },

    {
      titulo: 'sdasdasda',
      genero: 'Latinos',
      autor: 'Soda Stereo',
      anio: 2020,
      descripcion: 'asdasdadsa',
      image: 'assets/img/mana.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 0,
      cantidad: 0
    },

    {
      titulo: 'sadadasd',
      genero: 'Reggae',
      autor: 'Soda Stereo',
      anio: 2020,
      descripcion: 'asdasdad',
      image: 'assets/img/losPericos.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 77,
      cantidad: 0
    }
  ];

  private _changuito: Cds[] = [];

  _total = 0;
  _contProductos = 0;

  arregloCds: BehaviorSubject<Cds[]> = new BehaviorSubject([]);
  total: BehaviorSubject<number> = new BehaviorSubject(this._total);
  cartQuantity: BehaviorSubject<number> = new BehaviorSubject(this._contProductos);
  constructor() { }

  agregar(cds: Cds) {
    const item: Cds = this._changuito.find((v1) => v1.genero == cds.genero);

    if (!item) {
      this._changuito.push({ ...cds });
      this._contProductos++;
    } else {
      item.cantidad += cds.cantidad;
    }
    this._total = this._changuito.reduce((a, c) => c.valor * c.cantidad + a, 0);

    this.arregloCds.next(this._changuito); //similar al emmit del evento
    this.cartQuantity.next(this._contProductos);
    this.total.next(this._total);
  }
  obtenerID(id: string) {
    console.log(this.general);
    return this.general[id];
  }




}
