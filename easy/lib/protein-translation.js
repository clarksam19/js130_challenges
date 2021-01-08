const AMINOS = {
  'Methionine': ['AUG'],
  'Phenylalanine': ['UUU', 'UUC'],
  'Leucine': ['UUA', 'UUG'],
  'Serine': ['UCU', 'UCC', 'UCA', 'UCG'],
  'Tyrosine': ['UAU', 'UAC'],
  'Cysteine': ['UGU', 'UGC'],
  'Tryptophan': ['UGG'],
  'STOP': ['UAA', 'UAG', 'UGA']
}
function translate(rna) {
  let getCodons = function(string) {
    let codons = string ? string.match(/[a-z]{3}/ig) || [] : [];
    let valids = Object.values(AMINOS).flat();
    if (codons.some(codon => !valids.includes(codon))) {
      throw Error("Invalid codon");
    }
    for (let index = 0; index < codons.length; index++) {
      if (AMINOS['STOP'].includes(codons[index])) {
        codons = codons.slice(0, index);
      } 
    }
      
    let names = Object.keys(AMINOS);
    
    return codons.map((codon, idx) => names.filter(name => AMINOS[name].includes(codon))).flat();
  };
  
  let codons = getCodons(rna);

  return codons;
}

module.exports = translate;
