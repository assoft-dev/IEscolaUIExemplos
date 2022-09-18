import { useEffect, useState } from "react"
import { useAPI } from "../../Hooks/UseAPI";
import { User } from "../../Types/User";
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

    const [user, setUser] = useState<User | null>(null);
    const api = useAPI();

    //Executado no momento em que ele inicia a app
    useEffect(() => {
        const validateToken = async () => {
             const storegeData = localStorage.getItem('AuthToken');
             if (storegeData) {
                const data = await api.validateToken(storegeData);
                if (data.user) {
                    setUser(data.user);
                }
             }
        }
        validateToken();
    }, [api])

    const LoginEntrar = async (Email: string, Password: string) => {
        const data = await api.loginEntrar(Email, Password);

        if (data.user && data.token) {
            setUser(data.user);
            setToken(data.Token)
            return true;
        }
        return false;
    }

    const LoginSair = async () => {
        await api.loginSair();
        setUser(null);
        setToken('');
    }

    const setToken = (token: string) => {
        localStorage.setItem('AuthToken', token);
    }

    // const getToken = () => {
    //     localStorage.getItem('AuthToken');
    // }

    return (
        <AuthContext.Provider value={{ user, LoginEntrar, LoginSair }}>
            {children}
        </AuthContext.Provider>)
}