import { HeaderContainer } from "@/containers/header/HeaderContainer";
import '../pages/css/merise.css';
import Image from 'next/image'
import ImgMerise from '../../public/Merise.jpg';

const infoMerise = [
    {
        id: 1,
        info: "Merise est apparue avant UML en France (70's) et UML en Amérique (90's)"
    },
    {
        id: 2,
        info: "Merise est orienté relationnel ( UML orienté Objet )"
    },
    {
        id: 3,
        info: ""
    }
]
const merise = () => {
    return (
        <>
            <HeaderContainer />
            <div className="container_merise">
                <div className="merise_word">
                    <span className="word"> M</span>éthode d'<span className="word">E</span>tude et de <span className="word">R</span>éalisation <span className="word">I</span>nformatique des <span className="word">S</span>ystème d'<span className="word">E</span>ntreprise :
                </div>

                <div className="merise_learn">
                    <div className="merises"> La méthode MERISE date de 1978-1979, et fait suite à une consultation nationale lancée en 1977 par le ministère de l'Industrie dans le but de choisir des
                        sociétés de conseil en informatique afin de définir une méthode de conception de systèmes d'information.
                        Les deux principales sociétés ayant mis au point cette méthode sont le CTI (Centre Technique d'Informatique)
                        chargé de gérer le projet, et le CETE (Centre d'Etudes Techniques de l'Equipement) implanté à Aix-en-Provence.
                    </div>
                    <div className="merise_picture">
                        <Image src={ImgMerise} height={250} width={500} alt="merise" />
                    </div>
                </div>
                <hr className="separator" />


                <div className="merise_difference">
                    <h3 className="title_merise"> La différence de MERISE a UML</h3>
                    <ul> {infoMerise.map((merise) => (
                        <li key={merise.id}> {merise.info}</li>
                    ))}</ul>
                </div>
            </div>
        </>
    )
}

export default merise;