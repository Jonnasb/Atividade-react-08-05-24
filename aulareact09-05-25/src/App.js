import logo from './logo.svg';
import './App.css';
import logo from './assets/images/logo.png'
import UserInput from './components/UserInput';
import UserList from './components/UserList';
import { useState } from 'react';


function App() {

  const [usuarios, setUsuarios] = useState(['Marta','Maria', 'José']);

  const adicionarUsuario = (novoUsuario) => {
    if (usuarios.includes (novoUsuario)) {
      alert('Usuário já existe na lista.');
      return;
    }
    setUsuario([...usuarios, novoUsuario]);

  }


  return (
    <div className="App">
    <img scr ={logo} alt='Logo da empresa' className='logo' />
    <hr/>
    <UserList usuarios={usuarios}/>
    </div>
  );
}
       

export default App;
