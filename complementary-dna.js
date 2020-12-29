function DNAStrand(dna){
    let ar = dna.split('').map(el => {
      if(el === 'A') return el = 'T';
      if(el === 'T') return el = 'A';
      if(el === 'C') return el = 'G';
      if(el === 'G') return el = 'C';
    })
     return ar.join('');
}
   
DNAStrand("AAAA")//"TTTT","String AAAA is");
DNAStrand("ATTGC")//"TAACG","String ATTGC is");
DNAStrand("GTAT")//"CATA","String GTAT is");