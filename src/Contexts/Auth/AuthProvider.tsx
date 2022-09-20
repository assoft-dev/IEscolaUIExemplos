import { useEffect, useState } from "react"
import { useAPI } from "../../Hooks/UseAPI";
import { LoginToken } from "../../Types/Security/LoginToken";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [user, setUser] = useState<LoginToken | null>(null);
    const api = useAPI();

    //Executado no momento em que ele inicia a app
    useEffect(() => {
        const validateToken = async () => {
             const storegeData = localStorage.getItem('AuthToken');
             if (storegeData) {
                var user = (JSON.parse(storegeData)) as LoginToken;
                const data = await api.validateToken(user.Token);
                if (data) {
                    setUser(data);
                }
             }
        }
        validateToken();
    }, [api])

    const LoginEntrar = async (Email: string, Password: string) => {
        const data = await api.loginEntrar(Email, Password);

        if (data.Usuario && data.Token) {
            setUser(data);
            setToken(data)
            return data;
        }
        return data;
    }

    const LoginSair = async () => {
        //await api.loginSair();
        setUser(null);
        localStorage.removeItem('AuthToken');
    }

    const setToken = (token: LoginToken) => {
        localStorage.setItem('AuthToken', JSON.stringify(token));
    }

    return (
        <AuthContext.Provider value={{ user, LoginEntrar, LoginSair }}>
            {children}
        </AuthContext.Provider>)
}