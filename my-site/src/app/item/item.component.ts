import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{
   index = 3;
   dataSource = list[1];
    constructor(
    private activateRoute: ActivatedRoute) {
  }



  ngOnInit(): void {
      this.activateRoute.params.subscribe((param) => {


        this.index = param['indexid'];
        this.dataSource= list[this.index];


      })
  }
  
}
export interface MYPARTS {
  name: string;
  description: string;
  imgsrc: string;
  material: string;
  diameter: string;
  length: string;
  price: number;
  rate: number;


}
const list: MYPARTS[] = [
  { name: 'DC Sports Exhaust System', description: '18-22 Honda Accord', imgsrc: 'assets/sportex.jpg', material:'GI', diameter:'400mm', length:'1500mm x 400mm', price: 1249.99, rate: 150},
  { name: 'Sport Exhaust Half System', description: 'Nissan GT-R (R35)', imgsrc: 'assets/gtrex.png', material:'Titanium', diameter:'450mm', length:'1000mm x 500mm', price: 1499, rate: 200},
  { name: 'Sport Muffler Double System', description: 'Infiniti Q50', imgsrc: 'assets/infiniti.jpg', material:'Stainless Steel', diameter:'500mm', length:'1300mm x 300mm', price: 1300, rate: 125},
  { name: 'DC Sports Catback Exhaust System', description: 'Integra Type R DC2', imgsrc: 'assets/typer.jpg', material:'Steel', diameter:'350mm', length:'1450mm x 450mm', price: 1450, rate: 170},
  { name: 'DC Sports Catback Single Exhaust', description: '15-21 Subaru WRX/STI', imgsrc: 'assets/subaru.jpg', material:'Alloy', diameter:'480', length:'1350mm x 400mm', price: 1800, rate: 300},
  { name: 'Cobra Sport Catback Exhaust System', description: '99-06 Toyota Celica T23', imgsrc: 'assets/toyota.jpg', material:'Nickel', diameter:'420', length:'1500mm x 500mm', price: 1999, rate: 350}
];


