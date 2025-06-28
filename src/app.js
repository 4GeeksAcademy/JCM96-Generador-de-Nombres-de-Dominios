import "bootstrap";
import "./style.css";

window.onload = function() {
  // Usa 'const' para listas que no cambian. Es más seguro.
  const pronouns = ['the', 'our'];
  const adjs = ['great', 'big'];
  const nouns = ['jogger', 'racoon'];

  // Usa bucles 'forEach', que son más fáciles de leer.
  pronouns.forEach(pronoun => {
    adjs.forEach(adj => {
      nouns.forEach(noun => {
        // Usa "template literals" (`) para crear el texto. Es más limpio.
        const domain = `${pronoun}${adj}${noun}.com`;
        console.log(domain);
      });
    });
  });
};