import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartList$: Observable<Beer[]>;

  cartList: Beer[] = [];
  constructor(private cart: BeerCartService) { //recibe el cart por inyeccion 
    //me suscribo pidiendo al servicio
    this.cartList$ = cart.cartList.asObservable();

    //cart.cartList.subscribe((observable)=>this.cartList = observable);
  }

  ngOnInit(): void {
  }

}
