const mdLinks = require('../');


describe('mdLinks', () => {

  it('should...', () => {
    console.log('FIX ME!');
  });

});


describe('consultaPersonagens', () => {
  // inserimos o done como parâmetro recebido na função it
  it('consulta personagens com sucesso', done => {
    const callbackDeSucesso = personagens => {
      expect(personagens.length).toEqual(5);
      // executamos o done após nossas asserções
      done();
    };

    consultaPersonagens(callbackDeSucesso);
  });
});