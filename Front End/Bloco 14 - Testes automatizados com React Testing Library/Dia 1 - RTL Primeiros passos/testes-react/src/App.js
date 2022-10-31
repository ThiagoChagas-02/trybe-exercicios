import './App.css';

function App() {
  return (
    <div className="App">
      <label htmlFor="id-email" >
        Email
        <input id="id-email" type="email" ></input>
      </label>
      <input id="btn-send" type="button" data-testid="id-send" value="Enviar" ></input>
      <input id="btn-back" type="button" value="Voltar"></input>
    </div>
  );
}

export default App;
