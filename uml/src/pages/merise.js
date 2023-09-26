import { HeaderContainer } from "@/containers/header/HeaderContainer";
import '../app/globals.css';

const merise = () => {
    return (
        <div className="container_merise">
            <HeaderContainer />
            <div className="merise_word">
                <span className="word"> M</span>éthode d'<span className="word">E</span>tude et de <span className="word">R</span>éalisation <span className="word">I</span>nformatique des <span className="word">S</span>ystème d'<span className="word">E</span>ntreprise
            </div>
            <div className="learn_merise">

                <h3 className=""> Un peu de lecture pour comprendre merise :  </h3>

                <div className="merises"> La méthode MERISE date de 1978-1979, et fait suite à une consultation nationale lancée en 1977 par le ministère de l'Industrie dans le but de choisir des
                    sociétés de conseil en informatique afin de définir une méthode de conception de systèmes d'information.
                    Les deux principales sociétés ayant mis au point cette méthode sont le CTI (Centre Technique d'Informatique)
                    chargé de gérer le projet, et le CETE (Centre d'Etudes Techniques de l'Equipement) implanté à Aix-en-Provence.
                </div>

            </div>
        </div>
    )
}

export default merise;