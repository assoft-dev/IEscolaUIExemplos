import { createContext } from "react";
import { LoginToken } from "../../Types/Security/LoginToken";

export type AuthContextType = {
    user: LoginToken | null;
    LoginEntrar: (Email: string, Password: string) => Promise<LoginToken>;
    LoginSair: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);