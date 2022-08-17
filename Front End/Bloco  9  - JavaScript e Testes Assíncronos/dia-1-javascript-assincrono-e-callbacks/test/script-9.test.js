// // Verifique se a importação do arquivo correto está sendo feita.
// const { getPokemonDetails } = require('../script-8');

// describe('A função getPokemonDetails', (done) => {
//   it('retorna erro quando procuramos um pokémon que não existe no banco de dados', (done) => {
//     expect(() => {getPokemonDetails('Squirtlee', handlePokemonSearch)}).toThrow();
//     done()
//   });

//   it('retorna um pokémon que existe no banco de dados', () => {
//     // Escreva aqui seu código
//   });
// });


beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});

/* 
1 - beforeEach
2 - beforeEach
1 - test
2 - test
1 - afterEach
2 - afterEach
*/