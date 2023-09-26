import { HeaderContainer } from "@/containers/header/HeaderContainer";
import '../app/globals.css';

const merise = () => {
    return (
        <div className="container_merise">
            <HeaderContainer />
            <div className="merise_word">
                <span className="word"> M</span>éthode d'<span className="word">E</span>tude et de <span className="word">R</span>éalisation <span className="word">I</span>nformatique des <span className="word">S</span>ystème d'<span className="word">E</span>ntreprise
            </div>
        </div>
    )
}

export default merise;