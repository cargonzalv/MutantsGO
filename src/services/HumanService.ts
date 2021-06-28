import { allEqual } from '../utils';

class HumanService {
  dna: string[];
  repetitions = 0;
  constructor(dna: string[]) {
    this.dna = dna;
  }

  isMutant(): boolean {
    this.dna.forEach((row, y) => {
      for (let x = 0; x < row.length; x++) {
        this.checkHorizontal(x, y);
        this.checkVertical(x, y);
        this.checkDiagonal1(x, y);
        this.checkDiagonal2(x, y);
      }
    });
    if (this.repetitions > 1) {
      return true;
    }
    return false;
  }

  checkHorizontal(x: number, y: number): void {
    if (this.dna[y] && this.dna[y][x + 3]) {
      const sequenceBlock = [this.dna[y][x], this.dna[y][x + 1], this.dna[y][x + 2], this.dna[y][x + 3]];
      if (allEqual(sequenceBlock)) {
        this.repetitions++;
      }
    }
  }

  checkVertical(x: number, y: number): void {
    if (this.dna[y + 3] && this.dna[y + 3][x]) {
      const sequenceBlock = [this.dna[y][x], this.dna[y + 1][x], this.dna[y + 2][x], this.dna[y + 3][x]];
      if (allEqual(sequenceBlock)) {
        this.repetitions++;
      }
    }
  }

  checkDiagonal1(x: number, y: number): void {
    if (this.dna[y + 3] && this.dna[y + 3][x + 3]) {
      const sequenceBlock = [this.dna[y][x], this.dna[y + 1][x + 1], this.dna[y + 2][x + 2], this.dna[y + 3][x + 3]];
      if (allEqual(sequenceBlock)) {
        this.repetitions++;
      }
    }
  }

  checkDiagonal2(x: number, y: number): void {
    if (this.dna[y + 3] && this.dna[y + 3][x - 3]) {
      const sequenceBlock = [this.dna[y][x], this.dna[y + 1][x - 1], this.dna[y + 2][x - 2], this.dna[y + 3][x - 3]];
      if (allEqual(sequenceBlock)) {
        this.repetitions++;
      }
    }
  }
}

export default HumanService;
