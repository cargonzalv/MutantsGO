import { HumanService } from '../services';

describe('isMutant', () => {
  test('isMutant detects mutant', () => {
    const mutantDNA = ['ATGCGA', 'CAGTGC', 'TTATGT', 'AGAAGG', 'CCCCTA', 'TCACTG'];
    const human = new HumanService(mutantDNA);
    expect(human.isMutant()).toBe(true);
  });

  test('isMutant detects human', () => {
    const humanDNA = ['ATGCGA', 'CAGTGC', 'TTATTT', 'AGACGG', 'GCGTCA', 'TCACTG'];
    const human = new HumanService(humanDNA);
    expect(human.isMutant()).toBe(false);
  });

  test('isMutant returns error', () => {
    const humanDNA = [];
    expect(() => {
      const human = new HumanService(humanDNA);
      human.isMutant();
    }).toThrowError();
  });
});
