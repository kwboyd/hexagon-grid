export class HexModel {
  color = 'light';
  column: number;
  row: number;
  constructor(column, row) {
    this.row = row;
    this.column = column;
  }

  setStart() {
    this.color = 'darker';
    setTimeout(() => {
      this.setSecond();
    }, 300)
  }

  startSecond() {
    setTimeout(() => {
      this.setSecond();
    }, 200)
  }

  setSecond() {
    this.color = 'dark';
    setTimeout(() => {
      this.setThird();
    }, 300)
  }

  startThird() {
    setTimeout(() => {
      this.setThird();
    }, 400)
  }

  setThird() {
    this.color = 'medium';
    setTimeout(() => {
      this.setFourth();
    }, 200)
  }

  setFourth() {
    this.color = 'light';      
  }

}