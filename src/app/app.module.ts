import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaCdsComponent } from './lista-cds/lista-cds.component';
import { PrincipalComponent } from './principal/principal.component';
import { CarritoComponent } from './carrito/carrito.component';
import { FormsModule } from '@angular/forms';
import { InputMasMenosComponent } from './input-mas-menos/input-mas-menos.component';
import { DetallesComponent } from './detalles/detalles.component';

@NgModule({
 
  declarations: [
    AppComponent,
    ListaCdsComponent,
    PrincipalComponent,
    CarritoComponent,
    InputMasMenosComponent,
    DetallesComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
