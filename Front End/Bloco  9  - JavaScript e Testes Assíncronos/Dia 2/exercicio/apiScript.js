// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const divJoke = document.getElementById('jokeContainer')

const imprimir = (joker) => {
  const piada = document.createElement('p');
  piada.innerText = joker;
  divJoke.appendChild(piada);
}

const fetchJoke = () => {
  const meuObjeto = {
    method: 'GET',
    headers : {'Accept': 'application/json'}
  }

  fetch(API_URL, meuObjeto)
  .then(response => response.json())
  .then(data => imprimir(data.joke));
}


window.onload = () => fetchJoke();