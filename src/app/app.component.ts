import { Component } from '@angular/core';
import { HexModel } from './hexagon/Hex.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  hexagons = [];
  
  ngOnInit() {
    console.log('inited');
    this.createHexagons();
  }

  createHexagons() {
    let hexagonList = [];
    for (let i = 0; i < 36; i++) {
      let column = [];
      for (let j = 0; j < 12; j++) {
        column.push(new HexModel());
      }
      hexagonList.push(column);
    }
    this.hexagons = hexagonList;
    console.log('hexagons made');
  }
}
