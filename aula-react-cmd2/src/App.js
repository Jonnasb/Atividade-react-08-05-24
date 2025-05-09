import { useState } from 'react';
import './App.css';


function App() {

  //Hook - Função que permite adicionar estado a um componente
  const [usuario, setUsuario] = useState('');
  const [usuarios, setUsuarios] = useState(['Marta', 'Maria', 'José', ]);

  const adicionarUsuario = () => {
    if (usuarios.includes(usuario)){
      alert('Usuario já existe na lista!');
      return;
    }
    //Adicionando novo usuário na lista.
    setUsuarios([...usuarios, usuario]);
    //Limpa o campo de entrada.
    setUsuario('');
  }
  return (
    <div className='App'>
      <img src='img/lucio-symbol-1.jpg' alt='socorro' className='logo'></img>
      <hr/>
      <h2>Adicionar usuários</h2>
      <input
        type='text'
        placeholder='Digite o nome do usuário'
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <button onClick={adicionarUsuario}>Adicionar</button>
      <hr/>
      <h2>Lista de usuários</h2>
      <ol>
        {usuarios.map((usuario, index) => (<li key={index}>{usuario}</li>))}
      </ol>
    </div>
  );
}

export default App;
