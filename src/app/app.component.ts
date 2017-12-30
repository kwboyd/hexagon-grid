import { Component } from '@angular/core';
import { HexModel } from './hexagon/Hex.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  hexagons: HexModel[] = [];
  
  ngOnInit() {
    console.log('inited');
    this.createHexagons();
  }

  createHexagons() {
    let hexagonList = [];
    for (let i = 0; i < 36; i++) {
      let column = [];
      for (let j = 0; j < 12; j++) {
        column.push(new HexModel(i, j));
      }
      hexagonList.push(column);
    }
    this.hexagons = hexagonList;
    console.log('hexagons made');
  }

  ripple(hexagon) {
    hexagon.setStart();
    let row = hexagon.row;
    let column = hexagon.column;
    let offset = row + 1;
    if (column % 2 === 0) offset = row - 1;
    let currentColumn = this.hexagons[column];
    let columnLeft = this.hexagons[column+1];
    let columnRight = this.hexagons[column-1];

    if (currentColumn[row+1]) currentColumn[row+1].startSecond();
    if (currentColumn[row-1]) currentColumn[row-1].startSecond(); 
    if (columnLeft) {
      if (columnLeft[row]) columnLeft[row].startSecond();
      if (columnLeft[offset]) columnLeft[offset].startSecond();
    }
    if (columnRight) {
      if (columnRight[row]) columnRight[row].startSecond();
      if (columnRight[offset]) columnRight[offset].startSecond();
    }

    let doubleOffset = row;
    let doubleLeftColumn = this.hexagons[column-2];
    let doubleRightColumn = this.hexagons[column+2];    
    if (column % 2 !== 0) doubleOffset = row + 1;    
    if (currentColumn[row+2]) currentColumn[row+2].startThird();
    if (currentColumn[row-2]) currentColumn[row-2].startThird(); 
    if (columnLeft) {
      if (columnLeft[doubleOffset+1]) columnLeft[doubleOffset + 1].startThird();
      if (columnLeft[doubleOffset-2]) columnLeft[doubleOffset - 2].startThird();
    }
    if (columnRight) {
      if (columnRight[doubleOffset+1]) columnRight[doubleOffset + 1].startThird();
      if (columnRight[doubleOffset-2]) columnRight[doubleOffset - 2].startThird();
    }
    if (doubleLeftColumn) {
      if (doubleLeftColumn[row]) doubleLeftColumn[row].startThird();
      if (doubleLeftColumn[row+1]) doubleLeftColumn[row+1].startThird();
      if (doubleLeftColumn[row-1]) doubleLeftColumn[row-1].startThird();
    }
    if (doubleRightColumn) {
      if (doubleRightColumn[row]) doubleRightColumn[row].startThird();
      if (doubleRightColumn[row+1]) doubleRightColumn[row+1].startThird();
      if (doubleRightColumn[row-1]) doubleRightColumn[row-1].startThird();
    }
        
  }
}
