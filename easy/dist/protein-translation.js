"use strict";

var AMINOS = {
  'Methionine': ['AUG'],
  'Phenylalanine': ['UUU', 'UUC'],
  'Leucine': ['UUA', 'UUG'],
  'Serine': ['UCU', 'UCC', 'UCA', 'UCG'],
  'Tyrosine': ['UAU', 'UAC'],
  'Cysteine': ['UGU', 'UGC'],
  'Tryptophan': ['UGG'],
  'STOP': ['UAA', 'UAG', 'UGA']
};

function translate(rna) {
  var getCodons = function getCodons(string) {
    var codons = string ? string.match(/[a-z]{3}/ig) || [] : [];
    var valids = Object.values(AMINOS).flat();

    if (codons.some(function (codon) {
      return !valids.includes(codon);
    })) {
      throw Error("Invalid codon");
    }

    for (var index = 0; index < codons.length; index++) {
      if (AMINOS['STOP'].includes(codons[index])) {
        codons = codons.slice(0, index);
      }
    }

    var names = Object.keys(AMINOS);
    return codons.map(function (codon, idx) {
      return names.filter(function (name) {
        return AMINOS[name].includes(codon);
      });
    }).flat();
  };

  var codons = getCodons(rna);
  return codons;
}

module.exports = translate;