import Image from 'next/image'
import React from 'react'
import Burger from '../../../public/burger.jpg'
import './Header.css';

export const Header = ({ children }) => {
    return (
        <header className="header">
            {children}
        </header>
    )
}

export const HeaderLogo = () => {
    return (
        <Image
            src={Burger}
            width={100}
            height={100}
            alt="Logo"
        />
    )
}


