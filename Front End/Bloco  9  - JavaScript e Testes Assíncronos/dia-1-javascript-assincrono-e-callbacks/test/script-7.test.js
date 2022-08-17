const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


test('Verifica se passado oi retorna OI ', (done) => {
  uppercase('oi', (string) => {
   expect(string).toBe('OI')
  })
  done()
 })
