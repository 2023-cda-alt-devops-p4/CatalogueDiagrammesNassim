import Link from "next/link"
import './HeaderLinks.css';


export const Navbar = ({ props, onClick }) => {
    if (props === true)
        return (
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
        )
    return null;

}