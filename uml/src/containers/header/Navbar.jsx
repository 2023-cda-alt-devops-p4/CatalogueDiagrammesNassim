import Link from "next/link"
import './Navbar.css';


export const Navbar = ({ open }) => {
    if (open === true)
        return (
            <div className="nav_container">
                <div className="nav_link">
                    <Link href="/"> Accueil</Link>
                </div>
                <div className="nav_link">
                    <Link href="/uml"> UML </Link>
                </div>
                <div className="nav_link">
                    <Link href="/merise"> MERISE</Link>
                </div>
            </div>
        )
    return null;

}