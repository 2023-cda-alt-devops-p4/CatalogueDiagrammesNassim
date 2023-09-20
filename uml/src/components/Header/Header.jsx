import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/uml-logo.jpg'
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
            src={Logo}
            width={50}
            height={50}
            alt="Logo"
        />
    )
}


