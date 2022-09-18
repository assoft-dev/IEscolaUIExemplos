import { useContext } from 'react';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/AuthContext';

export const Login = () =>{

    //Declara;\ao de variaves
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Utilizacao do Contexto
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    //Metodos
    const Entrar = async () => {
        if (email && password) {
            const isLogin = await auth.LoginEntrar(email, password);  
            if (isLogin) {
                navigate('/');
            }
            else{
                alert('login e Senha incorrecta');
            }	        
        }
    }

    return (
        <div>
            <h1>Pagina de Login</h1>
            <input type='text' value={email} onChange={e=> setEmail(e.target.value)} placeholder='Digite seu Email'></input>
            <input type='text' value={password} onChange={e=> setPassword(e.target.value)} placeholder='Digite a senha'></input>
            <button onClick={Entrar}></button>
        </div>
    )

}