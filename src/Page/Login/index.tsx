import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/Auth/AuthContext';

export const Login = () => {
    //Declara;\ao de variaves
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //Utilizacao do Contexto
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    //Metodos
    const Entrar = async () => {
        try {
            if (email && password) {
                const isLogin = await auth.LoginEntrar(email, password);
                if (isLogin.Validation) {
                    navigate('/');
                }
                else {
                    alert('Usuario ou senha incorrecta')
                    //setPassword('');
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div id="app">
            {/* <div className="loader" /> */}
            <div>
                <section className="section">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
                                <div className="card card-primary">
                                    <div className="card-header">
                                        <h4>Login</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label>E-Mail</label>
                                            <input value={email} onChange={e =>
                                                setEmail(e.target.value)}
                                                placeholder='Digite seu Email'
                                                id="email" type="email" className="form-control" name="email" tabIndex={1} required />
                                            <div className="invalid-feedback"> Por favor procure pelo seu E-Mail </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="d-block">
                                                <label htmlFor="password" className="control-label">Senha</label>
                                                <div className="float-right">
                                                    <a href="auth-forgot-password.html" className="text-small">
                                                        Esqueceste sua senha?
                                                    </a>
                                                </div>
                                            </div>

                                            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Digite a senha'
                                                id="password" type="password" className="form-control" name="password" tabIndex={2} required />
                                            <div className="invalid-feedback"> Por favor digite sua senha! </div>
                                        </div>

                                        <div className="form-group">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" name="remember" className="custom-control-input" tabIndex={3} id="remember-me" />
                                                <label className="custom-control-label" htmlFor="remember-me">Lembre-me deste usuário</label>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <button id="swal-2" onClick={Entrar} className="btn btn-primary btn-lg btn-block" tabIndex={4}> Entrar </button>
                                        </div>

                                        <div className="text-center mt-4 mb-3">
                                            <div className="text-job text-muted">Entrar com as redes sociais</div>
                                        </div>

                                        <div className="row sm-gutters">
                                            <div className="col-6">
                                                <a className="btn btn-block btn-social btn-facebook"><span className="fab fa-facebook" /> Facebook</a>
                                            </div>
                                            <div className="col-6">
                                                <a className="btn btn-block btn-social btn-twitter"><span className="fab fa-twitter" /> Twitter</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-5 text-muted text-center">
                                    Não tens uma conta? <a href="auth-register.html">Criar uma conta Agora!</a>
                                </div>
                                <div className="simple-footer">
                                    Copyright © ASINFORPREST 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>)
}
