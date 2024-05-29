import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itemjante',
  templateUrl: './itemjante.component.html',
  styleUrl: './itemjante.component.scss'
})

export class ItemJanteComponent implements OnInit{
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
  imgsrc: string;
  material: string;
  diameter: string;
  rimwidth: string;
  price: number;
  rate: number;


}
const list: MYPARTS[] = [
  { name: 'JNC Wheels', imgsrc: 'assets/purplewheels.jpg', material:'Alloy', diameter:'14 inches', rimwidth:'8.5 inches', price: 600, rate: 50},
  { name: 'Enkei Wheels', imgsrc: 'assets/enkei.jpg', material:'Titanium', diameter:'17 inches', rimwidth:'8 inches', price: 799, rate: 80},
  { name: 'Forgestar Wheels', imgsrc: 'assets/forgestar.jpg', material:'Alloy', diameter:'19 inches', rimwidth:'9.3 inches', price: 849, rate: 90},
  { name: 'Dcenti Wheels', imgsrc: 'assets/guang.jpg', material:'Steel', diameter:'20 inches', rimwidth:'8.2 inches', price: 800, rate: 75},
  { name: 'AVID1 Wheels', imgsrc: 'assets/golden.jpg', material:'Alloy', diameter:'18 inches', rimwidth:'8.5 inches', price: 699, rate: 55},
  { name: 'ESR Wheels', imgsrc: 'assets/white.jpg', material:'Nickel', diameter:'18 inches', rimwidth:'9 inches', price: 750, rate: 80}
];