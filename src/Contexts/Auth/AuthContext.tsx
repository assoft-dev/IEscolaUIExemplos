import { createContext } from "react";
import { User } from "../../Types/User";

export type AuthContextType ={
    user: User | null;
    LoginEntrar: (Email: string, Password: string) => Promise<boolean>;
    LoginSair: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);