import { Component, OnInit } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})

export class BeerListComponent implements OnInit {

  beers: Beer[] = [ 
    {
    "name":"Negra Juerte",
    "type": "Porter",
    "price": 180,
    "stock": 0,
    "image":"assets/porter.jpeg",
    "clearance" : false, 
    },
    {
      "name":"Bitter",
      "type": "IPA",
      "price": 180,
      "stock": 5,
      "image":"assets/porter.jpeg",
      "clearance" : false,  
      },
      {
        "name":"Red",
        "type": "Barley wine",
        "price": 200,
        "stock": 3,
        "image":"assets/porter.jpeg",
        "clearance" : true,  
        },
      {
      "name":"Red",
      "type": "Barley wine",
      "price": 200,
      "stock": 3,
      "image":"assets/porter.jpeg",
      "clearance" : false,  
      },   
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
