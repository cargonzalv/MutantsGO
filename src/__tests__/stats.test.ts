import { MutantDocument, Mutant } from 'db/schemas/mutantSchema';
import { StatsService } from '../services';

describe('stats', () => {
  const human = new Mutant();
  human.is_mutant = false;
  const mutant = new Mutant();
  mutant.is_mutant = true;

  test('stats returns correct calc', () => {
    const humans: MutantDocument[] = [human, mutant, mutant, mutant]; // Insert 3 mutants, 4 total humans
    const statsService = new StatsService();

    expect(statsService.getStats(humans)).toMatchObject({
      count_mutant_dna: 3,
      count_human_dna: 4,
      ratio: 0.75,
    });
  });
  test('stats should return zero', () => {
    const statsService = new StatsService();
    const humans: MutantDocument[] = [];

    expect(statsService.getStats(humans)).toMatchObject({
      count_mutant_dna: 0,
      count_human_dna: 0,
      ratio: 0,
    });
  });
});
