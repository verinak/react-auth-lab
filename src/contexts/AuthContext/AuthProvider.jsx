import { useState } from "react";
import AuthContext from "./AuthContext";

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        // check on app load / page refresh
        const storageAuth = localStorage.getItem("isAuth");
        return !!storageAuth;
    });

    const login = () => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
    };

    const logout = () => {
        localStorage.removeItem("isAuth");
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
