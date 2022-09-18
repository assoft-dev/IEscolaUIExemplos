import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Home } from './Page/Inicio';
import { Private } from './Page/Privado';
import { RequireAuth } from './Contexts/Auth/RequireAuth';
import { AuthContext } from './Contexts/Auth/AuthContext';
import { useContext } from 'react';

function App() {
  const Auth = useContext(AuthContext);

  const LoginSair = async () =>{
    await Auth.LoginSair();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
      <header>
        <h1> Site de Testes  </h1>

        <nav>
          <Link to="/">Home </Link>
          <Link to="/Private">Private </Link>
          {Auth.user && <button onClick={LoginSair}>Sair</button>}
        </nav>
      </header>

      <hr />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Private' element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>

    </div>
  );
}

export default App;
