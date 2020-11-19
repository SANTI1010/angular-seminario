import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Beer } from './beer-list/Beer';

/**
 * Maneja la logica del carrito
 * 
 */


@Injectable({
  providedIn: 'root'
})
export class BeerCartService {
  private _cartList: Beer[] = []; //convierto la variable en privada, para poder usar el mismo nombre con el Behavior
  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject([]); //notifico a los que se suscriban al servicio. Es obse

  constructor() { }

  addToCart(beer: Beer) {
    let item: Beer = this._cartList.find((v1)=>v1.name == beer.name); //ve si hay alguna cerveza con el mismo nombre
    if(!item) { //si no hay una igual
      this._cartList.push({ ... beer}); //clono el objeto
    } else {
      item.quantity += beer.quantity;
    }
    
    console.log(this._cartList);
    this.cartList.next(this._cartList); //es como el emitt del evento
  }

  
}
