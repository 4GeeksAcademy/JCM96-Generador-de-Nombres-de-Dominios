import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
 let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

function generateDomainNames(pronouns, adjs, nouns) {
  let domainNames = [];
  for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjs.length; j++) {
      for (let k = 0; k < nouns.length; k++) {
        let domain = pronouns[i] + adjs[j] + nouns[k] + '.com';
        domainNames.push(domain);
      }
    }
  }
  return domainNames;
}

let generatedDomains = generateDomainNames(pronoun, adj, noun);

// Imprimir los dominios generados
for (let i = 0; i < generatedDomains.length; i++) {
  console.log(generatedDomains[i]);
}
};
