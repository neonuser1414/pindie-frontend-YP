
"use client"

import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { useEffect, useState } from "react";
import { useStore } from "./store/app-store";
// import { getJWT, setJWT, removeJWT, getMe } from "./api/api-utils";
// import { endpoints } from "./api/config";
// import { AuthContext } from './context/app-context';


export const App = (props) => {
    //
    const store = useStore();
    //
    useEffect(() => {
        store.checkAuth();
    }, []);
    //
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    );
 }


