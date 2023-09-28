"use client";
import './HeaderContainer.css';
import { useState, useEffect } from "react";
import { Header } from "@/components/Header/Header"
import { Navbar } from "@/containers/header/Navbar";

export const HeaderContainer = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleNav = () => {
        setNavbarOpen(!navbarOpen);
        console.log("state change", navbarOpen)
    }
    useEffect(() => {
        handleNav();
    }, [])

    return (
        <>
            <div style={{ width: '100%', height: '100vh' }}>
                <nav>
                    <div className="burger-menu" onClick={updateMenu}>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                        <div className={burger_class} ></div>
                    </div>
                </nav>

                <div className={menu_class}></div>
            </div>
            <Header>
                <Navbar props={navbarOpen} onClick={handleNav} />
            </Header>
        </>
    )
}