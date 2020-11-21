import { Component, OnInit } from '@angular/core';
import { Cds } from './Variables';
import { Router } from '@angular/router';
import { ServicioCarritoService } from '../servicio-carrito.service';

@Component({
  selector: 'app-lista-cds',
  templateUrl: './lista-cds.component.html',
  styleUrls: ['./lista-cds.component.scss']
})
export class ListaCdsComponent implements OnInit {

  anio: number;
  
  
  constructor(private cart: ServicioCarritoService,private router: Router) {
    
    this.anio = new Date().getFullYear();
  
  }

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
  
  limite(c: number) {
    alert("no puede superar mas de "+c+" unidades");
  }
  
  agregar (general): void {
    console.log(general);
    if (general.cantidad != 0) {
      this.cart.agregar(general);
      general.stock -= general.cantidad;
      console.log(general.stock);
      general.cantidad = 0;
    } else {
      alert("ingrese una cantidad valida");
    }
  }

  verCd(id: number) {
    this.router.navigate(['/general', id]);
  }

  ngOnInit(): void {
  }

}
