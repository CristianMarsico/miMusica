import { Component, OnInit } from '@angular/core';
import { Cds } from './Variables';

@Component({
  selector: 'app-lista-cds',
  templateUrl: './lista-cds.component.html',
  styleUrls: ['./lista-cds.component.scss']
})
export class ListaCdsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  general: Cds[] = [

    {
      titulo: 'dasdasdada',
      genero: 'Rock Nacional',
      anio: 2020,
      descripcion: 'jajajj',
      image: 'assets/img/.jpg',
      disponible: true,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 6,
      cantidad: 0
    },

    {
      titulo: 'adadadad',
      genero: 'Rock Nacional',
      anio: 2020,
      descripcion: 'adadasd',
      image: 'assets/img/.jpg',
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
      anio: 2022,
      descripcion: 'asdadad',
      image: 'assets/img/.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 6,
      cantidad: 0
    },

    {
      titulo: 'sdasdasda',
      genero: 'Rock Nacional',
      anio: 2020,
      descripcion: 'asdasdadsa',
      image: 'assets/img/.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 6,
      cantidad: 0
    },

    {
      titulo: 'sadadasd',
      genero: 'Rock Nacional',
      anio: 2020,
      descripcion: 'asdasdad',
      image: 'assets/img/.jpg',
      disponible: false,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 6,
      cantidad: 0
    }
  ];

}
