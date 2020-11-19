import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './laPopular.component.html',
  styleUrls: ['./laPopular.component.scss']
})


export class laPopularComponent implements OnInit {

  beers: Beer[] = [ 
    {
    "name":"Negra Juerte",
    "type": "Porter",
    "price": 180,
    "stock": 0,
    "image":"assets/laPopular.jpg",
    "clearance" : false, 
    "quantity" : 0,
    },
    {
      "name":"Bitter",
      "type": "IPA",
      "price": 180,
      "stock": 5,
      "image":"assets/laPopular.jpg",
      "clearance" : false,
      "quantity" : 0,  
      },
      {
        "name":"Red",
        "type": "Barley wine",
        "price": 200,
        "stock": 3,
        "image":"assets/laPopular.jpg",
        "clearance" : true,  
        "quantity" : 0,
        },
      {
      "name":"Red",
      "type": "Barley wine",
      "price": 200,
      "stock": 3,
      "image":"assets/laPopular.jpg",
      "clearance" : false,
      "quantity" : 0,
      },   
  ];


  constructor() { }

  ngOnInit(): void {
  }

  maxReached(m:string) {
    alert(m);
  }

}
