const mdLinks = require('../');
const validateLink = require('./src/validate-link');
const validateFileExtension = require('./src/validate-file-extension');
const mdLinks = require('./src/md-links');

const arquivo = [{
  title: '2. Resumo do projeto',
  href: '#2-resumo-do-projeto',
  file: 'README.md'
},
{
  title: '3. Objetivos de aprendizagem',
  href: '#3-objetivos-de-aprendizagem',
  file: 'README.md'
},
{
  title: '4. Considerações gerais',
  href: '#4-considerações-gerais',
  file: 'README.md'
},
{
  title: '5. Critérios de aceitação mínimos do projeto',
  href: '#5-criterios-de-aceitação-mínimos-do-projeto',
  file: 'README.md'
}]


describe('MdLinks', () => {
  // inserimos o done como parâmetro recebido na função it
  it('retorna o objeto', done => {
    
  });
});