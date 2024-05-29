import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jante',
  templateUrl: './jante.component.html',
  styleUrl: './jante.component.scss'
})
export class JanteComponent {
  constructor(
    private router: Router){
    }

  dataSource = list;
  displayedColumns: string[] = ['name', 'description'];

  goToJante(index : number){
    this.router.navigate(['itemjante/' + index])
  }
  
}

export interface MYPARTS {
  index: number;
  name: string;
  description: string;
  imgsrc: string;
}

const list: MYPARTS[] = [
  { index: 0, name: 'JNC Wheels', description: 'Purple, Gold Rivets', imgsrc: 'assets/purplewheels.jpg' },
  { index: 1, name: 'Enkei Wheels', description: 'Alloy Rim Rpf1', imgsrc: 'assets/enkei.jpg' },
  { index: 2, name: 'Forgestar Wheels', description: 'CF7S Grey Alloy', imgsrc: 'assets/forgestar.jpg' },
  { index: 3, name: 'Dcenti Wheels', description: 'STW457 Pneumatic', imgsrc: 'assets/guang.jpg' },
  { index: 4, name: 'AVID1 Wheels', description: 'AV06 Racing Gold', imgsrc: 'assets/golden.jpg' },
  { index: 5, name: 'ESR Wheels', description: 'CS8 Gloss White', imgsrc: 'assets/white.jpg' }
];