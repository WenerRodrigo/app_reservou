import { createContext, ReactNode, useState } from "react";

interface AuthProviderData {
    children: ReactNode;
}

interface User {
    name: string;
    email: string;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider = ({ children }: AuthProviderData) => {
    const [signed, setSigned] = useState(false);

    const signIn = () => {
        setSigned(true);
    }

    const signOut = () => {
        setSigned(false);
    }

    return (
        <AuthContext.Provider value={{
            signed,
            signIn,
            signOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}