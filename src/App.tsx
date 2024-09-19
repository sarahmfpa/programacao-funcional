import { useState } from 'react';

const App = () => {
  const [idades, setIdades] = useState([12, 21, 32, 43, 54]);

  const multiplicarIdade= () => {
    const novaIdade = idades.map((numero) => numero * 2); // Função lambda
    setIdades(novaIdade);
  };

  // Função de alta ordem para criar um multiplicador
  function criarMultiplicador(fator: number) {
    return function(numero: number) {
      return numero * fator; // A função lembra do valor de fator (closure)
    };
  }

  // Multiplica por 3 usando a função de alta ordem
  const multiplicarPor3 = criarMultiplicador(3);

  // Simulando uma "list comprehension" com .map para exibir as idades
  const listaIdades = idades.map(function(numero) {
    return <li key={numero}>{numero} de Idade</li>;
  });

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Lista de Idade</h1>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
      <ul>{listaIdades}</ul>
      
      <button onClick={multiplicarIdade}>Multiplicar seu tempo de vida por 2</button>
      <button  style={{marginTop: '10px'}} onClick={() => setIdades(idades.map(multiplicarPor3))}>
        Multiplicar seu tempo de vida por 3
      </button>
      </div>
    </div>
  );
};

export default App;