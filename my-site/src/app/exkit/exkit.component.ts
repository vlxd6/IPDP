import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exkit',
  templateUrl: './exkit.component.html',
  styleUrls: ['./exkit.component.scss']
})
export class ExkitComponent {
    constructor(
      private router: Router){
      }

    dataSource = list;
    displayedColumns: string[] = ['name', 'description'];

    goToExkit(index : number){
      this.router.navigate(['item/' + index])
    }
    
}

export interface MYPARTS {
  index: number;
  name: string;
  description: string;
  imgsrc: string;
}

const list: MYPARTS[] = [
  { index: 0, name: 'DC Sports Exhaust System', description: '18-22 Honda Accord', imgsrc: 'assets/sportex.jpg' },
  { index: 1, name: 'Sport Exhaust Half System', description: 'Nissan GT-R (R35)', imgsrc: 'assets/gtrex.png' },
  { index: 2, name: 'Sport Muffler Double System', description: 'Infiniti Q50', imgsrc: 'assets/infiniti.jpg' },
  { index: 3, name: 'DC Sports Catback Exhaust System', description: 'Integra Type R DC2', imgsrc: 'assets/typer.jpg' },
  { index: 4, name: 'DC Sports Catback Single Exhaust', description: '15-21 Subaru WRX/STI', imgsrc: 'assets/subaru.jpg' },
  { index: 5, name: 'Cobra Sport Catback Exhaust System', description: '99-06 Toyota Celica T23', imgsrc: 'assets/toyota.jpg' }
];
