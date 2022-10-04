import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import { Private } from './Page/Privado';
import { RequireAuth } from './Contexts/Auth/RequireAuth';
import { AuthContext } from './Contexts/Auth/AuthContext';
import { useContext } from 'react';
import DashboardPage from './Page/Dashboard/DashboardPage';

function App() {
  const Auth = useContext(AuthContext);

  const LoginSair = async () => {
    await Auth.LoginSair();
    window.location.href = window.location.href;
  }

  return (
    <div className="App">
        <header>
          {Auth.user &&
              <DashboardPage/>}
        </header>


      <Routes>
        <Route path='/' element={<RequireAuth><DashboardPage /></RequireAuth>} />
        <Route path='/Private' element={<RequireAuth><Private /></RequireAuth>} />
      </Routes>
    </div>
  );
}

export default App;
