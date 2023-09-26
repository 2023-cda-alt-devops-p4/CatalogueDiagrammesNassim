import { HeaderLogo } from "@/components/Header/Header"
import { Header } from "@/components/Header/Header"
import './HeaderContainer.css';
import Link from "next/link"


export const HeaderContainer = () => {
    return (
        <>
            <Header>
                <div className="header_logo">
                    <HeaderLogo />
                </div>
                <div className="header_container">
                    <div className="header_link">
                        <Link href="/"> Accueil</Link>
                    </div>
                    <div className="header_link">
                        <Link href="/uml"> UML </Link>
                    </div>
                    <div className="header_link">
                        <Link href="/merise"> MERISE</Link>
                    </div>
                </div>

            </Header>
        </>
    )
}