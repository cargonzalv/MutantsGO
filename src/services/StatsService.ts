import { MutantDocument } from 'db/schemas/mutantSchema';
import { StatsModel } from 'models/statsModel';

export default class StatsService {
  getStats(humans: MutantDocument[]): StatsModel {
    const mutantsCount = humans.filter((h) => h.is_mutant)?.length || 0; // Filter mutants out, if not found return 0
    const humansCount = humans.length;
    const ratio = humansCount !== 0 ? mutantsCount / humansCount : 0; // Preventing dividing by zero
    return {
      count_mutant_dna: mutantsCount,
      count_human_dna: humansCount,
      ratio: +ratio.toFixed(2),
    };
  }
}
