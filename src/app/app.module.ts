import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { laPopularComponent } from './beer-list/laPopular.component';
import { LaPopularBeersComponent } from './la-popular-beers/la-popular-beers.component';
import { CartComponent } from './cart/cart.component';

import { FormsModule } from '@angular/forms';
import { InputIntegerComponent } from './input-integer/input-integer.component'


@NgModule({
  declarations: [
    AppComponent,
    laPopularComponent,
    LaPopularBeersComponent,
    CartComponent,
    InputIntegerComponent
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
