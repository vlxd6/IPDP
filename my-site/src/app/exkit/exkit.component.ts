import { Component } from '@angular/core';

@Component({
  selector: 'app-exkit',
  templateUrl: './exkit.component.html',
  styleUrl: './exkit.component.scss'
})

export class ExkitComponent {
  dataSource = list;
  displayedColumns: string[] = ['name', 'description']
}

export interface MYPARTS {
  name: string;
  description: string;
  imgsrc: string;
}

const list: MYPARTS[] = [
  {name: 'DC Sports Exhaust System', description: '18-22 Honda Accord', imgsrc: "assets/sportex.jpg"},
  {name: 'Sport exhaust half system', description: 'Nissan GT-R (R35)', imgsrc: "assets/sportex.jpg"}
];


