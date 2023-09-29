import Link from "next/link"
import './Navbar.css';


export const Navbar = ({ open }) => {
    if (open === true)
        return (
            <div className="nav_container">
                <div className="nav_link">
                    <Link className="link" href="/"> Accueil</Link>
                </div>
                <div className="nav_link">
                    <Link className="link" href="/uml"> UML </Link>
                </div>
                <div className="nav_link">
                    <Link className="link" href="/merise"> MERISE</Link>
                </div>
            </div>
        )
    return null;

}