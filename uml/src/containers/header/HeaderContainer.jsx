"use client";
import './HeaderContainer.css';
import { useState, useEffect } from "react";
import { Navbar } from "@/containers/header/Navbar";

export const HeaderContainer = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)


    console.log("clicked", isMenuClicked);

    const updateMenu = () => {
        if (!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }



    return (
        <div className="container_header">
            <nav>
                <div className="burger-menu" onClick={() => updateMenu()}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
                <Navbar open={isMenuClicked} />
            </div>

        </div>
    )
}
