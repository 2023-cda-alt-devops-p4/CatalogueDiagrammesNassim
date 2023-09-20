import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/uml-logo.jpg'
import Link from 'next/link';
import './Header.css'

export const Header = ({ children }) => {
    return (
        <header className="header_container">
            <div className="header_logo">
                <HeaderLogo />
            </div>
            <div className="header_container_links">
                <div className="header_link">
                    <Link href="/"> Accueil</Link>
                </div>
                <div className="header_link">
                    <Link href="/UMLS"> UML</Link>
                </div>
                <div className="header_link">
                    <Link href="/Merises"> MERISES</Link>
                </div>
            </div>

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


