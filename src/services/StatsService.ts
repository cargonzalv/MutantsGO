import { MutantDocument } from 'db/schemas/mutantSchema';
import { StatsModel } from 'models/statsModel';

export default class StatsService {
  getStats(humans: MutantDocument[]): StatsModel {
    const mutantsCount = humans.filter((h) => h.is_mutant)?.length || 0;
    const humansCount = humans.length;
    const ratio = mutantsCount / humansCount;
    return {
      count_mutant_dna: mutantsCount,
      count_human_dna: humansCount,
      ratio: +ratio.toFixed(2),
    };
  }
}
