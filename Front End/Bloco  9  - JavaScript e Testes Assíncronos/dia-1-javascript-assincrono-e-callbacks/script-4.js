const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
function sendMarsTemperature(callback) {
 const message = `A temperatura de Marte é: ${callback} graus celsius`
 setTimeout(() => console.log(message), messageDelay())
 
}

sendMarsTemperature(getMarsTemperature()); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo