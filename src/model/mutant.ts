const isMutant = function(dna: String[]) {
    for (let i = 0; i < dna.length; i++) {
        let cols = dna[i].split("");
        for (let j = 0; j < cols.length; j++) {
            let value = cols[j];
            console.log(value);
        }
    }
}

export default isMutant;