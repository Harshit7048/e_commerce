import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { Outlet } from "react-router";
import UserContextProvider from "./Context/UserContextProvider";

export default function Layout() {
    return (
        <>
            <UserContextProvider>
                <Header />

                <Outlet />
                <Footer />
            </UserContextProvider>
        </>
    )
}