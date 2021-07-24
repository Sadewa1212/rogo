import React, { useContext, createContext, useState, useEffect } from "react"
import { AuthState } from "../../module";
import { LoadingAuth } from "../widget";
import { firebaseApp } from "../../module";

const AuthContext: React.Context<AuthState> = createContext<AuthState>({
    isLogin: false
});

function useAuth(): AuthState {
    return useContext<AuthState>(AuthContext)
}

function AuthProvider(props: {
    children?: JSX.Element,
}): JSX.Element {
    const [loading, setLoading] = useState<boolean>(true);
    const [login, setLogin] = useState<boolean>(false)
    const app = firebaseApp;
    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            if (user === undefined || user === null)
                setLogin(false);
            else
                setLogin(true);
            setLoading(false);
        });
    })
    return (
        <AuthContext.Provider value={
            {
                isLogin: login
            }
        } >
            {
                loading ? <LoadingAuth /> : props.children
            }
        </AuthContext.Provider>
    );
}


export {
    useAuth,
    AuthProvider,
}
