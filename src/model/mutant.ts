const isMutant = function (dna: string[]): boolean {
  for (let i = 0; i < dna.length; i++) {
    const cols = dna[i].split('');
    for (let j = 0; j < cols.length; j++) {
      const value = cols[j];
      console.log(value);
    }
  }
  return false;
};

export default isMutant;
