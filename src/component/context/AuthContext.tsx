import React, { useContext, createContext, useState } from "react"
import { FakeAuth, FakeLoading } from "../../module";
import { LoadingAuth } from "../widget";
import { firebaseApp } from "../../module";

const authContext: React.Context<FakeAuth> = createContext<FakeAuth>({
    isLogin: false
});

const useAuth: FakeAuth = useContext<FakeAuth>(authContext);

function AuthContext(props: {
    children?: JSX.Element,
}) {
    const [loading, useLoading] = useState<FakeLoading>({
        isLoading: true
    });
    const app = firebaseApp;
    app.auth().onAuthStateChanged((user) => {
        useLoading({
            isLoading: false
        });
        if (user === undefined || user === null)
            useAuth.isLogin = false;
        else
            useAuth.isLogin = true;
    })
    return (
        <authContext.Provider value={
            {
                isLogin: false
            }
        } >
            {
                loading.isLoading ? <LoadingAuth /> : props.children
            }
        </authContext.Provider>
    )
}


export {
    useAuth,
    AuthContext,
}
