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
      titulo: 'Cuando pase el temblor',
      genero: 'Rock Nacional',
      autor: 'Soda Stereo',
      anio: 1985,
      descripcion: 'Cuando pase el temblor, la que se volvería la canción que más veces interpretaría en vivo la banda de Gustavo Cerati, fue inmediatamente interpretada como un tema inspirado en la tragedia que sucedió en la capital mexicana apenas un mes y medio antes del lanzamiento.',
      image: 'assets/img/soda.jpg',
      disponible: true,
      gusta: 0.9,
      dia: 12,
      valor: 200,
      stock: 0,
      cantidad: 0
    },

    {
      titulo: 'High well to hell',
      genero: 'Rock Internacional',
      autor: 'Soda Stereo',
      anio: 1979,
      descripcion: '<Highway to Hell> (en español: «Autopista al infierno») es una canción de la banda australiana de hard rock, AC/DC. Es la canción inicial del álbum del mismo nombre y que salió al mercado en 1979 y la duodécima canción del álbum recopilatorio AC/DC Live.',
      image: 'assets/img/acdc.jpg',
      disponible: true,
      gusta: 0.9,
      dia: 12,
      valor: 399,
      stock: 5,
      cantidad: 0
    },

    {
      titulo: 'El señor del amor',
      genero: 'Cumbia',
      autor: 'Leo Mattioli',
      anio: 2022,
      descripcion: 'no encontrada',
      image: 'assets/img/leo.jpg',
      disponible: false,
      gusta: 0.6,
      dia: 12,
      valor: 200,
      stock: 6,
      cantidad: 0
    },

    {
      titulo: 'Cuando los angeles lloran',
      genero: 'Latinos',
      autor: 'Maná',
      anio: 1995,
      descripcion: 'Cuando los ángeles lloran es un material discográfico del grupo de rock mexicano Maná publicado en 1995',
      image: 'assets/img/mana.jpg',
      disponible: false,
      gusta: 0.6,
      dia: 12,
      valor: 299,
      stock: 8,
      cantidad: 0
    },

    {
      titulo: '1000 vivos',
      genero: 'Reggae',
      autor: 'Soda Stereo',
      anio: 2020,
      descripcion: '1000 Vivos es un álbum en vivo de la banda de reggae argentina Los Pericos. Las pistas provienen de un concierto de 1997 en Buenos Aires',
      image: 'assets/img/losPericos.jpg',
      disponible: false,
      gusta: 0.7,
      dia: 12,
      valor: 200,
      stock: 3,
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
